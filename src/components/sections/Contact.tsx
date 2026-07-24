import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';
import { Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 85, damping: 15 }}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      >
        <SectionHeading title="Get In Touch" subtitle="Let's build scalable cloud data platforms and software solutions together" />
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.08rem', lineHeight: 1.7 }}>
          Whether you have a data platform challenge, a full-stack project proposal, or just want to connect, feel free to reach out!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
          <span>{contact.location}</span>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <motion.a 
            href={`mailto:${contact.email}`} 
            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-hover)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 2rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'var(--accent-primary)',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 8px 25px -5px var(--accent-glow)'
            }}
          >
            <Mail size={18} /> Say Hello ({contact.email})
          </motion.a>

          <motion.a 
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer" 
            className="glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 1.75rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1rem',
              fontWeight: 600,
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              textDecoration: 'none'
            }}
          >
            <Linkedin size={18} /> LinkedIn Profile
          </motion.a>
        </div>

        {/* Quick Social Badges Row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a 
            href={contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}
          >
            <Github size={16} /> GitHub
          </a>
          <a 
            href={contact.googleBadges} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-secondary)', fontSize: '0.88rem', fontWeight: 600 }}
          >
            <ExternalLink size={16} /> Google Gen AI Skill Badges
          </a>
        </div>
      </motion.div>
    </section>
  );
}
