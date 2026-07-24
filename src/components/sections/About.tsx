import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="about" className="section container" style={{ position: 'relative' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.h2 
          variants={paragraphVariants}
          style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
        >
          About <span className="gradient-text-accent">Me</span>
        </motion.h2>
        
        <motion.div 
          className="glass"
          variants={paragraphVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px var(--accent-glow)' }}
          style={{ 
            padding: 'clamp(1.25rem, 5vw, 3rem)', 
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          {portfolioData.about.paragraphs.map((paragraph, index) => (
            <motion.p 
              key={index} 
              variants={paragraphVariants}
              style={{ 
                fontSize: '1.15rem', 
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: index !== portfolioData.about.paragraphs.length - 1 ? '1.5rem' : 0
              }}
            >
              {paragraph}
            </motion.p>
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
