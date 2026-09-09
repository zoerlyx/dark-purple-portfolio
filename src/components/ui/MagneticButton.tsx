import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'minimal';
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  id,
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReducedMotion(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isReducedMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Subtle magnetic strength (max ~8px shift)
    const distanceX = (e.clientX - centerX) * 0.22;
    const distanceY = (e.clientY - centerY) * 0.22;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:ring-offset-2 focus:ring-offset-[#050507] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none rounded-xl';

  const variants = {
    primary:
      'bg-white text-black hover:bg-neutral-100 active:scale-95 px-7 py-3.5 border border-white/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group',
    secondary:
      'bg-neutral-900/90 text-white hover:bg-neutral-800/90 hover:border-purple-500/50 border border-neutral-700/60 active:scale-95 px-6 py-3 backdrop-blur-md shadow-lg group',
    outline:
      'bg-transparent text-neutral-300 hover:text-white border border-neutral-800 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] active:scale-95 px-6 py-3 group',
    minimal:
      'bg-transparent text-neutral-400 hover:text-white px-3 py-2 group underline-offset-8 hover:underline decoration-purple-500 decoration-2',
  };

  return (
    <button
      ref={buttonRef}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="link"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.12s ease-out, background-color 0.2s, border-color 0.2s, box-shadow 0.2s'
          : 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.2s, border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Efek Shimmer / Overlay Light saat Hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Konten Teks & Icon */}
      <span
        className="relative z-10 inline-flex items-center gap-2 transition-transform duration-200"
        style={{
          transform: isHovered ? `translate3d(${position.x * 0.4}px, ${position.y * 0.4}px, 0)` : 'none',
        }}
      >
        {children}
      </span>
    </button>
  );
};
