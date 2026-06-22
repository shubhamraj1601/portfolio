import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';

export default function Skills() {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items, delay }: { title: string, items: string[], delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="glass"
      style={{ padding: '2rem', borderRadius: 'var(--radius-md)', flex: '1 1 300px' }}
    >
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', textAlign: 'center' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {items.map(skill => (
          <span
            key={skill}
            style={{
              padding: '0.5rem 1rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section container">
      <SectionHeading title="Technical Skills" />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <SkillCategory title="Frontend Development" items={skills.frontend} delay={0.1} />
        <SkillCategory title="Backend & Cloud" items={skills.backend} delay={0.2} />
        <SkillCategory title="Tools & Methodologies" items={skills.tools} delay={0.3} />
      </div>
    </section>
  );
}
