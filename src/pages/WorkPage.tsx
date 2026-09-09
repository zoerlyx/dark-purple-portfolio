import React from 'react';
import { Project } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectLibrary } from '../components/projects/ProjectLibrary';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';

interface WorkPageProps {
  allProjects: Project[];
  featuredProjects: Project[];
  onSelectProject: (slug: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  allProjects,
  featuredProjects,
  onSelectProject,
}) => {
  return (
    <div className="w-full pt-32 md:pt-40 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-neutral-800/80 pb-12 mb-16 md:mb-24">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>INDEX // 02</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase mb-6">
              WORK &amp;
              <br />
              <span className="text-neutral-400">ARCHIVE.</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest max-w-2xl leading-relaxed">
              SELECTED CASE STUDIES AND THE COMPLETE PROJECT LIBRARY REPRESENTING SOFTWARE SYSTEMS, BUSINESS INTELLIGENCE, AND EXPERIMENTAL EXPLORATIONS.
            </p>
          </Reveal>
        </div>

        {/* 5.1 SELECTED WORK SECTION */}
        <section className="mb-28 md:mb-40">
          <Reveal>
            <SectionHeading
              title="SELECTED WORK"
              tag="// 01 &bull; CURRENT IDENTITY"
              subtitle="PROJECTS THAT DIRECTLY REFLECT THE CURRENT SOFTWARE ENGINEER & DATA ANALYST POSITIONING."
              align="between"
            />
          </Reveal>

          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  project={project}
                  index={index}
                  onSelectProject={onSelectProject}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* 5.2 PROJECT LIBRARY SECTION */}
        <section className="border-t border-neutral-800 pt-16 md:pt-24">
          <Reveal>
            <SectionHeading
              title="PROJECT LIBRARY"
              tag="// 02 &bull; COMPREHENSIVE ARCHIVE"
              subtitle="&ldquo;A COLLECTION OF PROJECTS, EXPERIMENTS, EXPLORATIONS, AND THINGS I'VE BUILT OVER TIME.&rdquo;"
              align="between"
            />
          </Reveal>

          <Reveal delay={150}>
            <ProjectLibrary
              projects={allProjects}
              onSelectProject={onSelectProject}
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
};
