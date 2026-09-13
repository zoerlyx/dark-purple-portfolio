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
    <section className="py-8 md:py-12 bg-[#040405] text-white relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" /> 
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Badge */}
        <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-4">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span>NEXT CASE STUDY</span> 
        </div>

        {/* Interactive Next Project Card */}
        <div
          onClick={() => {
            onSelectProject(nextProject.slug);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          data-cursor="view"
          className="group cursor-pointer block relative rounded-xl bg-neutral-900/40 border border-purple-900/40 hover:border-purple-500/60 backdrop-blur-md p-8 sm:p-10 lg:p-12 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] overflow-hidden"
        >
          {/* Light Scanline Sweep on Hover */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -skew-x-12 animate-scan-sweep pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> 
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <div className="space-y-6">

              {/* Project Title dengan Efek Slide ke Kanan */}
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] uppercase text-white group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-2">
                {nextProject.title}
              </h2>

              {/* Metadata Badges */}
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider uppercase">
                <span className="px-2.5 py-1 bg-neutral-900/80 border border-white/20 text-white/80 rounded-sm font-semibold transition-all duration-300 group-hover:text-purple-400  group-hover:border-purple-400/40">
                  {nextProject.year}
                </span>  
                <span className="text-neutral-500">&bull;</span>
                <span className="px-2.5 py-1 bg-neutral-900/80 border border-white/20 text-white/80 rounded-sm font-semibold transition-all duration-300 group-hover:text-purple-400  group-hover:border-purple-400/40">
                  {nextProject.category}
                </span>
              </div>
            </div>

            {/* Action Button Indicator */}
            <div className="flex items-center gap-3 self-start lg:self-center">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 group-hover:text-purple-300 transition-colors">
                INITIALIZE CASE STUDY
              </span>
              <div className="w-10 h-10 rounded-sm bg-purple-950/50 border border-purple-800/60 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 transition-all duration-300">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
