import type { ReactNode } from 'react';
import { BrainCircuit, Workflow, Cloud, Terminal, Database, Code2 } from 'lucide-react';
import { portfolioData, SkillCategory } from '../../data/content';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const icons: Record<SkillCategory['icon'], ReactNode> = {
  ai: <BrainCircuit size={18} />,
  data: <Workflow size={18} />,
  cloud: <Cloud size={18} />,
  code: <Terminal size={18} />,
  tools: <Database size={18} />,
  web: <Code2 size={18} />,
};

export default function Skills() {
  const { skills, domains } = portfolioData;

  return (
    <Section id="skills" eyebrow="04 · skills" title="Skills & Tools" subtitle="What I use day to day, and what I'm building toward">
      <div className="skills-grid">
        {skills.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 2) * 0.06} className={`skill-block card ${cat.icon === 'ai' ? 'skill-block-focus' : ''}`}>
            <div className="skill-block-head">
              <span className="skill-icon">{icons[cat.icon]}</span>
              <h3>{cat.title}</h3>
              {cat.note && <span className="chip chip-accent skill-note">{cat.note}</span>}
            </div>
            <div className="chip-row">
              {cat.items.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="domains">
        <span className="mono">domains</span>
        {domains.map((d) => (
          <span key={d} className="domain">{d}</span>
        ))}
      </Reveal>
    </Section>
  );
}
