import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ProjectCard3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ProjectCard3D({ children, className = '', onClick }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { shouldReduceEffects } = usePrefersReducedMotion();

  // Motion values for tracking mouse position relative to card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement to tilt degree values (-10 to 10 degrees)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceEffects || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of the card
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    // Normalize position values to [-0.5, 0.5] range
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (shouldReduceEffects) {
    return (
      <div 
        className={`${className} cursor-pointer transition-all duration-300 hover:scale-[1.01]`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${className} cursor-pointer`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02, shadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}
