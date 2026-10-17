import { GraduationCap } from 'lucide-react';
import { portfolioData, AcademicItem } from '../../data/content';
import PageShell from './PageShell';
import Reveal from '../ui/Reveal';

export default function EducationPage() {
  const { academics } = portfolioData;

  return (
    <PageShell eyebrow="more · education" title="Education" subtitle="Degrees, coursework and academic background">
      <div className="timeline">
        {academics.map((edu: AcademicItem, i: number) => (
          <Reveal key={edu.id} delay={i * 0.05} className="job">
            <span className={`timeline-dot ${edu.current ? 'current' : ''}`} aria-hidden="true" />
            <div className="job-head">
              <div>
                <h3 className="job-role">
                  {edu.degree}
                  {edu.current && <span className="chip chip-accent edu-current">In progress</span>}
                </h3>
                <p className="job-company">
                  <span><GraduationCap size={14} style={{ verticalAlign: '-2px' }} /> {edu.institution}</span>
                </p>
              </div>
              <span className="job-date mono">{edu.duration}</span>
            </div>
            <p className="job-summary">{edu.description}</p>
            {edu.coursework && (
              <p className="edu-coursework">
                <span className="mono">Coursework:</span> {edu.coursework.join(', ')}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
