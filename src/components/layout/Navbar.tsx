import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ref untuk animasi GSAP pada garis aktif
  const navRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animation Logic untuk sliding underline
  useEffect(() => {
    if (!navRef.current || !lineRef.current) return;

    const updateLinePosition = () => {
      const activeTab = navRef.current?.querySelector<HTMLButtonElement>('[data-active="true"]');

      if (activeTab && lineRef.current) {
        gsap.to(lineRef.current, {
          x: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
      } else if (lineRef.current) {
        gsap.to(lineRef.current, {
          opacity: 0,
          duration: 0.2,
        });
      }
    };

    // Minta frame animasi agar kalkulasi offsetWidth presisi setelah DOM merender layout
    const timer = requestAnimationFrame(updateLinePosition);
    return () => cancelAnimationFrame(timer);
  }, [currentPath]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'WORK', path: '/work' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  }; 

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050507]/85 backdrop-blur-md border-b border-neutral-800/60 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Modern Monogram Logo */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="group flex items-center gap-4 cursor-pointer text-left focus:outline-none select-none"
          data-cursor="link"
        >
          {/* SVG Monogram Icon (Inisial F) */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900/80 border border-neutral-700/50 group-hover:border-purple-500/70 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] pointer-events-none">
            <svg
              className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20V4H18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12H14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="17" cy="12" r="1.5" className="fill-purple-400" />
            </svg>
          </div>

          {/* Teks Brand & Dot Animasi */}
          <div className="flex flex-col pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-lg md:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors duration-200">
                FARDHO Z.
              </span>

            </div>
            
            <span className="font-mono text-[10px] text-neutral-400 font-medium tracking-widest uppercase -mt-1">
              PORTFOLIO / 2026
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div ref={navRef} className="relative flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-neutral-400">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  type="button"
                  data-active={isActive}
                  onClick={() => handleLinkClick(link.path)}
                  data-cursor="link"
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'hover:text-neutral-200'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}

            {/* Garis Ungu Meluncur (GSAP Controlled) */}
            <span
              ref={lineRef}
              className="absolute -bottom-1 left-0 h-[2px] bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7] pointer-events-none opacity-0"
            />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050507]/98 border-b border-neutral-800 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5 font-mono text-sm uppercase tracking-widest text-neutral-400">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left py-2 flex items-center justify-between ${
                    isActive ? 'text-white font-bold' : 'text-neutral-400'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_6px_#a855f7]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};