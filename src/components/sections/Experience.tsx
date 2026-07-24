import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData, ExperienceItem } from '../../data/content';
import { MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section container">
      <SectionHeading title="Work Experience" subtitle="Enterprise Cloud Data & Software Engineering Roles" />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {experience.map((job: ExperienceItem, i: number) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: i * 0.08 }}
            className="glass hover-lift"
            style={{ 
              padding: 'clamp(1.25rem, 4vw, 2.25rem)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {job.role}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    {job.company}
                  </span>
                  {job.location && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      <MapPin size={13} /> {job.location}
                    </span>
                  )}
                </div>
              </div>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', background: 'var(--bg-secondary)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                <Calendar size={13} />
                <span>{job.duration}</span>
              </div>
            </div>

            {/* Bullets / Highlights */}
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {job.highlights.map((bullet, idx) => (
                <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  {bullet}
                </li>
              ))}
            </ul>
            
            {/* Tech Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {job.technologies.map(tech => (
                <span 
                  key={tech}
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: 'var(--accent-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
