import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData, AcademicItem } from '../../data/content';
import { GraduationCap } from 'lucide-react';

export default function Academics() {
  const { academics } = portfolioData;

  return (
    <section id="academics" className="section container">
      <SectionHeading title="Education & Academic Background" subtitle="Degree programs, research thesis, and honors" />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>
        {academics.map((edu: AcademicItem, i: number) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: i * 0.08 }}
            className="glass hover-lift"
            style={{ 
              padding: 'clamp(1.25rem, 4vw, 2rem)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              display: 'flex', 
              gap: '1.25rem', 
              alignItems: 'flex-start' 
            }}
          >
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '0.85rem',
              borderRadius: '50%',
              color: 'var(--accent-primary)',
              border: '1px solid var(--border-color)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <GraduationCap size={22} />
            </div>
            
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 700 }}>{edu.degree}</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                  {edu.duration}
                </span>
              </div>
              <h4 style={{ fontSize: '0.98rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                {edu.institution}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
