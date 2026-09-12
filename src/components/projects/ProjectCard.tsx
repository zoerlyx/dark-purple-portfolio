import React from 'react';
import { Project } from '../../types/project';
import { ArrowUpRight } from 'lucide-react';
import { formatIndex } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (slug: string) => void;
  layoutVariant?: 'left-image' | 'right-image' | 'full-width';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelectProject,
  layoutVariant,
}) => {
  // Determine variant automatically if not specified to create visual rhythm
  const variant = layoutVariant || (index % 2 === 0 ? 'right-image' : 'left-image');

  const handleClick = () => {
    onSelectProject(project.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article
      onClick={handleClick}
      data-cursor="view"
      className="group cursor-pointer border-b border-neutral-800/60 pb-14 md:pb-20 pt-20 transition-colors duration-300 hover:border-purple-500/40"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-24 items-center ${
          variant === 'left-image' ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Content Column */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between order-2 ${
            variant === 'left-image' ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div>
            {/* Index, Category, Year */}
            <div className="flex items-center font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4 gap-4">
            {/* Box Nomor dengan Efek Hover Purple */}
            <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-neutral-900/80 border border-purple-900/50 text-purple-400 rounded-sm font-semibold transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
              {formatIndex(index)}
            </span>

            <span className="text-purple-400">{project.category}</span>
            
            {/* Elemen Year Mentok Kanan */}
            <span className="text-purple-400 ml-auto">{project.year}</span>
          </div>

            {/* Title */}
            <h3 className="font-display font-extrabold uppercase text-3xl sm:text-4xl md:text-4xl text-white tracking-tight leading-tight group-hover:text-purple-400 transition-colors duration-300 flex items-start justify-between gap-4">
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {project.title}
              </span>
              <ArrowUpRight className="w-8 h-* text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
            </h3>

            {/* Role & Description */}
            <div className="mt-4 font-mono text-[14px] text-neutral-400 uppercase tracking-widest">
              ROLE: {project.role}
            </div>

            <p className="mt-4 font-mono text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-3 text-justify">
              {project.description}
            </p>
          </div>

          {/* Technologies Tag List */}
          <div className="mt-8 pt-10 border-t border-neutral-800/40">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-neutral-900/80 border border-neutral-800 text-neutral-400 rounded-sm group-hover:border-neutral-700 group-hover:text-neutral-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 text-neutral-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`lg:col-span-6 overflow-hidden rounded-sm relative aspect-[16/10] bg-neutral-950 order-1 ${
            variant === 'left-image' ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-100 transition-all duration-700 ease-out"
          />
          {/* Subtle dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
      </div>
    </article>
  );
};
