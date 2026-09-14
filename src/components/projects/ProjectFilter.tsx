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
    <div className="my-8 select-none">
      {/* 1. Custom Styled Dropdown khusus Mobile (Android/HP) */}
      <div className="block md:hidden">
        <div className="relative">
          <select
            value={activeCategory}
            onChange={(e) => onSelectCategory(e.target.value as ProjectCategory)}
            className="w-full bg-neutral-900/60 backdrop-blur-md text-neutral-300 font-mono text-xs uppercase tracking-widest px-4 py-3.5 rounded-sm border border-neutral-800 focus:border-purple-400 focus:text-white focus:outline-none appearance-none cursor-pointer transition-all duration-300 shadow-sm"
          >
            {categories.map((cat) => {
              const count = counts?.[cat];
              return (
                <option 
                  key={cat} 
                  value={cat} 
                  className="bg-neutral-950 text-neutral-300 font-mono text-xs uppercase py-2"
                >
                  {cat} {count !== undefined ? `(${count})` : ''}
                </option>
              );
            })}
          </select>

          {/* Minimalist Arrow Icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Tampilan Tombol Jajaran khusus Desktop (Persis Kode Asli) */}
      <div className="hidden md:flex flex-wrap items-center gap-2 md:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = counts?.[cat];

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              data-cursor="link"
              className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all duration-200 cursor-pointer border ${
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
    </div>
  );
};
