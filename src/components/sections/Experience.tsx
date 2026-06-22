import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section container">
      <SectionHeading title="Where I've Worked" />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        {experience.map((job, i) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass hover-lift"
            style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{job.role}</h3>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--accent-primary)' }}>{job.company}</h4>
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'monospace' }}>{job.duration}</span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              {job.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {job.technologies.map(tech => (
                <span 
                  key={tech}
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
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
