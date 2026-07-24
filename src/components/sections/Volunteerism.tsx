import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';
import { Heart } from 'lucide-react';

export default function Volunteerism() {
  const { volunteerism } = portfolioData;

  return (
    <section id="volunteerism" className="section container">
      <SectionHeading title="Volunteerism" />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
        {volunteerism.map((vol, i) => (
          <motion.div
            key={vol.id}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 100, damping: 14, delay: i * 0.15 }}
            className="glass"
            style={{ 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--accent-primary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Heart size={18} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>{vol.role}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-secondary)' }}>{vol.organization}</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{vol.duration}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{vol.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
