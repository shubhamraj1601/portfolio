import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={`mailto:${contact.email}`} 
          className="glass hover-glow"
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '1.1rem',
            fontWeight: 600,
            border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)'
          }}
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
