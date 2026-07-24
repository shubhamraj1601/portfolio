import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData, LeadershipItem } from '../../data/content';
import { Users } from 'lucide-react';

export default function Volunteerism() {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="section container">
      <SectionHeading title="Leadership & Volunteer Roles" subtitle="Positions of responsibility, mentorship, and community initiatives" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '1.5rem', maxWidth: '950px', margin: '0 auto' }}>
        {leadership.map((item: LeadershipItem, i: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: i * 0.08 }}
            className="glass hover-lift"
            style={{ 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--accent-primary)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Users size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                {item.role}
              </h3>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.92rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                {item.organization}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'monospace', background: 'var(--bg-secondary)', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                {item.duration}
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, flexGrow: 1 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
