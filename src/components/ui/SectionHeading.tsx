import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading" style={{ marginBottom: '3rem', textAlign: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '0.5rem', fontWeight: 800 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)', maxWidth: '650px', margin: '0 auto' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
