import React from 'react';
import { ProjectCategory } from '../../types/project';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  counts?: Record<string, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3 my-8 select-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = counts?.[cat];

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            data-cursor="link"
            className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 mb-6 rounded-sm transition-all duration-200 cursor-pointer border ${
              isActive
                ? 'bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span
                className={`ml-1.5 text-[10px] ${
                  isActive ? 'text-neutral-700' : 'text-neutral-400'
                }`}
              >
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
