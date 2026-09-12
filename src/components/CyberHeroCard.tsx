import React from 'react';

export default function CyberHeroCard({
  roles = ['PORTFOLIO'],
  locationId = 'ID-2026',
  statusText = 'ONLINE',
}) {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col justify-center relative z-10 px-6 md:px-12 pt-32 py-6">
      {/* Outer Glass Frame Wrapper */}
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Soft Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-indigo-900/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

        {/* Outer Container */}
        <div className="relative rounded-1xl bg-neutral-950/85 border border-purple-900/40 backdrop-blur-2xl p-5 sm:p-7 lg:p-16 shadow-[0_0_50px_rgba(147,51,234,0.15)] overflow-hidden transition-all duration-500 hover:border-purple-500/50 group">
          
          {/* ========================================================================
              MULTI-GLITCH LINE CYBERPUNK BACKGROUND
              ======================================================================== */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-slate-950/90 font-mono">
            {/* 1. Dynamic Neon Glow Orbs */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] animate-pulse-glow" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[90px] animate-pulse-glow [animation-delay:1s]" />

            {/* 2. Base Grid Mesh */}
            <div 
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `linear-gradient(to right, #06b6d4 1.5px, transparent 1.5px), linear-gradient(to bottom, #a855f7 1.5px, transparent 1.5px)`,
                backgroundSize: '64px 64px',
              }}
            />

            {/* 3. MULTI GLITCH LINES */}
            <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee] animate-glitch-h1 z-10" />
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent shadow-[0_0_8px_#e879f9] animate-glitch-h2 z-10 [animation-delay:0.2s]" />
            <div className="absolute inset-y-0 w-[1.5px] bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_10px_#67e8f9] animate-glitch-v1 z-10" />
            <div className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_8px_#a855f7] animate-glitch-v2 z-10 [animation-delay:0.4s]" />

            {/* 4. CRT Scanlines Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[length:100%_4px] opacity-60" />

            {/* 5. Vignette Border */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.8)_100%)]" />
          </div>

          {/* Neon Borders */}
          <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/70 z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500/70 z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500/70 z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/70 z-10 pointer-events-none" />

          {/* Header Status */}
          <div className="absolute top-3 right-5 flex items-center gap-3 pointer-events-none select-none font-mono text-[9px] tracking-widest text-neutral-500 z-10">
            <span className="flex items-center gap-1.5 text-cyan-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              {statusText}
            </span>
            <span className="text-neutral-700">//</span>
            <span>LOC // {locationId}</span>
          </div>

          {/* Inner Content Wrapper */}
          <div className="relative w-full flex flex-col items-center justify-center py-6 select-none z-10 gap-3">
            
            {/* Typography Background */}
            <div className="relative z-10 flex flex-col justify-center items-center pointer-events-none text-center select-none overflow-hidden">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className={`relative animate-static-glitch ${
                    idx === 0 
                      ? '' 
                      : idx === 1 
                      ? '[animation-delay:0.2s] mt-2 sm:mt-3 md:mt-4' 
                      : '[animation-delay:0.4s] mt-2 sm:mt-3 md:mt-4'
                  }`}
                >
                  {/* Base Text Layer */}
                  <h1 className="font-display font-black tracking-wider uppercase leading-none whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/80">
                    {role}
                  </h1>

                  {/* Cyberpunk RGB Sliced Overlay Layer */}
                  <h1
                    aria-hidden="true"
                    className={`absolute inset-0 font-display font-black tracking-wider uppercase leading-none animate-static-pixel pointer-events-none whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-400 select-none ${
                      idx === 1 ? '[animation-delay:0.25s]' : idx === 2 ? '[animation-delay:0.5s]' : ''
                    }`}
                    style={{
                      textShadow: '-2px 0 #00f0ff, 2px 0 #ff0055',
                    }}
                  >
                    {role}
                  </h1>
                </div>
              ))}
            </div>

            {/* Subtitle Animasi Ketikan Putih Solid (CMD Style - In-Flow Layout) */}
            <div className="relative z-20 flex items-center justify-center font-mono text-xs sm:text-sm text-white tracking-widest uppercase mt-2">
              <span className="text-white font-bold mr-2 select-none opacity-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                &gt;
              </span>
              
              <div className="inline-flex items-center max-w-fit">
                <span className="animate-typewriter-text text-white font-mono font-medium opacity-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                  fardho z. // id-2026
                </span>
                <span className="animate-cursor-cmd text-white font-bold ml-1 opacity-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                  |
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}