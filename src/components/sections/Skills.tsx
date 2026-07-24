import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: "Cloud & Big Data Platforms", items: skills.cloudBigData },
    { title: "Data Engineering & Data Vault", items: skills.dataEngineering },
    { title: "Programming Languages", items: skills.programming },
    { title: "Frameworks & Web Engineering", items: skills.frameworks },
    { title: "DevOps, Databases & Analytics", items: skills.devOpsTools },
    { title: "Leadership & Domain Expertise", items: skills.leadershipDomain },
  ];

  return (
    <section id="skills" className="section container">
      <SectionHeading title="Technical Skills & Competencies" subtitle="Comprehensive technology stack and engineering domains" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.75rem' }}>
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: catIdx * 0.06 }}
            className="glass hover-lift"
            style={{ 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
              {cat.title}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.items.map(skill => (
                <span
                  key={skill}
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    cursor: 'default',
                    display: 'inline-block'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
