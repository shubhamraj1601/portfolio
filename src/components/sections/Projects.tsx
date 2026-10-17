import { ExternalLink, Github, Layers, Code2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../../data/content';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import PipelineDiagram from '../ui/PipelineDiagram';

const coverIcons = [<Layers size={30} />, <Code2 size={30} />];

function ProjectCover({ project, index }: { project: ProjectItem; index: number }) {
  if (project.diagram === 'plasma-pipeline') {
    return (
      <div className="project-cover project-cover-diagram">
        <PipelineDiagram />
      </div>
    );
  }
  return (
    <div className="project-cover">
      {project.image ? (
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
      ) : (
        <div className="project-cover-placeholder">
          {coverIcons[index % coverIcons.length]}
          <span className="mono">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" eyebrow="03 · projects" title="Featured Projects" subtitle="Research, freelance and personal work outside my day job">
      <div className="projects-grid">
        {projects.map((project: ProjectItem, i: number) => (
          <Reveal
            key={project.id}
            delay={(i % 2) * 0.08}
            className={`project card card-hover ${project.featured ? 'project-featured' : ''}`}
          >
            <ProjectCover project={project} index={i} />

            <div className="project-body">
              <div className="project-title-row">
                <div>
                  <h3 className="project-title">
                    {project.title}
                    {project.status && (
                      <span className="chip chip-accent project-status">
                        <span className="status-dot" aria-hidden="true" />
                        {project.status}
                      </span>
                    )}
                  </h3>
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

              {project.summary && <p className="project-summary">{project.summary}</p>}

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
