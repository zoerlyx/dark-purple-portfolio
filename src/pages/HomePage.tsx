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
    {/* HERO SECTION */}
    <section className="relative min-h-[92vh] pt-32 md:pt-40 pb-16 md:pb-24 flex flex-col justify-between overflow-hidden border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10 gap-12">
        
        {/* Core Hero Content: Outer Glass Frame Wrapper */}
<div className="relative my-auto py-4 max-w-6xl mx-auto w-full">
  {/* Soft Background Radial Ambient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-indigo-900/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

  {/* Outer Modern Container */}
  <div className="relative rounded-3xl bg-neutral-950/40 border border-neutral-800/60 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80 overflow-hidden">
    
    {/* Decorative Technical Crosshair Corners */}
    <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-purple-500/40 pointer-events-none" />
    <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-purple-500/40 pointer-events-none" />
    <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-purple-500/40 pointer-events-none" />
    <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-purple-500/40 pointer-events-none" />

    {/* Inner Layout Grid: Gap diperrapat (gap-6 lg:gap-8) agar space tengah tidak terlalu lebar */}
    <div className="relative min-h-[550px] w-full flex items-center justify-center overflow-hidden py-10 select-none">
      
      {/* Left Half: Typography (Dibuat Lebih Lebar) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none px-4 text-center select-none overflow-hidden">
  
        {/* Container Teks 1: SOFTWARE ENGINEER */}
        <div className="relative animate-static-glitch">
          {/* Teks Utama */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white/30 uppercase leading-none">
            SOFTWARE ENGINEER
          </h1>
          
          {/* Overlay Piksel Distraksi */}
          <h1 
            aria-hidden="true" 
            className="absolute inset-0 font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-cyan-400/60 uppercase leading-none animate-static-pixel pointer-events-none"
          >
            SOFTWARE ENGINEER
          </h1>
        </div>

        {/* Container Teks 2: DATA ANALYST */}
        <div className="relative animate-static-glitch [animation-delay:0.25s] mt-2 md:mt-4">
          {/* Teks Utama */}
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-purple-400/40 uppercase leading-none">
            DATA ANALYST
          </h1>

          {/* Overlay Piksel Distraksi */}
          <h1 
            aria-hidden="true" 
            className="absolute inset-0 font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-fuchsia-500/60 uppercase leading-none animate-static-pixel [animation-delay:0.25s] pointer-events-none"
          >
            DATA ANALYST
          </h1>
        </div>

      </div>
        
      {/* Right Half: Portrait */}
      {/* LAYER DEPAN: Portrait Foto Berada Tepat di Tengah dengan Animasi Muncul */}
        <div className="relative z-20 w-full sm:w-64 md:w-72 lg:w-80">
          <Reveal delay={250} direction="up">
            <div className="relative group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-900 border border-neutral-700/60 shadow-2xl shadow-purple-950/40 backdrop-blur-sm">
                {/* Editorial Portrait Photo */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                  alt="Portrait"
                  data-cursor="open"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60" />
              </div>

              {/* Corner Accent Marker */}
              <div className="absolute -bottom-3 -right-3 font-mono text-[10px] text-purple-400/90 tracking-widest bg-[#050507] px-2.5 py-1 border border-neutral-800 rounded-sm shadow-md">
                ID // 2026
              </div>
            </div>
          </Reveal>
        </div>
    
    </div>
  </div>
</div>

        {/* Small Bottom Metadata (Grid di Bawah) */}
        <Reveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 border-t border-neutral-800/60 pt-6 mt-auto">
            <div>
              <span className="text-white font-bold">FARDHO Z</span>
              <div className="text-[10px] text-neutral-400">ENGINEER // BUILDER</div>
            </div>
            <div>
              <span className="text-neutral-300">DISCIPLINE</span>
              <div className="text-[10px] text-neutral-400">SOFTWARE &amp; DATA</div>
            </div>
            <div className="hidden md:block">
              <span className="text-neutral-300">FOCUS</span>
              <div className="text-[10px] text-neutral-400">SOFTWARE ENGINEERING</div>
            </div>
            <div className="text-right">
              <span className="text-neutral-400">LOCATION</span>
              <div className="text-[10px] text-neutral-400">BASED IN INDONESIA</div>
            </div>
          </div>
        </Reveal>

        {/* Positioning Sentence & Quick CTA (Tata Letak Vertikal) */}
        <Reveal delay={550}>
          <div className="pt-12 md:pt-16 border-t border-neutral-800/60 flex flex-col items-center gap-8">
            <p className="font-mono text-xs md:text-sm text-neutral-300 uppercase tracking-widest max-w-xl leading-relaxed text-center mx-auto">
              I AM DEDICATED TO BUILDING SOFTWARE, MAKING SENSE OF DATA, AND DIGITAL EXPERIENCES THAT HAVE PURPOSE.MY WORKS SPEAKS LOUDER THAN MY WORDS—EXPLORE THE PROJECT.
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

    {/* 4.4 ABOUT SNAPSHOT (KEEP 2) */}
    <section className="py-20 md:py-28 border-b border-neutral-800/80 bg-[#040406]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Kolom Kiri: Philosophy Header */}
            <div className="lg:col-span-5">
              <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-3">
                // 03 &bull; PHILOSOPHY
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.05] uppercase">
                BUILD.
                <br />
                ANALYZE.
                <br />
                <span className="text-neutral-500">IMPROVE.</span>
              </h2>
            </div>

            {/* Kolom Kanan: Deskripsi & CTA Button */}
            <div className="lg:col-span-7 flex flex-col justify-between pt-2 lg:pt-7">
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light mb-8 max-w-2xl">
                Software and data should not be siloed into separate worlds. By uniting technical software architecture with data science disciplines, systems become verifiable, transparent, and resilient to failure.
              </p>

              <div>
                <button
                  onClick={() => {
                    onNavigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  data-cursor="link"
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white hover:text-purple-400 transition-colors cursor-pointer focus:outline-none"
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

    {/* 4.5 WHAT I BUILD */}
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
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                SOFTWARE ENGINEERING
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Full-stack applications, distributed microservices, RESTful and WebSocket streaming protocols, and offline-first client engines.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">02</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                DATA ANALYTICS
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Exploratory data analysis, automated pipeline scheduling, statistical inference, feature engineering, and predictive propensity models.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">03</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                BUSINESS INTELLIGENCE
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Data warehousing schema design, Star/Snowflake modeling, DAX dimensional measures, and low-latency executive decision dashboards.
              </p>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">04</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                UI / UX
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
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
}
