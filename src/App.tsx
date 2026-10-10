import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import FloatingSideElements from './components/layout/FloatingSideElements'
import CursorCat from './components/layout/CursorCat'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import EducationPage from './components/pages/EducationPage'
import CertificationsPage from './components/pages/CertificationsPage'
import VolunteerPage from './components/pages/VolunteerPage'
import { portfolioData } from './data/content'
import { useHash, routeFromHash, Route } from './lib/router'

const pageTitles: Record<Route, string> = {
  '/': portfolioData.meta.siteTitle,
  '/education': `Education | ${portfolioData.hero.name}`,
  '/certifications': `Certifications | ${portfolioData.hero.name}`,
  '/volunteer': `Volunteer Work | ${portfolioData.hero.name}`,
};

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  const hash = useHash();
  const route = routeFromHash(hash);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const glowRef = useRef<HTMLDivElement>(null);
  const prevHash = useRef<string | null>(null);

  // Set the glow position on the glow element only, so mouse moves don't restyle the whole page
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty('--mouse-x', `${e.clientX}px`);
      glowRef.current?.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.title = pageTitles[route];
  }, [route]);

  // Page routes ("#/...") start at the top; section anchors ("#about") scroll once the home page has rendered.
  // On first load, leave the position to the browser (so a reload keeps your place) unless a section was linked.
  useEffect(() => {
    const isSection = hash.length > 1 && !hash.startsWith('#/');
    const isInitial = prevHash.current === null || prevHash.current === hash;
    prevHash.current = hash;
    if (isInitial) {
      if (isSection) document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    if (isSection) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <div className="cursor-glow" ref={glowRef} />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar route={route} />
        <div className="rails" aria-hidden="true" />
        <FloatingSideElements />
        <CursorCat />
        <main className="frame">
          {route === '/' && <Home />}
          {route === '/education' && <EducationPage />}
          {route === '/certifications' && <CertificationsPage />}
          {route === '/volunteer' && <VolunteerPage />}
          <Footer />
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
