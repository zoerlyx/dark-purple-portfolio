import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, pageKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1], // Custom Power3 Out Easing
        }}
        className="w-full relative z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
