import { portfolioData } from '../../data/content';
import { Briefcase, GraduationCap, FlaskConical, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const currentlyIcons = [<Briefcase size={15} />, <GraduationCap size={15} />, <FlaskConical size={15} />, <Sparkles size={15} />];

export default function About() {
  const { about } = portfolioData;

  return (
    <Section id="about" eyebrow="01 · about" title="About Me" subtitle="Data engineer by trade, heading deeper into AI & ML">
      <div className="about-grid">
        <Reveal className="about-text">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="about-currently card">
          <p className="about-currently-title mono">currently</p>
          <ul>
            {about.currently.map((item, i) => (
              <li key={item.label}>
                <span className="about-currently-icon">{currentlyIcons[i % currentlyIcons.length]}</span>
                <div>
                  <span className="about-currently-label">{item.label}</span>
                  <span className="about-currently-text">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
