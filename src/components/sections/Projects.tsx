import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/content';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section container">
      <SectionHeading title="Featured Projects" subtitle="Some things I've built" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px -20px var(--accent-glow)' }}
            className="glass"
            style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', background: 'var(--bg-glass)' }}
          >
            <div className="project-image-container" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="project-image"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)', opacity: 0.8 }} />
            </div>
            
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2, marginTop: '-3rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '1rem', lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, background: 'var(--accent-glow)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }} href={project.githubUrl} aria-label="GitHub Repository" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  <Github size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }} href={project.liveUrl} aria-label="Live Demo" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  <ExternalLink size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .project-image-container:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
