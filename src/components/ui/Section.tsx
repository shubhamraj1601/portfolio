import type { ReactNode } from 'react';
import FrameLines from './FrameLines';
import Reveal from './Reveal';

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section-head">
        <FrameLines />
        <Reveal>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </Reveal>
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
}
