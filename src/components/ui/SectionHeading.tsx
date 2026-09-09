import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  align?: 'left' | 'right' | 'between';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  tag,
  className = '',
  align = 'left',
}) => {
  return (
    <div
      className={`border-b border-neutral-800/80 pb-6 mb-12 md:mb-16 ${
        align === 'between'
          ? 'flex flex-col md:flex-row md:items-end md:justify-between gap-4'
          : align === 'right'
          ? 'text-right'
          : 'text-left'
      } ${className}`}
    >
      <div>
        {tag && (
          <div className="font-mono text-[11px] tracking-[0.25em] text-purple-400/90 uppercase mb-3 select-none flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span>{tag}</span>
          </div>
        )}
        <h2 className="font-display font-extrabold uppercase section-editorial-title text-neutral-100 tracking-tight">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="font-mono text-xs md:text-sm text-neutral-400 max-w-md uppercase tracking-wider leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
