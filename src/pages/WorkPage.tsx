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
    <div className="w-full pt-32 md:pt-40 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-neutral-800/80 pb-12 mb-16 md:mb-12 flex flex-col items-center justify-center text-center">
          <Reveal>
            <div className="flex flex-col items-center">

            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>02 // WORKS</span>
            </div>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white tracking-tight leading-[0.9] uppercase">
              PROJECTS
              <br />
              <span className="text-purple-400">&amp; LIBRARY.</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest max-w-4xl pt-10 pb-12 leading-relaxed">
             SELECTED WORK AND PAST PROJECTS ACROSS SOFTWARE ENGINEERING, BUSINESS INTELLIGENCE, DATA ANALYTICS, AND DIGITAL PRODUCT DEVELOPMENT.</p>
          </Reveal>
        </div>

        {/* 5.1 SELECTED WORK SECTION */}
        <section className="mb-28 md:mb-20 ">
          <Reveal>
            <SectionHeading
              title="SELECTED WORK"
              tag="// 01 &bull; CURRENT DICIPLINE FOCUS"
              subtitle="PROJECTS THAT BEST REPRESENT MY CURRENT FOCUS IN SOFTWARE ENGINEERING AND DATA ANALYST."
              align="left"
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
        <section>
          <Reveal>
            <SectionHeading
              title="PROJECT LIBRARY"
              tag="// 02 &bull; PROJECT ACROSS COLLECTION"
              subtitle="A BROADER COLLECTION OF PROJECTS, EXPERIMENTS, AND EXPLORATIONS ACROSS DIFFERENT AREAS OF TECHNOLOGY AND DEVELOPMENT."
              align="left"
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
