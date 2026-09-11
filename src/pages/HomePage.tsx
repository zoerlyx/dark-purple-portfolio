import React from 'react';
import { Project } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ArrowRight, Sparkles } from 'lucide-react';
import PortalButton from '../components/PortalButton';

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
    <section className="relative min-h-[92vh] pt-16 md:pt-24 pb-16 md:pb-24 flex flex-col justify-between overflow-hidden border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10 gap-12">
        
        {/* Core Hero Content: Outer Glass Frame Wrapper */}
      <div className="relative my-auto py-8 max-w-6xl mx-auto w-full">
        {/* Soft Background Radial Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-indigo-900/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

        {/* Outer Modern Container */}
        <div className="relative rounded-1xl bg-neutral-950/85 border border-purple-900/40 backdrop-blur-2xl p-5 sm:p-7 lg:p-9 shadow-[0_0_50px_rgba(147,51,234,0.15)] overflow-hidden transition-all duration-500 hover:border-purple-500/50 group">
        {/* Cyber Grid Lines (Background halus khas HUD) */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top Neon Accent Line (Menyala lembut) */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Cyber Corner Markers (Sudut khas interface cyberpunk) */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/70" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500/70" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500/70" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/70" />

        {/* Technical Header / Status Bar */}
        <div className="absolute top-3 right-5 flex items-center gap-3 pointer-events-none select-none font-mono text-[9px] tracking-widest text-neutral-500">
          <span className="flex items-center gap-1.5 text-cyan-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            ONLINE
          </span>
          <span className="text-neutral-700">//</span>
          <span>LOC // ID-2026</span>
        </div>

        {/* Ambient Neon Core Glow */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/15 blur-[90px] pointer-events-none rounded-full" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />

          
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
                <h1 className="font-display font-black text-4xl sm:text-4xl md:text-7xl lg:text-8xl tracking-tight text-white/30 uppercase leading-none">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 border-t border-neutral-800/60 pt-12 mt-auto">
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
          <div className="pt-12 md:pt-24 border-t border-neutral-800/60 flex flex-col items-center gap-8">
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
    <section className="py-20 md:py-12 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
    {/* Kolom Kiri: Sidebar Metadata (3 Kolom) */}
    {/* Kolom Kiri: Sidebar Metadata (3 Kolom) */}
<div className="lg:col-span-3 font-mono text-xs uppercase tracking-widest text-neutral-400 flex flex-col h-full">
  
  {/* GRUP ATAS: Judul & List Skill */}
  <div>
    <span className="text-purple-400 font-semibold">// 01 &bull; INTRODUCTION</span>
    <div className="mt-4 space-y-1.5 text-neutral-400 text-[12px]">
      <div>BASED IN INDONESIA</div>
      <div>SOFTWARE ENGINEERING</div>
      <div>DATA ANALYTICS</div>
      <div>BUSINESS INTELLIGENCE</div>
    </div>
  </div>

  {/* GRUP BAWAH: mt-auto memaksa div ini ke dasar/end kolom */}
  
      <div className="mt-auto pb-8">
      <button
      type="button"
      onClick={() => {
        onNavigate('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      data-cursor="link"
      className="relative group overflow-hidden px-6 py-3.5 border border-neutral-700 bg-transparent text-neutral-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-colors duration-500 hover:text-neutral-950 hover:border-purple-400 active:scale-95 cursor-pointer focus:outline-none"
    >
      {/* Liquid Fill Layer (Bawah ke Atas) */}
      <span className="absolute inset-0 bg-purple-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

      {/* Button Text */}
      <span className="relative z-10 font-bold transition-colors duration-300 group-hover:text-black">
        MORE ABOUT ME
      </span>

      {/* Icon Fly-out Animation (ArrowRight) */}
      <div className="relative z-10 overflow-hidden w-4 h-4">
        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:text-black absolute inset-0" />
        <ArrowRight className="w-4 h-4 transition-all duration-300 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-black absolute inset-0" />
      </div>
    </button>
  </div>

</div>

    {/* Kolom Kanan: Paragraf Teks (9 Kolom agar simetris mengisi sisa grid) */}
    <div className="lg:col-span-9 md:py-7 uppercase">
      <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-mono text-justify max-w-none">
        I&apos;m a software engineer focused on building practical software solutions with a strong interest in data. My work combines software development, data analysis, and engineering to turn problems into clear, useful solutions.
      </p>
      
      <p className="mt-6 text-neutral-400 text-base md:text-lg leading-relaxed font-mono text-justify max-w-none">
        I approach each project by first understanding the problem, then deciding how it should be built. Whether I’m developing a software system, working with data, or combining both, I focus on creating solutions that are thoughtful, effective, and useful.
      </p>
    </div>
  </div>
</Reveal>
      </div>
    </section>

    {/* 4.3 SELECTED WORK SECTION */}
    <section className="py-24 md:py-12 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading
            title="SELECTED WORK"
            tag="// 02 &bull; CASE STUDIES"
            subtitle="SELECTED PROJECTS FROM MY WORK ACROSS SOFTWARE ENGINEERING AND DATA."
            
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
          <div className="mt-16 md:py-12 text-center">
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



    {/* 4.5 WHAT I BUILD */}
    <section className="py-24 md:py-12 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading
            title="CAPABILITIES"
            tag="// 03 &bull; CORE EXPERTISE"
            subtitle="CORE AREAS I WORK IN ACROSS SOFTWARE ENGINEERING AND DATA."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
          <Reveal delay={100}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">01</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                SOFTWARE ENGINEERING
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light text-justify">
                Web applications, full-stack development, REST APIs, backend services, and application architecture.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">02</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                DATA <br />ANALYTICS
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light text-justify">
                Data cleaning, exploratory analysis, statistical analysis, data processing, and data visualization.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">03</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                BUSINESS INTELLIGENCE
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light text-justify">
                Data warehousing, dimensional modeling, SQL, DAX, Power BI dashboards, and business reporting.
              </p>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="border-t border-neutral-800 pt-6">
              <div className="font-mono text-[11px] text-purple-400 tracking-widest mb-3">04</div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight uppercase mb-3">
                DATA ENGINEERING
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light text-justify">
                Data pipelines, ETL workflows, database design, data transformation, and data quality processes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 4.6 CONTACT CTA */}
<section className="relative py-24 md:py-36 bg-[#040405] text-center overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <Reveal>
      <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] uppercase mb-6">
        LET&apos;S 
        <br />
        BUILD
        <br />
        <span className="text-purple-500 text-justify">SOMETHING</span><br/>
        <span className="text-white-500">USEFUL</span>
        <span className="text-purple-500"> .</span>
      </h2>

      <p className="font-mono text-xs sm:text-sm text-neutral-400 tracking-wider uppercase max-w-lg mx-auto mb-10 leading-normal">
        AVAILABLE FOR COLLABORATION, PROJECTS, AND SELECTED OPPORTUNITIES.
      </p>

      <div className="flex justify-center md:py-24">
        <PortalButton
          onClick={() => {
            onNavigate('/contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>
    </Reveal>
  </div>
</section>
  </div>
);
}
