import React, { useEffect, useRef } from 'react';

export const BackgroundAtmosphere: React.FC = () => {
  const mouseGlowRef = useRef<HTMLDivElement>(null);

  // Smooth & sharp cursor-following spotlight effect
  useEffect(() => {
    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Easing LERP (0.08 untuk pergerakan yang lebih responsif dan sigap)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (mouseGlowRef.current) {
        // Offset 175px (setengah dari lebar 350px) agar kursor pas di tengah spotlight
        mouseGlowRef.current.style.transform = `translate3d(${currentX - 175}px, ${currentY - 175}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#050507]">
      {/* 1. Sharp & Focused Interactive Cursor Spotlight */}
      <div
        ref={mouseGlowRef}
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.25] blur-[35px] will-change-transform pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(139, 92, 246, 0.3) 40%, rgba(99, 102, 241, 0.1) 65%, transparent 80%)',
          top: 0,
          left: 0,
        }}
      />

      {/* 2. Top-Left Primary Violet Glow (Background) */}
      <div
        className="absolute -top-[30%] -left-[15%] w-[75vw] h-[75vw] rounded-full opacity-[0.08] blur-[170px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(107, 33, 168, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* 3. Center-Right Deep Indigo Atmosphere (Background) */}
      <div
        className="absolute top-[40%] -right-[20%] w-[65vw] h-[65vw] rounded-full opacity-[0.06] blur-[180px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(67, 56, 202, 0.2) 55%, transparent 80%)',
        }}
      />

      {/* 4. Bottom-Left Soft Lavender Glow (Background) */}
      <div
        className="absolute -bottom-[25%] left-[15%] w-[60vw] h-[60vw] rounded-full opacity-[0.05] blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(76, 29, 149, 0.15) 60%, transparent 80%)',
        }}
      />

      {/* 5. Minimalist Micro-Grid & Vignette */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* 6. Precision Editorial Grain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.028] mix-blend-overlay">
        <filter id="atmosphere-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#atmosphere-grain)" />
      </svg>
    </div>
  );
};