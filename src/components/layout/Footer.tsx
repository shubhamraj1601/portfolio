import { portfolioData } from '../../data/content';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const { contact } = portfolioData;

  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {contact.github && <a href={contact.github} aria-label="GitHub"><Github size={20} /></a>}
          {contact.linkedin && <a href={contact.linkedin} aria-label="LinkedIn"><Linkedin size={20} /></a>}
          {('twitter' in contact) && <a href={(contact as any).twitter} aria-label="Twitter"><Twitter size={20} /></a>}
          {contact.email && <a href={`mailto:${contact.email}`} aria-label="Email"><Mail size={20} /></a>}
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Designed & Built with ❤️ by {portfolioData.hero.name}
        </p>
      </div>
    </footer>
  );
}
