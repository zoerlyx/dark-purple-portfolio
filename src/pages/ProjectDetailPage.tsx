import React from 'react';
import { Project } from '../types/project';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { NextProject } from '../components/projects/NextProject';
import { Reveal } from '../components/ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  nextProject?: Project;
  onBack: () => void;
  onSelectProject: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  nextProject,
  onBack,
  onSelectProject,
}) => {
  return (
    <div className="w-full">
      {/* 8.1 HERO */}
      <ProjectHero project={project} onBack={onBack} />

      {/* 8.2 OVERVIEW & 8.3 CONTEXT */}
      <section className="py-20 md:py-28 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <span>01 // OVERVIEW</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6">
                  SYSTEM &amp; PROJECT SCOPE
                </h2>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-mono text-justify">
                  {project.overview}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <span>02 // CONTEXT</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6">
                  PROJECT BACKGROUND
                </h2>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-mono text-justify ">
                  {project.context}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 PROBLEM & 8.5 PROCESS */}
      <section className="py-20 md:py-28 border-b border-neutral-800/80 bg-[#040406]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <span>03 // CHALLENGES</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6">
                  KEY PROBLEMS &amp; <br/> CHALLENGES
                </h2>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-mono text-justify">
                  {project.problem}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <span>04 // APPROACH</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6">
                  IMPLEMENTATION &amp; EXCECUTION
                </h2>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-mono text-justify">
                  {project.process}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8.6 TECHNOLOGY STACK */}
      <section className="py-20 md:py-28 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>05 // TECHNOLOGY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-8">
              TECH STACK
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 font-mono ">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-sm bg-[#09090e] border border-neutral-800 flex items-center gap-2 hover:border-purple-500/40 transition-colors"
                >
                  <span className="flex items-center justify-center text-center text-xs text-neutral-200 uppercase tracking-wider w-full">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8.7 RESULT & METRICS */}
      <section className="py-20 md:py-28 border-b border-neutral-800/80 bg-[#040406]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>06 // RESULT &amp; IMPACT</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              MEASURABLE OUTCOMES
            </h2>

            <p className="text-neutral-300 text-sm md:text-base font-mono text-justify leading-relaxed max-w-8xl mb-12">
              {project.result}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-sm bg-neutral-950 border border-neutral-800">
                    <div className="font-display font-black text-3xl md:text-3xl text-purple-400 mb-2">
                      {m.value}
                    </div>
                    <div className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* 8.8 GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} projectTitle={project.title} />
      )}

      {/* 8.9 NEXT PROJECT */}
      {nextProject && (
        <NextProject
          nextProject={nextProject}
          onSelectProject={onSelectProject}
        />
      )}
    </div>
  );
};
