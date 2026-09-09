import React from 'react';
import { Project } from '../../types/project';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface ProjectHeroProps {
  project: Project;
  onBack: () => void;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project, onBack }) => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <button
          onClick={onBack}
          data-cursor="link"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO WORK</span>
        </button>

        {/* Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-purple-400 font-bold">{project.category}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>
          <div className="text-neutral-400">
            ROLE: <span className="text-neutral-200 font-semibold">{project.role}</span>
          </div>
        </div>

        {/* Big Editorial Title */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] uppercase mb-8">
          {project.title}
        </h1>

        {/* Short introduction paragraph */}
        <p className="text-neutral-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-12">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <MagneticButton variant="primary">
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <MagneticButton variant="secondary">
                <span>SOURCE CODE</span>
                <Github className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>
            </a>
          )}
        </div>

        {/* Large Hero Image */}
        <div className="w-full rounded-sm overflow-hidden bg-neutral-950 border border-neutral-800 relative aspect-[16/9] shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-115 brightness-95"
            data-cursor="open"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
