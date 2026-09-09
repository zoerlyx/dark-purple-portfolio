import React from 'react';
import { Project } from '../../types/project';
import { ArrowRight } from 'lucide-react';

interface NextProjectProps {
  nextProject: Project;
  onSelectProject: (slug: string) => void;
}

export const NextProject: React.FC<NextProjectProps> = ({
  nextProject,
  onSelectProject,
}) => {
  return (
    <section className="py-24 md:py-36 bg-[#040405] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
          <span>NEXT CASE STUDY</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
        </div>

        <div
          onClick={() => {
            onSelectProject(nextProject.slug);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          data-cursor="view"
          className="group cursor-pointer block"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-800 pb-12 transition-colors duration-300 group-hover:border-purple-500/50">
            <div>
              <div className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-3">
                {nextProject.category} &bull; {nextProject.year}
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[0.9] uppercase group-hover:text-purple-200 transition-colors">
                {nextProject.title}
              </h2>
            </div>

            <div className="flex items-center gap-4 text-neutral-400 group-hover:text-white font-mono text-xs uppercase tracking-widest transition-colors flex-shrink-0">
              <span>EXPLORE ARCHITECTURE</span>
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-600/20 transition-all">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
