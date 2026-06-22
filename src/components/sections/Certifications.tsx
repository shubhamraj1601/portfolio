import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section container">
      <SectionHeading title="Certifications" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {certifications.map((cert, i) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            download
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass hover-lift"
            style={{ 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-md)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              color: 'inherit'
            }}
          >
            <div style={{ color: 'var(--accent-primary)' }}>
              <Award size={32} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{cert.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{cert.issuer} &bull; {cert.date}</p>
            </div>
            <ExternalLink size={16} style={{ color: 'var(--text-muted)' }} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
