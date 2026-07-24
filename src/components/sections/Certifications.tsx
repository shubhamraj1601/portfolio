import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData, CertificationItem } from '../../data/content';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section container">
      <SectionHeading title="Certifications & Badges" subtitle="Verified professional certifications and technical achievements" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
        {certifications.map((cert: CertificationItem, i: number) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cert.id}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: i * 0.05 }}
            className="glass hover-lift"
            style={{ 
              padding: '1.25rem 1.5rem', 
              borderRadius: 'var(--radius-md)', 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1rem',
              color: 'inherit',
              border: '1px solid var(--border-color)',
              textDecoration: 'none'
            }}
          >
            <div style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.15rem' }}>
              <Award size={26} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: '0.98rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.25rem', lineHeight: 1.4 }}>
                {cert.name}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                {cert.issuer} &bull; {cert.date}
              </p>
              {cert.credentialId && (
                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--accent-secondary)', background: 'var(--bg-secondary)', padding: '0.15rem 0.4rem', borderRadius: 'var(--radius-sm)', display: 'inline-block' }}>
                  ID: {cert.credentialId.length > 22 ? `${cert.credentialId.substring(0, 20)}...` : cert.credentialId}
                </span>
              )}
            </div>
            <ExternalLink size={16} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '0.2rem' }} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
