import React from 'react';
import { Project } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  featuredProjects: Project[];
  onSelectProject: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  featuredProjects,
  onSelectProject,
  onNavigate,
}) => {
  return (
    <div className="w-full">
      {/* 4.1 HERO SECTION */}
      <section className="relative min-h-[92vh] pt-32 md:pt-40 pb-20 md:pb-28 flex flex-col justify-between overflow-hidden border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
          {/* Small Top Metadata */}
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-800/60 pb-6 mb-8 md:mb-14">
              <div>
                <span className="text-white font-bold">KOUSHIK</span>
                <div className="text-[10px] text-neutral-400">ENGINEER // BUILDER</div>
              </div>
              <div>
                <span className="text-neutral-300">DISCIPLINE</span>
                <div className="text-[10px] text-neutral-400">SOFTWARE &amp; DATA</div>
              </div>
              <div className="hidden md:block">
                <span className="text-neutral-300">FOCUS</span>
                <div className="text-[10px] text-neutral-400">BUSINESS INTELLIGENCE</div>
              </div>
              <div className="text-right">
                <span className="text-purple-400">LOCATION</span>
                <div className="text-[10px] text-neutral-400">BASED IN INDONESIA</div>
              </div>
            </div>
          </Reveal>

          {/* Core Hero Content: Typography on Left Half, Portrait on Right Half */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4">
            {/* Left Half: Typography */}
            <div className="lg:col-span-7 select-none">
              <Reveal delay={200}>
                <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.02]">
                  hi i am yanto,
                  <br />
                  <span className="text-neutral-200">a software engineer</span>
                  <br />
                  <span className="text-neutral-400">and </span>
                  <span className="text-purple-400/90 drop-shadow-[0_0_35px_rgba(168,85,247,0.25)]">
                    data analyst
                  </span>
                </h1>
              </Reveal>
            </div>

            {/* Right Half: Portrait */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="w-full sm:w-72 md:w-80 lg:w-96">
                <Reveal delay={350} direction="left">
                  <div className="relative group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 border border-neutral-700/60 shadow-2xl shadow-purple-950/30">
                      {/* Editorial Portrait Photo */}
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                        alt="Portrait"
                        data-cursor="open"
                        className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Corner Accent Marker */}
                    <div className="absolute -bottom-3 -right-3 font-mono text-[10px] text-purple-400/90 tracking-widest bg-[#050507] px-2 py-1 border border-neutral-800">
                      ID // 2026
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Positioning Sentence & Quick CTA */}
          <Reveal delay={550}>
            <div className="pt-12 md:pt-16 border-t border-neutral-800/60 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="font-mono text-xs md:text-sm text-neutral-300 uppercase tracking-widest max-w-xl leading-relaxed">
                &ldquo;I BUILD DIGITAL PRODUCTS AND DATA-DRIVEN SYSTEMS THAT TURN COMPLEX PROBLEMS INTO USEFUL EXPERIENCES.&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <MagneticButton
                  onClick={() => {
                    onNavigate('/work');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  variant="primary"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4.2 INTRODUCTION SECTION */}
      <section className="py-20 md:py-32 border-b border-neutral-800/80 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
                <span className="text-purple-400 font-semibold">// 01 &bull; INTRODUCTION</span>
                <div className="mt-4 space-y-1 text-neutral-400 text-[11px]">
                  <div>BASED IN INDONESIA</div>
                  <div>SOFTWARE ENGINEERING</div>
                  <div>DATA ANALYTICS</div>
                  <div>BUSINESS INTELLIGENCE</div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-100 leading-snug tracking-tight">
                  &ldquo;I&apos;m a software engineer and data-focused builder interested in creating useful digital experiences, reliable systems, and meaningful insights from data.&rdquo;
                </h3>
                <p className="mt-8 text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                  Working across the entire lifecycle—from relational data modeling, automated ETL streaming, and statistical metrics, to high-framerate user interfaces and distributed microservices.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4.3 SELECTED WORK SECTION */}
      <section className="py-24 md:py-36 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              title="SELECTED WORK"
              tag="// 02 &bull; CASE STUDIES"
              subtitle="ENGINEERED SYSTEMS, DATA TELEMETRY DASHBOARDS, AND SOFTWARE PRODUCTS (FEATURED ONLY)."
              align="between"
            />
          </Reveal>

          {/* Project List */}
          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 120}>
                <ProjectCard
                  project={project}
                  index={index}
                  onSelectProject={onSelectProject}
                />
              </Reveal>
            ))}
          </div>

          {/* View All Work CTA */}
          <Reveal delay={200}>
            <div className="mt-16 text-center">
              <MagneticButton
                onClick={() => {
                  onNavigate('/work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                variant="outline"
              >
                <span>VIEW COMPLETE PROJECT LIBRARY ({featuredProjects.length}+)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4.4 ABOUT SNAPSHOT */}
      <section className="py-24 md:py-36 border-b border-neutral-800/80 bg-[#040406]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4">
                  // 03 &bull; PHILOSOPHY
                </div>
                <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.92] uppercase mb-8">
                  BUILD.
                  <br />
                  ANALYZE.
                  <br />
                  <span className="text-neutral-400">IMPROVE.</span>
                </h2>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light mb-8">
                  Software and data should not be siloed into separate worlds. By uniting technical software architecture with data science disciplines, systems become verifiable, transparent, and resilient to failure.
                </p>

                <div>
                  <button
                    onClick={() => {
                      onNavigate('/about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    data-cursor="link"
                    className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <span>MORE ABOUT ME &amp; APPROACH</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4.5 WHAT I BUILD (CAPABILITIES, NOT SERVICES) */}
      <section className="py-24 md:py-36 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              title="WHAT I BUILD"
              tag="// 04 &bull; CAPABILITIES"
              subtitle="CORE TECHNICAL DISCIPLINES APPLIED ACROSS DIGITAL PRODUCTS AND DATA PLATFORMS."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
            <Reveal delay={100}>
              <div className="border-t border-neutral-800 pt-6">
                <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">01</div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase mb-4">
                  SOFTWARE ENGINEERING
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-mono text-[12px]">
                  Full-stack applications, distributed microservices, RESTful and WebSocket streaming protocols, and offline-first client engines.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="border-t border-neutral-800 pt-6">
                <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">02</div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase mb-4">
                  DATA ANALYTICS
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-mono text-[12px]">
                  Exploratory data analysis, automated pipeline scheduling, statistical inference, feature engineering, and predictive propensity models.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="border-t border-neutral-800 pt-6">
                <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">03</div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase mb-4">
                  BUSINESS INTELLIGENCE
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-mono text-[12px]">
                  Data warehousing schema design, Star/Snowflake modeling, DAX dimensional measures, and low-latency executive decision dashboards.
                </p>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="border-t border-neutral-800 pt-6">
                <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">04</div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight uppercase mb-4">
                  UI / UX
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-mono text-[12px]">
                  Editorial design systems, typography-first composition, high-density telemetry dashboards, accessibility compliance, and tactile motion design.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4.6 CONTACT CTA */}
      <section className="py-28 md:py-44 relative bg-[#040405] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400 mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] uppercase mb-8">
              LET&apos;S BUILD
              <br />
              <span className="text-neutral-400">SOMETHING USEFUL.</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest max-w-xl mx-auto mb-12 leading-relaxed">
              &ldquo;AVAILABLE FOR COLLABORATION, PROJECTS, AND SELECTED OPPORTUNITIES.&rdquo;
            </p>

            <div className="flex justify-center">
              <MagneticButton
                onClick={() => {
                  onNavigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                variant="primary"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
