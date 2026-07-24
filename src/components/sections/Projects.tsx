import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData, ProjectItem } from '../../data/content';
import { ExternalLink, Github, Database, Code, ShieldCheck, Layers, Cpu } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  const getProjectIcon = (index: number) => {
    switch (index % 5) {
      case 0: return <ShieldCheck size={28} style={{ color: 'var(--accent-primary)' }} />;
      case 1: return <Database size={28} style={{ color: 'var(--accent-primary)' }} />;
      case 2: return <Code size={28} style={{ color: 'var(--accent-primary)' }} />;
      case 3: return <Layers size={28} style={{ color: 'var(--accent-primary)' }} />;
      default: return <Cpu size={28} style={{ color: 'var(--accent-primary)' }} />;
    }
  };

  return (
    <section id="projects" className="section container">
      <SectionHeading title="Featured Projects & Case Studies" subtitle="Production systems, cloud migrations, and full-stack platforms" />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
        {projects.map((project: ProjectItem, i: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 85, damping: 15, delay: i * 0.08 }}
            className="glass hover-lift"
            style={{ 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column', 
              background: 'var(--bg-glass)', 
              border: '1px solid var(--border-color)',
              padding: '1.75rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                {getProjectIcon(i)}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.25rem' }}>
              {project.title}
            </h3>
            {project.subtitle && (
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '1rem', display: 'block' }}>
                {project.subtitle}
              </span>
            )}
            
            <div style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '0.94rem', lineHeight: 1.6 }}>
              {project.description.map((para, idx) => (
                <p key={idx} style={{ marginBottom: idx === project.description.length - 1 ? 0 : '0.6rem' }}>
                  {para}
                </p>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {project.technologies.map(tech => (
                <span key={tech} style={{ color: 'var(--accent-primary)', fontSize: '0.78rem', fontWeight: 600, background: 'var(--accent-glow)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
