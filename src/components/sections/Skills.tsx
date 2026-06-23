import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';

export default function Skills() {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items, delay }: { title: string, items: string[], delay: number }) => {
    const containerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          staggerChildren: 0.05,
          delayChildren: delay
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: 0.8, y: 15 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 10
        }
      }
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass"
        style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', borderRadius: 'var(--radius-md)', flex: '1 1 280px' }}
      >
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-primary)', textAlign: 'center' }}>
          {title}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {items.map(skill => (
            <motion.span
              key={skill}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-secondary)'
              }}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                cursor: 'default',
                display: 'inline-block',
                transition: 'border-color 0.2s, color 0.2s'
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

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
