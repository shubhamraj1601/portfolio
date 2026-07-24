import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: 'spring', stiffness: 80, damping: 14 }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}
        >
          Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.a 
          href={`mailto:${contact.email}`} 
          className="glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.3 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 30px var(--accent-glow)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '1.1rem',
            fontWeight: 600,
            border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
}
