import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ArrowDown } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-32 md:pt-40 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-neutral-800/80 pb-12 mb-16 md:mb-24 flex flex-col items-center justify-center text-center">
          <Reveal>
            <div className="flex flex-col items-center">
              {/* Sub-header di tengah */}
              <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                <span>03 // ABOUT ME</span>
              </div>

              {/* Judul Utama di tengah */}
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase">
                ABOUT
                <br />
                <span className="text-neutral-400">ME.</span>
              </h1>
            </div>
          </Reveal>
        </div>

        {/* 6.1 PROFILE SECTION */}
        <section className="mb-12 md:mb-16">
          <Reveal>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Menggunakan SectionHeading */}
                <SectionHeading
                  tag="// 01 &bull; AREA OF EXPERTISE"
                  title="SOFTWARE ENGINEER & DATA ANALYST"
                />

                {/* Paragraf Bio */}
                <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                  <p className="font-mono text-justify">
                    I’m a Software Engineer focused on building practical digital solutions through software and data. I combine structured engineering with analytical thinking to develop products that are reliable, maintainable, and grounded in real-world needs.
                  </p>
                  <p className="font-mono text-justify">
                    I like to understand how things work before deciding how they should be built. Whether I’m working with code or analyzing data, I pay attention to the details that matter, question what doesn’t make sense, and keep refining the solution until it is clear, efficient, and meaningful.
                  </p>
                  <p className="font-mono text-justify">
                    I enjoy being involved from the initial problem to the final result, rather than focusing on just one part of the process. Sometimes that means designing and building a software solution, sometimes exploring data to uncover useful insights, and sometimes connecting both to solve a problem more effectively. That combination of engineering and analysis is what makes building things interesting to me.
                  </p>
                </div>
              </div>


                <div className="mt-12 pt-8 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-3 gap-64 font-mono text-xs uppercase tracking-wider text-neutral-400">
                  <div>
                    <span className="text-white block font-bold">EDUCATION</span>
                    <span className="text-[11px]">Information Technology</span>
                  </div>
                  <div>
                    <span className="text-white block font-bold">LOCATION</span>
                    <span className="text-[11px]">Indonesia (UTC+7)</span>
                  </div>
                  <div>
                    <span className="text-white block font-bold">STATUS</span>
                    <span className="text-purple-400 text-[11px]">Open for Collaboration</span>
                  </div>
                </div>
              </div>
            
          </Reveal>
        </section>

        {/* 6.2 MY APPROACH (EDITORIAL TYPOGRAPHY PROCESS) */}
        <section className="mb-28 md:mb-40 border-t border-neutral-800 pt-16 md:pt-24">
          <Reveal>
            <SectionHeading
              title="MY APPROACH"
              tag="// 02 &bull; PHILOSOPHY"
              subtitle="METHODOLOGY GROUNDED IN STRUCTURE, EMPIRICAL EVIDENCE, AND CONTINUOUS REFINEMENT."
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="my-6 md:my-8">
              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6 md:mb-8">
                &ldquo;I LIKE BUILDING THINGS THAT MAKE SENSE.&rdquo;
              </h3>

              {/* Editorial vertical process chain */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
                <div className="border border-neutral-800 p-6 rounded-sm bg-neutral-950/40 relative">
                  <div className="text-purple-400 text-sm font-bold mb-3">01</div>
                  <div className="text-white font-bold text-base mb-2">PROBLEM</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                    Isolate operational friction, bottlenecks, and core user constraints before writing code.
                  </p>
                  <ArrowDown className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 -rotate-90 z-10" />
                </div>

                <div className="border border-neutral-800 p-6 rounded-sm bg-neutral-950/40 relative">
                  <div className="text-purple-400 text-sm font-bold mb-3">02</div>
                  <div className="text-white font-bold text-base mb-2">STRUCTURE</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                    Formulate relational schemas, data pipelines, API contracts, and UX wireframe topologies.
                  </p>
                  <ArrowDown className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 -rotate-90 z-10" />
                </div>

                <div className="border border-neutral-800 p-6 rounded-sm bg-neutral-950/40 relative">
                  <div className="text-purple-400 text-sm font-bold mb-3">03</div>
                  <div className="text-white font-bold text-base mb-2">BUILD</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                    Execute with type-safe engineering, clean abstractions, and modular component architecture.
                  </p>
                  <ArrowDown className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 -rotate-90 z-10" />
                </div>

                <div className="border border-neutral-800 p-6 rounded-sm bg-neutral-950/40 relative">
                  <div className="text-purple-400 text-sm font-bold mb-3">04</div>
                  <div className="text-white font-bold text-base mb-2">MEASURE</div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                    Monitor telemetry metrics, database latency, client render frames, and business outcomes.
                  </p>
                  <ArrowDown className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 -rotate-90 z-10" />
                </div>

                <div className="border border-purple-500/40 p-6 rounded-sm bg-purple-950/10 relative">
                  <div className="text-purple-400 text-sm font-bold mb-3">05</div>
                  <div className="text-white font-bold text-base mb-2">IMPROVE</div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed lowercase font-sans">
                    Continuously eliminate technical debt, optimize query execution, and refine tactile micro-interactions.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 6.3 EXPERIENCE (EDITORIAL TIMELINE) */}
        <section className="mb-28 md:mb-40 border-t border-neutral-800 pt-16 md:pt-24">
          <Reveal>
            <SectionHeading
              title="EXPERIENCE"
              tag="// 03 &bull; CHRONOLOGY"
              subtitle="CAREER MILESTONES AND SYSTEM DEVELOPMENT ROLES."
            />
          </Reveal>

          <div className="divide-y divide-neutral-800/80 font-mono">
            <Reveal delay={100}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-purple-400 font-bold text-sm">2025 &mdash; PRESENT</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">SENIOR SOFTWARE &amp; DATA ENGINEER</div>
                  <div className="text-neutral-400 text-xs mt-1">INDEPENDENT CONSULTING / PRODUCT LABS</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Directing end-to-end delivery of enterprise data warehouses, streaming analytics systems, and high-frequency real-time web telemetry clients.
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2024 &mdash; 2025</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">BI DEVELOPER &amp; PIPELINE ARCHITECT</div>
                  <div className="text-neutral-400 text-xs mt-1">LOGISTICS &amp; RETAIL SYSTEMS</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Constructed multi-regional automated reconciliation pipelines, dimensional data models in Power BI/PostgreSQL, and edge-deployed computer vision monitoring models.
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2023 &mdash; 2024</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">FULL-STACK SOFTWARE DEVELOPER</div>
                  <div className="text-neutral-400 text-xs mt-1">DIGITAL PRODUCT PLATFORMS</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Engineered offline-first mobile applications with SQLite/CRDT synchronization, developed responsive WebGL visualizers, and implemented RESTful microservices.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6.4 SKILLS & STACK */}
        <section className="mb-28 md:mb-40 border-t border-neutral-800 pt-16 md:pt-24">
          <Reveal>
            <SectionHeading
              title="TECH STACK"
              tag="// 04 &bull; TOOLKIT"
              subtitle="A CURATED OVERVIEW OF THE TECHNOLOGIES I USE TO BUILD AND ANALYZE DIGITAL PRODUCTS"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 font-mono">
            {/* FRONTEND */}
            <Reveal delay={100}>
              <div className="border-t-2 border-white pt-4">
                <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">FRONTEND</div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="hover:text-purple-300 transition-colors">React 19</li>
                  <li className="hover:text-purple-300 transition-colors">Next.js</li>
                  <li className="hover:text-purple-300 transition-colors">TypeScript</li>
                  <li className="hover:text-purple-300 transition-colors">Tailwind CSS</li>
                  <li className="hover:text-purple-300 transition-colors">Javascript</li>
                  <li className="hover:text-purple-300 transition-colors">Motion / GSAP</li>
                </ul>
              </div>
            </Reveal>

            {/* BACKEND */}
            <Reveal delay={180}>
              <div className="border-t-2 border-neutral-700 pt-4">
                <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">BACKEND</div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="hover:text-purple-300 transition-colors">Node.js / Express</li>
                  <li className="hover:text-purple-300 transition-colors">RESTful APIs</li>
                  <li className="hover:text-purple-300 transition-colors">PostgreSQL / PostGIS</li>
                  <li className="hover:text-purple-300 transition-colors">TypeScript</li>
                  <li className="hover:text-purple-300 transition-colors">SQL</li>
                  <li className="hover:text-purple-300 transition-colors">Git</li>
                </ul>
              </div>
            </Reveal>

            {/* DATA */}
            <Reveal delay={260}>
              <div className="border-t-2 border-purple-500 pt-4">
                <div className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-4">DATA</div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="hover:text-purple-300 transition-colors">Python (NumPy, Pandas)</li>
                  <li className="hover:text-purple-300 transition-colors">SQL (Complex Queries/CTEs)</li>
                  <li className="hover:text-purple-300 transition-colors">Power BI / DAX Measures</li>
                  <li className="hover:text-purple-300 transition-colors">Data Visualization</li>
                  <li className="hover:text-purple-300 transition-colors">Scikit-Learn / PyTorch</li>
                  <li className="hover:text-purple-300 transition-colors">Excel / Google Sheets</li>
                </ul>
              </div>
            </Reveal>

            {/* TOOLS */}
            <Reveal delay={340}>
              <div className="border-t-2 border-neutral-700 pt-4">
                <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">TOOLS &amp; INFRA</div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="hover:text-purple-300 transition-colors">Git &amp; GitHub Actions</li>
                  <li className="hover:text-purple-300 transition-colors">Docker Containerization</li>
                  <li className="hover:text-purple-300 transition-colors">Figma (Design Systems)</li>
                  <li className="hover:text-purple-300 transition-colors">Vercel</li>
                  <li className="hover:text-purple-300 transition-colors">CI/CD &amp; Automation</li>
                  <li className="hover:text-purple-300 transition-colors">Postman</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6.5 CAPABILITIES */}
        <section className="mb-28 md:mb-40 border-t border-neutral-800 pt-16 md:pt-24 overflow-hidden">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-8 px-4">
              // 05 &bull; CAPABILITIES
            </div>
          </Reveal>

          <div className="space-y-6">
            {/* BARIS 1 (GANJIL) -> Bergerak ke KANAN */}
            <div className="border-b border-neutral-800/80 pb-6 overflow-hidden flex whitespace-nowrap">
              <div className="flex shrink-0 animate-marquee-right">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight hover:text-purple-300 transition-colors pr-8">
                  SOFTWARE ENGINEERING &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight hover:text-purple-300 transition-colors pr-8">
                  SOFTWARE ENGINEERING &bull;
                </span>
              </div>
              <div className="flex shrink-0 animate-marquee-right" aria-hidden="true">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight hover:text-purple-300 transition-colors pr-8">
                  SOFTWARE ENGINEERING &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight hover:text-purple-300 transition-colors pr-8">
                  SOFTWARE ENGINEERING &bull;
                </span>
              </div>
            </div>

            {/* BARIS 2 (GENAP) -> Bergerak ke KIRI */}
            <div className="border-b border-neutral-800/80 pb-6 overflow-hidden flex whitespace-nowrap">
              <div className="flex shrink-0 animate-marquee-left">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  DATA ANALYTICS &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  DATA ANALYTICS &bull;
                </span>
              </div>
              <div className="flex shrink-0 animate-marquee-left" aria-hidden="true">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  DATA ANALYTICS &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  DATA ANALYTICS &bull;
                </span>
              </div>
            </div>

            {/* BARIS 3 (GANJIL) -> Bergerak ke KANAN */}
            <div className="border-b border-neutral-800/80 pb-6 overflow-hidden flex whitespace-nowrap">
              <div className="flex shrink-0 animate-marquee-right">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-purple-400 transition-colors pr-8">
                  BUSINESS INTELLIGENCE &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-purple-400 transition-colors pr-8">
                  BUSINESS INTELLIGENCE &bull;
                </span>
              </div>
              <div className="flex shrink-0 animate-marquee-right" aria-hidden="true">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-purple-400 transition-colors pr-8">
                  BUSINESS INTELLIGENCE &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-purple-400 transition-colors pr-8">
                  BUSINESS INTELLIGENCE &bull;
                </span>
              </div>
            </div>

            {/* BARIS 4 (GENAP) -> Bergerak ke KIRI */}
            <div className="border-b border-neutral-800/80 pb-6 overflow-hidden flex whitespace-nowrap">
              <div className="flex shrink-0 animate-marquee-left">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
              </div>
              <div className="flex shrink-0 animate-marquee-left" aria-hidden="true">
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
                <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight hover:text-white transition-colors pr-8">
                  UI / UX &bull;
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
