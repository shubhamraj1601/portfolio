import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section container" style={{ position: 'relative' }}>
      <SectionHeading title="About Me" subtitle="Data Architect, Cloud Engineer & Software Developer" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 85, damping: 15 }}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <div 
          className="glass hover-lift"
          style={{ 
            padding: 'clamp(1.5rem, 5vw, 2.75rem)', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)'
          }}
        >
          {portfolioData.about.paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              style={{ 
                fontSize: '1.08rem', 
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: index !== portfolioData.about.paragraphs.length - 1 ? '1.5rem' : 0
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
