import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';
import { ArrowRight, FileText, MapPin, BadgeCheck, Github, Linkedin, Mail, Award } from 'lucide-react';
import FrameLines from '../ui/FrameLines';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut', delay },
});

export default function Hero() {
  const { hero, contact } = portfolioData;

  const socials = [
    { href: contact.github, label: 'GitHub', icon: <Github size={17} /> },
    { href: contact.linkedin, label: 'LinkedIn', icon: <Linkedin size={17} /> },
    { href: contact.googleBadges, label: 'Google Cloud skill badges', icon: <Award size={17} /> },
    { href: `mailto:${contact.email}`, label: 'Email', icon: <Mail size={17} /> },
  ];

  return (
    <section id="top" className="hero">
      <div className="hero-banner">
        <img src={hero.banner} alt="" />
        <FrameLines top={false} />
      </div>

      <div className="hero-body">
        <motion.div className="hero-id-row" {...fadeUp(0.05)}>
          <img className="hero-avatar" src={hero.avatar} alt={hero.name} width={112} height={112} />
          <span className="availability">
            <span className="status-dot" aria-hidden="true" />
            {hero.availability}
          </span>
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.1)}>
          {hero.name}
          <span className="hero-verified" title={hero.certification}>
            <BadgeCheck size={22} aria-label={hero.certification} />
          </span>
        </motion.h1>

        <motion.p className="hero-headline" {...fadeUp(0.15)}>
          {hero.headline}
        </motion.p>

        <motion.div className="hero-meta mono" {...fadeUp(0.2)}>
          <span><MapPin size={14} /> {hero.location}</span>
          <span className="hero-meta-sep" aria-hidden="true">/</span>
          <span><Award size={14} /> {hero.certification}</span>
        </motion.div>

        <motion.p className="hero-tagline" {...fadeUp(0.25)}>
          {hero.tagline}
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.3)}>
          <a href="/#contact" className="btn btn-primary">
            Get in touch <ArrowRight size={16} />
          </a>
          <a href={hero.resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FileText size={16} /> Resume
          </a>
          <div className="hero-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="icon-btn"
                aria-label={s.label}
                title={s.label}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-stats" {...fadeUp(0.35)}>
        <FrameLines />
        {hero.stats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <div className="hero-stat-value">{stat.value}</div>
            <div className="hero-stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
