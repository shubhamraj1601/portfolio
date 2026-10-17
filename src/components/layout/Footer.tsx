import { portfolioData } from '../../data/content';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import FrameLines from '../ui/FrameLines';
import GoogleIcon from '../ui/GoogleIcon';

export default function Footer() {
  const { contact, hero } = portfolioData;

  const links = [
    { href: contact.github, label: 'GitHub', icon: <Github size={16} /> },
    { href: contact.googleBadges, label: 'Google Cloud credentials & skill badges', icon: <GoogleIcon size={16} /> },
    { href: contact.linkedin, label: 'LinkedIn', icon: <Linkedin size={16} /> },
    { href: `mailto:${contact.email}`, label: 'Email', icon: <Mail size={16} /> },
  ];

  return (
    <footer className="footer">
      <FrameLines bottom={false} />
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="footer-name">{hero.name}</span>
          <span className="footer-sep" aria-hidden="true">·</span>
          <span className="footer-loc"><MapPin size={12} /> {contact.location}</span>
        </p>
        <div className="footer-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-label={l.label}
              title={l.label}
              {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
