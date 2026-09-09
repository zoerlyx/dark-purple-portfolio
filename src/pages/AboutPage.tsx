import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ArrowDown } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-32 md:pt-40 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-neutral-800/80 pb-12 mb-16 md:mb-24">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>INDEX // 03</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase mb-6">
              ABOUT &amp;
              <br />
              <span className="text-neutral-400">DISCIPLINE.</span>
            </h1>
          </Reveal>
        </div>

        {/* 6.1 PROFILE SECTION */}
        <section className="mb-28 md:mb-40">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Large Portrait */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    alt="Koushik Profile"
                    data-cursor="open"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-purple-400 uppercase tracking-widest bg-black/80 px-2 py-1 border border-neutral-800">
                    ENGINEERING PROFILE // ID
                  </div>
                </div>
              </div>

              {/* Bio & Role */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400 mb-4">
                    PRIMARY ROLE
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-8">
                    SOFTWARE ENGINEER &amp; DATA-FOCUSED BUILDER
                  </h2>

                  <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                    <p>
                      I operate at the convergence of software architecture and data analytics. My work is anchored in understanding real-world operational problems, structuring chaotic datasets, and building clean, responsive digital products.
                    </p>
                    <p className="text-neutral-400">
                      Based in Indonesia, I collaborate with distributed teams on distributed telemetry pipelines, business intelligence dashboards, and full-stack software products that prioritize performance, clarity, and mathematical rigor.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs uppercase tracking-wider text-neutral-400">
                  <div>
                    <span className="text-white block font-bold">EDUCATION</span>
                    <span className="text-[11px]">Computer Science &amp; Data</span>
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
            <div className="my-12">
              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-16">
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
              title="SKILLS &amp; STACK"
              tag="// 04 &bull; TOOLCHAIN"
              subtitle="TEXT-BASED INVENTORY OF PRODUCTION-PROVEN TECHNOLOGIES."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 font-mono">
            {/* FRONTEND */}
            <Reveal delay={100}>
              <div className="border-t-2 border-white pt-4">
                <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">FRONTEND</div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="hover:text-purple-300 transition-colors">React 19 / 18</li>
                  <li className="hover:text-purple-300 transition-colors">Next.js App Router</li>
                  <li className="hover:text-purple-300 transition-colors">TypeScript (Strict)</li>
                  <li className="hover:text-purple-300 transition-colors">Tailwind CSS</li>
                  <li className="hover:text-purple-300 transition-colors">Motion / GSAP</li>
                  <li className="hover:text-purple-300 transition-colors">WebGL / Canvas</li>
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
                  <li className="hover:text-purple-300 transition-colors">Redis (Caching/Queues)</li>
                  <li className="hover:text-purple-300 transition-colors">WebSockets / SSE</li>
                  <li className="hover:text-purple-300 transition-colors">Go (Microservices)</li>
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
                  <li className="hover:text-purple-300 transition-colors">Apache Airflow (ETL)</li>
                  <li className="hover:text-purple-300 transition-colors">Scikit-Learn / PyTorch</li>
                  <li className="hover:text-purple-300 transition-colors">Data Modeling (Star/Snowflake)</li>
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
                  <li className="hover:text-purple-300 transition-colors">Linux / Shell Scripting</li>
                  <li className="hover:text-purple-300 transition-colors">CI/CD &amp; Automation</li>
                  <li className="hover:text-purple-300 transition-colors">Postman / WireMock</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6.5 CAPABILITIES */}
        <section className="mb-28 md:mb-40 border-t border-neutral-800 pt-16 md:pt-24">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-8">
              // 05 &bull; DOMAIN MASTERY
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight border-b border-neutral-800/80 pb-6 hover:text-purple-300 transition-colors">
                SOFTWARE ENGINEERING
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight border-b border-neutral-800/80 pb-6 hover:text-white transition-colors">
                DATA ANALYTICS
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight border-b border-neutral-800/80 pb-6 hover:text-purple-400 transition-colors">
                BUSINESS INTELLIGENCE
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-400 uppercase tracking-tight border-b border-neutral-800/80 pb-6 hover:text-white transition-colors">
                UI / UX
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6.6 PERSONAL STATEMENT */}
        <section className="border-t border-neutral-800 pt-20 md:pt-32 text-center">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-purple-400 mb-8">
              // 06 &bull; STATEMENT
            </div>
            <blockquote className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] max-w-5xl mx-auto">
              &ldquo;I&apos;M INTERESTED IN THE SPACE BETWEEN SOFTWARE, DATA, AND HUMAN EXPERIENCE.&rdquo;
            </blockquote>
          </Reveal>
        </section>
      </div>
    </div>
  );
};
