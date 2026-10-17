import { portfolioData } from '../../data/content';
import { Mail, Linkedin, Github, FileText, ScrollText } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

export default function Contact() {
  const { contact, hero } = portfolioData;

  return (
    <Section id="contact" eyebrow="05 · contact" title="Get In Touch" subtitle="Let's build data platforms, AI solutions and software together">
      <Reveal className="contact">
        <span className="availability">
          <span className="status-dot" aria-hidden="true" />
          {hero.availability}
        </span>

        <p className="contact-text">
          Whether it's a data platform that needs modernizing, an AI/ML idea you want to get off the ground, or a freelance project —
          I'd love to hear about it.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            <Mail size={16} /> Say hello
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github size={16} /> GitHub
          </a>
          <a href={hero.resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FileText size={16} /> Resume
          </a>
          <a href={hero.cvLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <ScrollText size={16} /> CV
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
