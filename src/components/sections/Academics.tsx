import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';
import { GraduationCap } from 'lucide-react';

export default function Academics() {
  const { academics } = portfolioData;

  return (
    <section id="academics" className="section container">
      <SectionHeading title="Education" />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        {academics.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
          >
            <div style={{
              background: 'var(--bg-glass)',
              padding: '1rem',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent-primary)',
              border: '1px solid var(--border-color)'
            }}>
              <GraduationCap size={24} />
            </div>
            
            <div style={{ paddingBottom: '2rem', borderBottom: i !== academics.length - 1 ? '1px solid var(--border-color)' : 'none', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{edu.degree}</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'monospace' }}>{edu.duration}</span>
              </div>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{edu.institution}</h4>
              <p style={{ color: 'var(--text-secondary)' }}>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
