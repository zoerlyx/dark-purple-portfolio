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
  className={`border-b border-neutral-800/80 pb-6 mb-8 md:mb-12 ${
    align === 'between'
      ? 'flex flex-col md:flex-row md:items-end md:justify-between gap-10'
      : align === 'right'
      ? 'text-right'
      : 'text-left'
  } ${className}`}
>
  <div className="min-w-0 w-full">
  {tag && (
    <div className="font-mono text-[11px] tracking-[0.25em] text-purple-400/90 uppercase mb-4 select-none flex items-center gap-2 min-w-0">
      <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
      <span className="break-words min-w-0">{tag}</span>
    </div>
  )}
  <h2 className="font-display font-extrabold uppercase section-editorial-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-100 tracking-tight pt-4 break-words min-w-0">
    {title}
  </h2>
</div>

  {subtitle && (
    <p className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-wider leading-relaxed pt-6 pb-4">
      {subtitle}
    </p>
  )}
</div>
  );
};
