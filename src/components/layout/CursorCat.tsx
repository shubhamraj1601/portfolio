import { useEffect, useRef } from 'react';

// A small pixel cat that chases the cursor.
// React port of oneko.js by adryd (MIT License) — https://github.com/adryd325/oneko.js
// Sprite sheet: /public/oneko.gif (32×32 frames, offsets below are in frame units).

type SpriteName =
  | 'idle' | 'alert' | 'scratchSelf' | 'scratchWallN' | 'scratchWallS' | 'scratchWallE' | 'scratchWallW'
  | 'tired' | 'sleeping' | 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

const SPRITES: Record<SpriteName, [number, number][]> = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  scratchWallN: [[0, 0], [0, -1]],
  scratchWallS: [[-7, -1], [-6, -2]],
  scratchWallE: [[-2, -2], [-2, -3]],
  scratchWallW: [[-4, 0], [-4, -1]],
  tired: [[-3, -2]],
  sleeping: [[-2, 0], [-2, -1]],
  N: [[-1, -2], [-1, -3]],
  NE: [[0, -2], [0, -3]],
  E: [[-3, 0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W: [[-4, -2], [-4, -3]],
  NW: [[-1, 0], [-1, -1]],
};

const SPEED = 10;        // px per step
const FRAME_MS = 100;    // steps every 100ms, which gives the slow, deliberate chase

export default function CursorCat() {
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cat = catRef.current;
    if (!cat) return;
    const skip =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (skip) return;

    let catX = 32;
    let catY = 32;
    let mouseX = 0;
    let mouseY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: SpriteName | null = null;
    let idleAnimationFrame = 0;
    let lastTimestamp = 0;
    let rafId = 0;

    const setSprite = (name: SpriteName, frame: number) => {
      const frames = SPRITES[name];
      const [x, y] = frames[frame % frames.length];
      cat.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
    };

    const resetIdle = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      // Occasionally start an idle animation (~every 20s)
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        const options: SpriteName[] = ['sleeping', 'scratchSelf'];
        if (catX < 32) options.push('scratchWallW');
        if (catY < 32) options.push('scratchWallN');
        if (catX > window.innerWidth - 32) options.push('scratchWallE');
        if (catY > window.innerHeight - 32) options.push('scratchWallS');
        idleAnimation = options[Math.floor(Math.random() * options.length)];
      }

      switch (idleAnimation) {
        case 'sleeping':
          if (idleAnimationFrame < 8) {
            setSprite('tired', 0);
            break;
          }
          setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdle();
          break;
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdle();
          break;
        default:
          setSprite('idle', 0);
          return;
      }
      idleAnimationFrame += 1;
    };

    const step = () => {
      frameCount += 1;
      const diffX = catX - mouseX;
      const diffY = catY - mouseY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < SPEED || distance < 48) {
        idle();
        return;
      }

      resetIdle();

      // Pause on "alert" for a moment before starting to run
      if (idleTime > 1) {
        setSprite('alert', 0);
        idleTime = Math.min(idleTime, 7) - 1;
        return;
      }

      let direction = diffY / distance > 0.5 ? 'N' : '';
      direction += diffY / distance < -0.5 ? 'S' : '';
      direction += diffX / distance > 0.5 ? 'W' : '';
      direction += diffX / distance < -0.5 ? 'E' : '';
      setSprite(direction as SpriteName, frameCount);

      catX -= (diffX / distance) * SPEED;
      catY -= (diffY / distance) * SPEED;
      catX = Math.min(Math.max(16, catX), window.innerWidth - 16);
      catY = Math.min(Math.max(16, catY), window.innerHeight - 16);

      cat.style.transform = `translate(${catX - 16}px, ${catY - 16}px)`;
    };

    const onFrame = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      if (timestamp - lastTimestamp > FRAME_MS) {
        lastTimestamp = timestamp;
        step();
      }
      rafId = window.requestAnimationFrame(onFrame);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    cat.style.transform = `translate(${catX - 16}px, ${catY - 16}px)`;
    cat.style.display = 'block';
    document.addEventListener('mousemove', onMouseMove);
    rafId = window.requestAnimationFrame(onFrame);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={catRef} className="cursor-cat" aria-hidden="true" />;
}
