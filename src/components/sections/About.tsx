import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';

export default function About() {
  return (
    <section id="about" className="section container" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          About <span className="gradient-text-accent">Me</span>
        </h2>
        
        <motion.div 
          className="glass"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ 
            padding: 'clamp(1.25rem, 5vw, 3rem)', 
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
          }}
        >
          {portfolioData.about.paragraphs.map((paragraph, index) => (
            <p key={index} style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginBottom: index !== portfolioData.about.paragraphs.length - 1 ? '1.5rem' : 0
            }}>
              {paragraph}
            </p>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1,
        transform: 'translateY(-50%)'
      }} />
    </section>
  );
}
