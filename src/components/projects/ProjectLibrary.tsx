import React, { useState, useEffect, useRef } from 'react';
import { Project, ProjectCategory } from '../../types/project';
import { ProjectFilter } from './ProjectFilter';
import { formatIndex } from '../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectLibraryProps {
  projects: Project[];
  onSelectProject: (slug: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'SOFTWARE',
  'DATA',
  'BI',
  'AI',
  'UI/UX',
  'MOBILE',
  'CLIENT',
];

export const ProjectLibrary: React.FC<ProjectLibraryProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [cardPos, setCardPos] = useState({ x: -200, y: -200 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const hoveredElementRef = useRef<HTMLElement | null>(null);
  const mouseXRef = useRef<number>(-200);
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Lerp follow loop for buttery smooth floating image
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const tick = () => {
      if (hoveredElementRef.current) {
        const rect = hoveredElementRef.current.getBoundingClientRect();
        const cardHeight = 208;
        const cardWidth = 320;
        const gap = 12;

        // Position ABOVE the corresponding project item
        let idealTop = rect.top - cardHeight - gap;

        // Keep entire card visible within the viewport
        if (idealTop < 16) {
          idealTop = 16;
        } else if (idealTop + cardHeight > window.innerHeight - 16) {
          idealTop = window.innerHeight - cardHeight - 16;
        }

        // Horizontal positioning: centered over mouse X or item center, kept within viewport
        let idealX = mouseXRef.current > 0 ? mouseXRef.current : rect.left + rect.width / 2;
        idealX = Math.max(16 + cardWidth / 2, Math.min(window.innerWidth - 16 - cardWidth / 2, idealX));

        targetPos.current = { x: idealX, y: idealTop };
      }

      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.2);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.2);
      setCardPos({ x: currentPos.current.x, y: currentPos.current.y });
      animFrameId.current = requestAnimationFrame(tick);
    };

    animFrameId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return (
      p.categories.includes(activeCategory)
    );
  });

  // Calculate counts per category
  const categoryCounts = CATEGORIES.reduce((acc, cat) => {
    if (cat === 'ALL') {
      acc[cat] = projects.length;
    } else {
      acc[cat] = projects.filter(
        (p) =>
          p.categories.includes(cat) 
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="w-full relative">
      {/* Category Filters */}
      <ProjectFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={categoryCounts}
      />

      {/* Floating Image Preview positioned ABOVE corresponding project item */}
      {!isTouchDevice && hoveredProject && (
        <div
          className="fixed pointer-events-none z-40 transition-opacity duration-300 ease-out"
          style={{
            left: `${cardPos.x}px`,
            top: `${cardPos.y}px`,
            opacity: hoveredProject ? 1 : 0,
            transform: 'translateX(-50%)',
            willChange: 'left, top',
          }}
        >
          <div className="w-80 h-52 bg-neutral-900 rounded-sm overflow-hidden border border-neutral-700 shadow-2xl shadow-purple-950/40 relative">
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <div className="font-mono text-[10px] text-white tracking-widest uppercase flex items-center justify-between w-full">
                <span>{hoveredProject.title}</span>
                <span className="text-purple-400 font-bold">VIEW &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Table / List */}
      <div className="border-t border-neutral-800/80 mt-6 divide-y divide-neutral-800/50">
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center font-mono text-neutral-400 uppercase tracking-widest text-xs">
            NO PROJECTS FOUND FOR CATEGORY: {activeCategory}
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={project.slug}
              onClick={() => {
                onSelectProject(project.slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={(e) => {
                const currentTarget = e.currentTarget;
                hoveredElementRef.current = currentTarget;
                setHoveredProject(project);

                const rect = currentTarget.getBoundingClientRect();
                const cardHeight = 208;
                const cardWidth = 320;
                const gap = 12;

                let idealTop = rect.top - cardHeight - gap;
                if (idealTop < 16) {
                  idealTop = 16;
                } else if (idealTop + cardHeight > window.innerHeight - 16) {
                  idealTop = window.innerHeight - cardHeight - 16;
                }

                let idealX = mouseXRef.current > 0 ? mouseXRef.current : rect.left + rect.width / 2;
                idealX = Math.max(16 + cardWidth / 2, Math.min(window.innerWidth - 16 - cardWidth / 2, idealX));

                if (!hoveredProject) {
                  currentPos.current = { x: idealX, y: idealTop };
                  setCardPos({ x: idealX, y: idealTop });
                }
                targetPos.current = { x: idealX, y: idealTop };
              }}
              onMouseLeave={() => {
                hoveredElementRef.current = null;
                setHoveredProject(null);
              }}
              data-cursor="view"
              className="group py-6 md:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-colors duration-200 hover:bg-neutral-900/30 px-2 md:px-4"
            >
              {/* Index & Title */}
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs text-neutral-400 group-hover:text-purple-400 transition-colors w-6">
                  {formatIndex(idx)}
                </span>
                <div>
                  <h4 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-300" />
                  </h4>
                  <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider mt-1 line-clamp-1 max-w-xl">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Mobile Thumbnail (visible on touch/small screens) */}
              <div className="sm:hidden w-full h-36 rounded overflow-hidden mt-2 bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Meta: Category & Year */}
              <div className="flex items-center gap-6 sm:text-right font-mono text-xs uppercase tracking-widest text-neutral-400">
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 rounded">
                  {project.category}
                </span>
                <span className="text-neutral-400">{project.year}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
