import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { BackgroundAtmosphere } from './components/ui/BackgroundAtmosphere';
import { CustomCursor } from './components/ui/CustomCursor';
import { IntroLoader } from './components/hero/IntroLoader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition';


import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getNextProject,
} from './lib/projects';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // DIUBAH: Selalu set ke false agar IntroLoader dipanggil setiap kali refresh
  const [introCompleted, setIntroCompleted] = useState<boolean>(false);

// 1. Simpan ref instans Lenis agar bisa diakses secara global di dalam komponen
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // -------------------------------------------------------------
    // TAMBAHKAN BAGIAN INI: Matikan Lenis jika dibuka di HP/Touchscreen
    // -------------------------------------------------------------
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      return; // Gunakan scroll bawaan HP agar lancar
    }
    // -------------------------------------------------------------

    // Inisialisasi Lenis dengan opsi yang disempurnakan
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve yang lebih snappy & smooth
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;
    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Listen to browser popstate (forward/back)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      
      // Reset scroll ke atas saat tombol back/forward ditekan
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);

      // Beri jeda mikro 100ms agar AnimatePresence sempat memulai transisi sebelum scroll di-reset
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  };

  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();

  // Dynamic route resolution
  let pageContent: React.ReactNode = null;
  let pageKey = currentPath;

  if (currentPath === '/' || currentPath === '') {
    pageContent = (
      <HomePage
        featuredProjects={featuredProjects}
        onSelectProject={(slug) => navigate(`/projects/${slug}`)}
        onNavigate={navigate}
      />
    );
  } else if (currentPath === '/work') {
    pageContent = (
      <WorkPage
        allProjects={allProjects}
        featuredProjects={featuredProjects}
        onSelectProject={(slug) => navigate(`/projects/${slug}`)}
      />
    );
  } else if (currentPath === '/about') {
    pageContent = <AboutPage />;
  } else if (currentPath === '/contact') {
    pageContent = <ContactPage />;
  } else if (currentPath.startsWith('/projects/')) {
    const slug = currentPath.replace('/projects/', '').split('/')[0];
    const project = getProjectBySlug(slug);

    if (project) {
      const nextProj = getNextProject(slug);
      pageContent = (
        <ProjectDetailPage
          project={project}
          nextProject={nextProj}
          onBack={() => navigate('/work')}
          onSelectProject={(nextSlug) => navigate(`/projects/${nextSlug}`)}
        />
      );
      pageKey = `project-${slug}`;
    } else {
      // 404 state for invalid project slug
      pageContent = (
        <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-36">
          <div className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-4">
            404 // NOT FOUND
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase mb-6">
            CASE STUDY DOES NOT EXIST
          </h1>
          <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest max-w-md mb-8">
            The requested project slug &quot;{slug}&quot; could not be found in the archive index.
          </p>
          <button
            onClick={() => navigate('/work')}
            className="px-6 py-3 rounded bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            RETURN TO PROJECT LIBRARY
          </button>
        </div>
      );
    }
  } else {
    // Generic 404
    pageContent = (
      <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-36">
        <div className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-4">
          404 // ROUTE NOT FOUND
        </div>
        <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase mb-6">
          PAGE NOT FOUND
        </h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
        >
          RETURN TO HOME
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f5f7] relative selection:bg-purple-900/50 selection:text-white">
      {/* Opening 0-100 Loader Sequence */}
      {!introCompleted && (
        <IntroLoader onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Atmospheric Ambient Abstract Purple Gradients */}
      <BackgroundAtmosphere />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Minimal Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
      />

      {/* Main Routed Page Content with Page Transition */}
      <main className="relative z-10">
        <PageTransition pageKey={pageKey}>{pageContent}</PageTransition>
      </main>

      {/* Editorial Minimal Footer - Diberi relative z-10 agar selalu muncul di atas background */}
      <div className="relative z-10">
        <Footer onNavigate={navigate} />
      </div>
    </div>
  );
}