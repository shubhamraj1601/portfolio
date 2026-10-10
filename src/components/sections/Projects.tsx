import { ExternalLink, Github, Layers, Code2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../../data/content';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const coverIcons = [<Layers size={30} />, <Code2 size={30} />];

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" eyebrow="03 · projects" title="Featured Projects" subtitle="Freelance and personal work outside my day job">
      <div className="projects-grid">
        {projects.map((project: ProjectItem, i: number) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08} className="project card card-hover">
            <div className="project-cover">
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              ) : (
                <div className="project-cover-placeholder">
                  {coverIcons[i % coverIcons.length]}
                  <span className="mono">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
              )}
            </div>

            <div className="project-body">
              <div className="project-title-row">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && <p className="project-subtitle mono">{project.subtitle}</p>}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Source code" className="icon-btn">
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="icon-btn">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="bullets project-desc">
                {project.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className="chip-row project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip chip-accent">{tech}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
