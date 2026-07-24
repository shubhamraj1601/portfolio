import { motion } from 'framer-motion';
import { portfolioData } from '../../data/content';
import { ArrowRight, Download, Award } from 'lucide-react';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="summary" className="section container" style={{ minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '7rem', paddingBottom: '3.5rem' }}>
      
      {/* Background Glow Orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 'min(500px, 80vw)',
          height: 'min(500px, 80vw)',
          background: 'var(--accent-glow)',
          filter: 'blur(140px)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '2%',
          width: 'min(400px, 70vw)',
          height: 'min(400px, 70vw)',
          background: 'var(--accent-glow)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
        }} 
      />

      <div style={{ maxWidth: '920px', position: 'relative', zIndex: 2, margin: '0 auto', textAlign: 'left' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1.1rem', borderRadius: 'var(--radius-full)', background: 'var(--bg-glass)', border: '1px solid var(--border-color)', marginBottom: '1.5rem', boxShadow: 'var(--shadow-subtle)' }}
        >
          <Award size={18} style={{ color: 'var(--accent-primary)' }} />
          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Google Cloud Certified Professional Data Engineer
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.6rem, 7.5vw, 5.2rem)', marginBottom: '0.4rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.08, fontWeight: 800 }}
        >
          {hero.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.2 }}
          className="gradient-text-accent"
          style={{ fontSize: 'clamp(1.5rem, 4.2vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2 }}
        >
          Google Cloud Certified Professional Data Engineer & Full-Stack Developer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.3 }}
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '750px', lineHeight: 1.7 }}
        >
          {hero.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}
        >
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.04, boxShadow: 'var(--shadow-hover)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.88rem 2.2rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              background: 'var(--accent-primary)',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 8px 25px -5px var(--accent-glow)'
            }}
          >
            Explore Work <ArrowRight size={18} />
          </motion.a>

          <motion.a 
            href={hero.resumeLink} 
            download
            className="glass" 
            whileHover={{ scale: 1.04, borderColor: 'var(--accent-primary)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.88rem 2.2rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              background: 'var(--bg-glass)',
              textDecoration: 'none'
            }}
          >
            <Download size={18} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
            gap: '1rem'
          }}
        >
          {hero.stats.map((stat) => (
            <div 
              key={stat.label}
              className="glass hover-lift"
              style={{
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'left',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.2rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
