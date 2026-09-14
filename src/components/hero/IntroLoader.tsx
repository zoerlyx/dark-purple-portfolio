import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counterObj = { val: 0 };

      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete: () => {
              onCompleteRef.current();
            },
          });
        },
      });

      timeline
        .to(counterObj, {
          val: 100,
          duration: 2.2,
          ease: 'power3.inOut',
          onUpdate: () => {
            setCount(Math.floor(counterObj.val));
          },
        })
        .to(
          counterRef.current,
          {
            opacity: 0,
            y: -15,
            duration: 0.45,
            ease: 'power2.in',
          },
          '+=0.1'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 h-[100dvh] w-screen z-[10000] bg-[#050507] text-[#f5f5f7] flex items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient Glow */}
      <div 
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-purple-600/15 blur-[80px] sm:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        style={{ opacity: count / 100 }}
      />

      {/* Main Minimalist Container */}
      <div 
        ref={counterRef} 
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
      >
        {/* Counter Number */}
        <div className="flex items-baseline justify-center font-mono text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
          <span>{String(count).padStart(2, '0')}</span>
          <span className="text-purple-400 text-lg sm:text-xl font-light ml-1">
            %
          </span>
        </div>

        {/* Fixed Progress Bar Track & Fill */}
        <div className="w-40 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden relative mx-auto">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-white rounded-full transition-all duration-75 ease-linear"
            style={{ 
              width: `${count}%`,
              minWidth: count > 0 ? '2px' : '0px'
            }}
          />
        </div>
      </div>
    </div>
  );
};