import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';
import { Github, Linkedin, Mail, Award } from 'lucide-react';

export default function SocialSidebars() {
  const { contact } = portfolioData;

  return (
    <>
      {/* Left Social Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="social-sidebar-left"
        style={{
          position: 'fixed',
          bottom: 0,
          left: '2.5rem',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <motion.a 
            href={contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            whileHover={{ y: -4, color: 'var(--accent-primary)' }}
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            whileHover={{ y: -4, color: 'var(--accent-primary)' }}
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a 
            href={contact.googleBadges} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Google Gen AI Badges"
            whileHover={{ y: -4, color: 'var(--accent-primary)' }}
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
          >
            <Award size={20} />
          </motion.a>

          <motion.a 
            href={`mailto:${contact.email}`} 
            aria-label="Email"
            whileHover={{ y: -4, color: 'var(--accent-primary)' }}
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
          >
            <Mail size={20} />
          </motion.a>
        </div>
        <div className="side-bar-line" />
      </motion.div>

      {/* Right Email Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="social-sidebar-right"
        style={{
          position: 'fixed',
          bottom: 0,
          right: '2.5rem',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem'
        }}
      >
        <motion.a
          href={`mailto:${contact.email}`}
          whileHover={{ y: -4, color: 'var(--accent-primary)' }}
          style={{
            writingMode: 'vertical-rl',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            fontFamily: 'monospace',
            transition: 'color 0.2s'
          }}
        >
          {contact.email}
        </motion.a>
        <div className="side-bar-line" />
      </motion.div>

      <style>{`
        @media (max-width: 1080px) {
          .social-sidebar-left, .social-sidebar-right {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
