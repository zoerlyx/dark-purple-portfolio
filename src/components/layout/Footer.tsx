import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  // Animasi Smooth Scroll Custom via JavaScript (Durasi ~600ms)
  const scrollToTop = () => {
    const startPosition = window.scrollY || document.documentElement.scrollTop;
    if (startPosition === 0) return;

    const duration = 600; // Durasi animasi dalam milidetik
    let startTime: number | null = null;

    // Fungsi Easing (Cubic Ease Out) untuk efek luncuran yang halus
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animationStep = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - easeProgress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animationStep);
      }
    };

    requestAnimationFrame(animationStep);
  };

  const navItems = [
    { label: '01 // HOME', path: '/' },
    { label: '02 // WORK', path: '/work' },
    { label: '03 // ABOUT', path: '/about' },
    { label: '04 // CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    { label: 'EMAIL', href: 'mailto:zurrahmanfardho0@gmail.com' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/fardho-zurrahman-6515553a1/' },
    { label: 'GITHUB', href: 'https://github.com/zoerlyx' },
  ];

  return (
    <footer className="w-full bg-[#030304] border-t border-neutral-800/80 pt-16 pb-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand and Positioning */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-display font-extrabold text-2xl text-white tracking-tight mb-3 flex items-center gap-2"> 
                <span>FARDHO Z.</span>
              </div>
              <p className="text-neutral-400 max-w-sm uppercase tracking-wider text-[11px] leading-relaxed">
                Software Engineer &amp; Data Analyst building resilient digital products, data-driven systems, and business intelligence solutions for informed decision-making.
              </p>
            </div>

            {/* Location Line */}
            <div className="mt-8 text-neutral-400 text-[11px] uppercase tracking-widest">
              BASED IN INDONESIA
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-white uppercase tracking-widest text-[11px] font-bold mb-4">
              NAVIGATION
            </div>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(item.path);
                      scrollToTop();
                    }}
                    data-cursor="link"
                    className="hover:text-white transition-colors uppercase tracking-wider text-left focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div className="md:col-span-3">
            <div className="text-white uppercase tracking-widest text-[11px] font-bold mb-4">
              CONTACT
            </div>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 uppercase tracking-widest">
          <div>&copy; {currentYear} FARDHO Z. ALL RIGHTS RESERVED.</div>
          
          <div className="flex items-center gap-4">
            
            {/* Tombol Back to Top dengan Animasi Custom Smooth Scroll */}
            <button
              type="button"
              onClick={scrollToTop}
              data-cursor="link"
              className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors uppercase focus:outline-none cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
