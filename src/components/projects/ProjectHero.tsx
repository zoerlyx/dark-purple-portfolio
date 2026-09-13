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
    <section className="pt-16 md:pt-28 pb-16 md:pb-28 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <button
          onClick={onBack}
          data-cursor="link"
          className="relative inline-flex items-center gap-3  font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white px-3 py-2.5 mt-2 bg-neutral-900/80 border border-purple-900/50 hover:border-purple-400 rounded-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] mb-8 cursor-pointer overflow-hidden group"
        >
          {/* Layer Cahaya Scan (Berjalan Saat Hover / Kontinu) */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -skew-x-12 animate-scan-sweep pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon Arrow dengan Animasi Digeser */}
          <ArrowLeft className="w-4 h-4 text-white-400 group-hover:text-white-400 group-hover:-translate-x-1 transition-all duration-300 relative z-10" />

          {/* Teks Tombol */}
          <span className="relative z-10 text-white-400 font-semibold">BACK TO WORK</span>
        </button>

        {/* Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6">
          <div className="flex items-center gap-3 pt-4">
            <span className="text-purple-400 font-bold">{project.year}</span>
            <span>&bull;</span> 
            <span className="text-purple-400 font-bold">{project.category}</span> 
          </div>
        </div>

        {/* Big Editorial Title */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.92] uppercase mb-8">
          {project.title}
        </h1>

        {/* Short introduction paragraph */}
        <p className="text-neutral-400 text-sm md:text-base font-mono leading-relaxed max-w-8xl mb-12">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          {project.links?.demo && (
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
