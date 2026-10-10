import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Section from '../ui/Section';

interface PageShellProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageShell({ eyebrow, title, subtitle, children }: PageShellProps) {
  return (
    <div className="page">
      <div className="page-back">
        <a href="#/" className="page-back-link">
          <ArrowLeft size={15} /> Back to home
        </a>
      </div>
      <Section eyebrow={eyebrow} title={title} subtitle={subtitle}>
        {children}
      </Section>
    </div>
  );
}
