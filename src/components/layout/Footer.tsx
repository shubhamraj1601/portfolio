import { portfolioData } from '../../data/content';
import { Github, Linkedin, Mail, Award } from 'lucide-react';

export default function Footer() {
  const { contact, hero } = portfolioData;

  return (
    <footer style={{ padding: '2.5rem 1.5rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '1.25rem' }}>
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Github size={20} />
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Linkedin size={20} />
            </a>
          )}
          {contact.googleBadges && (
            <a href={contact.googleBadges} target="_blank" rel="noopener noreferrer" aria-label="Google Skill Badges" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Award size={20} />
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} aria-label="Email" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Mail size={20} />
            </a>
          )}
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          Designed & Built by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{hero.name}</span> &bull; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
