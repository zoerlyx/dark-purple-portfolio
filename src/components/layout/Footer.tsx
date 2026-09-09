import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030304] border-t border-neutral-800/80 pt-16 pb-12 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand and Positioning */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-display font-extrabold text-2xl text-white tracking-tight mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
                <span>KOUSHIK // PORTFOLIO</span>
              </div>
              <p className="text-neutral-400 max-w-sm uppercase tracking-wider text-[11px] leading-relaxed">
                Software Engineer &amp; Data Analyst building resilient digital products, data-driven systems, and telemetry interfaces.
              </p>
            </div>

            <div className="mt-8 text-neutral-400 text-[11px] uppercase tracking-widest">
              BASED IN INDONESIA &bull; REMOTE WORLDWIDE
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-white uppercase tracking-widest text-[11px] font-bold mb-4">
              INDEX
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => {
                    onNavigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  data-cursor="link"
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  01 // HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/work');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  data-cursor="link"
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  02 // WORK &amp; ARCHIVE
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  data-cursor="link"
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  03 // ABOUT &amp; APPROACH
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  data-cursor="link"
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  04 // CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Channels: EMAIL, LINKEDIN, GITHUB only */}
          <div className="md:col-span-3">
            <div className="text-white uppercase tracking-widest text-[11px] font-bold mb-4">
              CHANNELS
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:koushikizurro1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/koushik-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/koushik-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 uppercase tracking-widest">
          <div>&copy; {currentYear} KOUSHIK. ALL RIGHTS RESERVED.</div>
          <div className="text-neutral-400 flex items-center gap-2">
            <span>DARK EDITORIAL SYSTEM</span>
            <span>&bull;</span>
            <span className="text-purple-400/80">TYPESCRIPT + REACT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
