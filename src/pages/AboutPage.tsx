import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ArrowDown } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-32 md:pt-40 pb-28 md:pb-12">
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
                <span className="text-purple-400">ME.</span>
              </h1>
            </div>
          </Reveal>
        </div>

        {/* 6.1 PROFILE SECTION */}
        <section className="mb-12 md:mb-16">
          <Reveal>
            <SectionHeading
              title="INTRODUCTION"
              tag="// 01 &bull; AREA OF EXPERTISE"
            />
            <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                  <p className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-wider leading-relaxed text-justify">
                    I’m a Software Engineer with a strong interest in data and the way technology can be used to solve real problems. My work spans software development, data processing, analysis, modeling, and visualization, allowing me to approach problems from both an engineering and analytical perspective.
                  </p>
                  <p className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-wider leading-relaxed text-justify">
                    I like to understand how things work before deciding how they should be built. I pay attention to the details that matter, question assumptions when something doesn’t make sense, and keep refining my work until the solution is clear, effective, and useful.
                  </p>
                  <p className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-wider leading-relaxed text-justify">
                    I enjoy being involved throughout the process, from understanding the initial problem to delivering the final result. Sometimes that means designing and building a software solution, sometimes exploring data to uncover meaningful insights, and sometimes bringing both together to solve a problem more effectively. That combination of engineering and analysis is what I find most interesting about building things.
                  </p>
                </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
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
        <section className="mb-28 md:mb-18 border-t border-neutral-800 pt-16 md:pt-12">
          <Reveal>
            <SectionHeading
              title="MY APPROACH"
              tag="// 02 &bull; WORKFLOW"
              subtitle="A STRUCTURED WAY OF TURNING PROBLEMS INTO RELIABLE SOFTWARE, USEFUL INSIGHTS, AND BETTER SOLUTIONS."
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="my-8 md:my-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                
                {/* STEP 01 */}
                <div className="relative border border-neutral-800/80 hover:border-purple-500/60 p-6 bg-neutral-950/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between group">
                  <div>
                    <div className="font-mono text-xs text-purple-400 font-bold tracking-widest mb-4">
                      [ 01 ]
                    </div>
                    <div className="text-white font-mono font-bold text-sm md:text-base tracking-wider mb-3 group-hover:text-purple-300 transition-colors">
                      UNDERSTAND
                    </div>
                    <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                      I start by understanding the problem, the people involved, the requirements, and the context before deciding on a solution.
                    </p>
                  </div>

                  {/* Arrow Connector */}
                  <div className="mt-4 md:mt-0 flex justify-end md:absolute md:-right-3.5 md:top-1/2 md:-translate-y-1/2 z-20 pointer-events-none">
                    <ArrowDown className="w-4 h-4 text-purple-400/60 group-hover:text-purple-400 group-hover:translate-x-1 md:-rotate-90 transition-all duration-300" />
                  </div>
                </div>

                {/* STEP 02 */}
                <div className="relative border border-neutral-800/80 hover:border-purple-500/60 p-6 bg-neutral-950/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between group">
                  <div>
                    <div className="font-mono text-xs text-purple-400 font-bold tracking-widest mb-4">
                      [ 02 ]
                    </div>
                    <div className="text-white font-mono font-bold text-sm md:text-base tracking-wider mb-3 group-hover:text-purple-300 transition-colors">
                      STRUCTURE
                    </div>
                    <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                      I break the problem down into clear requirements, systems, workflows, data, and interfaces so the solution has a solid foundation.
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex justify-end md:absolute md:-right-3.5 md:top-1/2 md:-translate-y-1/2 z-20 pointer-events-none">
                    <ArrowDown className="w-4 h-4 text-purple-400/60 group-hover:text-purple-400 group-hover:translate-x-1 md:-rotate-90 transition-all duration-300" />
                  </div>
                </div>

                {/* STEP 03 */}
                <div className="relative border border-neutral-800/80 hover:border-purple-500/60 p-6 bg-neutral-950/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between group">
                  <div>
                    <div className="font-mono text-xs text-purple-400 font-bold tracking-widest mb-4">
                      [ 03 ]
                    </div>
                    <div className="text-white font-mono font-bold text-sm md:text-base tracking-wider mb-3 group-hover:text-purple-300 transition-colors">
                      BUILD & ANALYZE
                    </div>
                    <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                      I choose the approach that fits the problem. That may mean designing and building software, processing and analyzing data, or bringing both together.
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex justify-end md:absolute md:-right-3.5 md:top-1/2 md:-translate-y-1/2 z-20 pointer-events-none">
                    <ArrowDown className="w-4 h-4 text-purple-400/60 group-hover:text-purple-400 group-hover:translate-x-1 md:-rotate-90 transition-all duration-300" />
                  </div>
                </div>

                {/* STEP 04 */}
                <div className="relative border border-neutral-800/80 hover:border-purple-500/60 p-6 bg-neutral-950/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between group">
                  <div>
                    <div className="font-mono text-xs text-purple-400 font-bold tracking-widest mb-4">
                      [ 04 ]
                    </div>
                    <div className="text-white font-mono font-bold text-sm md:text-base tracking-wider mb-3 group-hover:text-purple-300 transition-colors">
                      EVALUATE
                    </div>
                    <p className="text-neutral-400 text-[11px] leading-relaxed lowercase font-sans">
                      I use testing, analysis, visualization, and measurable results to see what works, identify what doesn’t, and understand why.
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex justify-end md:absolute md:-right-3.5 md:top-1/2 md:-translate-y-1/2 z-20 pointer-events-none">
                    <ArrowDown className="w-4 h-4 text-purple-400/60 group-hover:text-purple-400 group-hover:translate-x-1 md:-rotate-90 transition-all duration-300" />
                  </div>
                </div>

                {/* STEP 05 */}
                <div className="relative border border-purple-500/50 hover:border-purple-400 p-6 bg-purple-950/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] flex flex-col justify-between group">
                  <div>
                    <div className="font-mono text-xs text-purple-300 font-bold tracking-widest mb-4">
                      [ 05 ]
                    </div>
                    <div className="text-white font-mono font-bold text-sm md:text-base tracking-wider mb-3 text-purple-200">
                      REFINE
                    </div>
                    <p className="text-neutral-300 text-[11px] leading-relaxed lowercase font-sans">
                      I keep improving the solution based on what I learn, whether that means simplifying the implementation, improving data quality, optimizing performance, or making the result easier to use.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </section>
        
        {/* 6.3 EXPERIENCE*/}
        <section className="mb-28 md:mb-18 border-t border-neutral-800 pt-16 md:pt-12">
          <Reveal>
            <SectionHeading
              title="EXPERIENCE"
              tag="// 03 &bull; PROFESSIONAL EXPERIENCE"
              subtitle="A RECORD OF PROFESSIONAL ROLES, CONTRIBUTIONS, AND GROWTH"
            />
          </Reveal>

          <div className="divide-y divide-neutral-800/80 font-mono">
            <Reveal delay={100}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-purple-400 font-bold text-sm">2026 &mdash; PRESENT</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">FRONTEND ENGINEER &amp; UI/UX DESIGNER</div>
                  <div className="text-neutral-400 text-xs mt-1">DENGARBAIN — ACCESSIBILITY PWA</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Contributed to the design and frontend development of a responsive, cross-platform PWA for learning Hadis Arbain, with a focus on accessibility for blind and visually impaired users. Implemented interfaces that support both reading and listening, including TalkBack-friendly navigation and accessible interactions.
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2026</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">BI DEVELOPER &amp; DATA PIPELINE ENGINEER</div>
                  <div className="text-neutral-400 text-xs mt-1">NUSANTARA RETAIL — DATA QUALITY & BUSINESS MONITORING</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Developed a business intelligence solution for monitoring retail operations and data quality, working across PostgreSQL data processing and Power BI visualization. Built data quality checks, analytical views, and interactive dashboards to turn operational data into clearer business insights.
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2026</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">DATA COLLECTION & WEB SCRAPING DEVELOPER</div>
                  <div className="text-neutral-400 text-xs mt-1">PERSPEKTIV IDN</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Developed an automated web scraping workflow using Selenium and BeautifulSoup to collect and organize posts from Facebook groups. Built the process to handle dynamic content, extract relevant post information, and generate structured HTML archives for easier review and documentation.
                </div>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2025 &mdash; 2026</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">WEB DEVELOPER & ADMINISTRATOR</div>
                  <div className="text-neutral-400 text-xs mt-1">CSSMoRA UIN SUNAN GUNUNG DJATI BANDUNG</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Developed and maintained the organization's website while supporting administrative and digital content activities. Contributed to improving the website's usability, content management, and overall digital presence.
                </div>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2023 — PRESENT</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">SOFTWARE ENGINEER</div>
                  <div className="text-neutral-400 text-xs mt-1">SOFTWARE DEVELOPMENT PROJECTS</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Developed and contributed to 16+ software projects across web, mobile, data, GIS, IoT, and AI, working across different stages of development from planning and implementation to testing, refinement, and deployment.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      {/* 6.3 EXPERIENCE*/}
        <section className="mb-28 md:mb-18 border-t border-neutral-800 pt-16 md:pt-12">
          <Reveal>
            <SectionHeading
              title="EDUCATION"
              tag="// 04 &bull; ACADEMIC BACKGROUND"
              subtitle="MY ACADEMIC JOURNEY AND CONTINUOUS PROFESSIONAL LEARNING."
            />
          </Reveal>

          <div className="divide-y divide-neutral-800/80 font-mono">
            <Reveal delay={100}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-purple-400 font-bold text-sm">2026 &mdash; PRESENT</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">BACHELOR OF INFORMATICS ENGINEERING</div>
                  <div className="text-neutral-400 text-xs mt-1">SUNAN GUNUNG DJATI STATE ISLAMIC UNIVERSITY</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Pursuing a bachelor's degree in Informatics Engineering, developing a foundation across software engineering, data, information systems, and applied computing. Current GPA: 3.75 / 4.00.
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 text-neutral-400 text-sm">2026</div>
                <div className="md:col-span-4">
                  <div className="text-white font-display text-xl font-bold uppercase">DATA SCIENTIST LEARNING PATH</div>
                  <div className="text-neutral-400 text-xs mt-1">CODING CAMP 2026 — DBS FOUNDATION</div>
                </div>
                <div className="md:col-span-6 text-neutral-400 text-xs font-sans leading-relaxed">
                  Completed an intensive learning program focused on data analysis, machine learning, statistical methods, and practical data science projects, with hands-on experience working through the data science workflow.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6.4 SKILLS & STACK */}
        <section className="mb-28 md:mb-18 border-t border-neutral-800 pt-16 md:pt-12">
          <Reveal>
            <SectionHeading
              title="TECH STACK"
              tag="// 05 &bull; TOOLKIT"
              subtitle="A CURATED OVERVIEW OF THE TECHNOLOGIES I USE TO BUILD AND ANALYZE DIGITAL PRODUCTS"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 font-mono">
            {/* FRONTEND */}
            <Reveal delay={100}>
              <div className="group relative overflow-hidden bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1">
                {/* Animated Glowing Background Effect */}
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-12 group-hover:translate-y-6 transition-all duration-1000 ease-in-out pointer-events-none" />

                {/* Accent Line - Top */}
                <div className="relative z-10">
                  <div className="absolute -top-6 -left-6 -right-6 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
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
              </div>
            </Reveal>

            {/* BACKEND */}
            <Reveal delay={180}>
              <div className="group relative overflow-hidden bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1">
                {/* Animated Glowing Background Effect */}
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-purple-500/0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-12 group-hover:translate-y-6 transition-all duration-1000 ease-in-out pointer-events-none" />

                {/* Accent Line - Top */}
                <div className="relative z-10">
                  <div className="absolute -top-6 -left-6 -right-6 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
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
              </div>
            </Reveal>

            {/* DATA */}
            <Reveal delay={260}>
              <div className="group relative overflow-hidden bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1">
                {/* Animated Glowing Background Effect (Stronger Accent) */}
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/30 via-purple-600/20 to-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-12 group-hover:translate-y-6 transition-all duration-1000 ease-in-out pointer-events-none" />

                {/* Accent Line - Top */}
                <div className="relative z-10">
                  <div className="absolute -top-6 -left-6 -right-6 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">DATA</div>
                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    <li className="hover:text-purple-300 transition-colors">Python (NumPy, Pandas)</li>
                    <li className="hover:text-purple-300 transition-colors">SQL (Complex Queries/CTEs)</li>
                    <li className="hover:text-purple-300 transition-colors">Power BI / DAX Measures</li>
                    <li className="hover:text-purple-300 transition-colors">Data Visualization</li>
                    <li className="hover:text-purple-300 transition-colors">Scikit-Learn / PyTorch</li>
                    <li className="hover:text-purple-300 transition-colors">Excel / Google Sheets</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* TOOLS */}
            <Reveal delay={340}>
              <div className="group relative overflow-hidden bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1">
                {/* Animated Glowing Background Effect */}
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/15 via-indigo-500/15 to-purple-500/0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-12 group-hover:translate-y-6 transition-all duration-1000 ease-in-out pointer-events-none" />

                {/* Accent Line - Top */}
                <div className="relative z-10">
                  <div className="absolute -top-6 -left-6 -right-6 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
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
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6.5 CAPABILITIES */}
        <section className="mb-28 md:mb-18 border-t border-neutral-800 pt-16 md:pt-12">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-8 px-4">
              // 06 &bull; CAPABILITIES
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
