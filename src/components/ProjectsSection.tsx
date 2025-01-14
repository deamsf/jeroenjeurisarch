import { useState } from 'react';
import { Project } from '../types/project';
import { projectsData } from '../utils/projects';
import ProjectDetailOverlay from './ProjectDetailOverlay';

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const availableTags = [...new Set(projectsData.flatMap(p => p.tags))];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProjects = projectsData
    .filter(project => project.isFeatured)
    .filter(project =>
      selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))
    );

  return (
    <>
      <section className="py-20 bg-secondary" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-primary">Featured Projects</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedTags.includes(tag)
                    ? 'bg-accent text-white'
                    : 'bg-primary/10 text-primary hover:bg-accent/20'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="project-card group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] bg-primary/10 overflow-hidden">
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="project-overlay">
                  <div className="text-center">
                    <h3 className="text-xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetailOverlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}