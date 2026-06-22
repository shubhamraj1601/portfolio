import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="summary" className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative background gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'var(--accent-glow)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          zIndex: -1,
        }} 
      />

      <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="gradient-text-accent"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '0.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          {hero.name}.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.2 }}
        >
          {hero.role}.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}
        >
          {hero.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href={hero.resumeLink} 
            download
            className="glass" 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--accent-glow)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2.5rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              border: '1px solid var(--accent-primary)',
              color: 'var(--accent-primary)',
              background: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
