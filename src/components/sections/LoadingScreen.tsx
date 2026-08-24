import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('BOOTING PORTFOLIO CORE...');

  const textSequence = [
    'INITIALIZING SECURE SOCKETS...',
    'CONNECTING TO NEURAL NETWORKS...',
    'LOADING 3D CONSTELLATIONS...',
    'INJECTING CYBERPUNK STYLES...',
    'SYSTEM READY.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        
        // Random incremental loading steps
        const increment = Math.floor(Math.random() * 20) + 5;
        const next = Math.min(prev + increment, 100);

        // Map text sequence index based on progress
        const textIdx = Math.min(
          Math.floor((next / 100) * textSequence.length),
          textSequence.length - 1
        );
        setLoadingText(textSequence[textIdx]);

        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center font-mono px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="max-w-md w-full">
        {/* System Diagnostics Headers */}
        <div className="flex justify-between text-[11px] text-cyber-neon-cyan mb-2 font-bold tracking-widest">
          <span>MANIKANTA_OS v1.0.0</span>
          <span>{progress}%</span>
        </div>
        
        {/* Cyberspace Progress Bar */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded mb-4">
          <div
            className="h-full bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Diagnostic Logs */}
        <div className="text-[10px] text-cyber-text-secondary uppercase tracking-widest text-left h-4">
          <span className="text-cyber-neon-purple animate-pulse">&gt; </span>
          {loadingText}
        </div>
      </div>
    </motion.div>
  );
}
export default LoadingScreen;
