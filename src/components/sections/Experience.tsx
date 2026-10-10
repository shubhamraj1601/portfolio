import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { portfolioData, ExperienceItem, ExperienceProject } from '../../data/content';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

function ProjectAccordion({ projects }: { projects: ExperienceProject[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="job-projects">
      {projects.map((p, i) => {
        const isOpen = open.has(i);
        return (
          <div key={p.title} className={`job-project ${isOpen ? 'open' : ''}`}>
            <button type="button" className="job-project-head" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <div className="job-project-title">
                <span>{p.title}</span>
                <span className="chip chip-accent">{p.domain}</span>
              </div>
              <div className="job-project-meta">
                <span className="mono">{p.stack}</span>
                <ChevronDown size={16} className={`chevron ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <ul className="bullets job-project-body">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <Section id="experience" eyebrow="02 · experience" title="Work Experience" subtitle="Building cloud data platforms for enterprise clients">
      <div className="timeline">
        {experience.map((job: ExperienceItem, i: number) => (
          <Reveal key={job.id} delay={i * 0.05} className="job">
            <span className={`timeline-dot ${i === 0 ? 'current' : ''}`} aria-hidden="true" />
            <div className="job-head">
              <div>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">
                  <span>{job.company}</span>
                  {job.location && (
                    <span className="job-location">
                      <MapPin size={12} /> {job.location}
                    </span>
                  )}
                </p>
              </div>
              <span className="job-date mono">{job.duration}</span>
            </div>

            {job.summary && <p className="job-summary">{job.summary}</p>}
            {job.projects && <ProjectAccordion projects={job.projects} />}
            {job.highlights && (
              <ul className="bullets">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}

            <div className="chip-row job-tech">
              {job.technologies.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
