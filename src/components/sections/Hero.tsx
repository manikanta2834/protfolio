import { ArrowRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { HeroScene } from '../three/HeroScene';
import { motion } from 'framer-motion';

export function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center px-6 md:px-16 overflow-hidden select-none"
    >
      {/* Three.js Interactive Parallax Background */}
      <HeroScene />

      {/* Overlay Typography */}
      <div className="max-w-3xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[10px] md:text-xs text-cyber-neon-cyan uppercase tracking-widest bg-cyber-neon-cyan/10 px-3.5 py-1 rounded-full border border-cyber-neon-cyan/20">
            Vulnerability Analyst & Developer
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl font-black tracking-tight mt-5 font-mono text-cyber-text-primary uppercase"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="text-sm md:text-xl font-mono text-cyber-neon-purple mt-3.5 font-bold leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {personalInfo.tagline}
        </motion.h2>

        <motion.p
          className="text-xs md:text-sm text-cyber-text-secondary mt-5 leading-relaxed max-w-2xl font-sans"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          {personalInfo.subTagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <button
            onClick={() => handleScroll('projects')}
            className="flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-bold tracking-wider text-cyber-bg bg-cyber-neon-cyan hover:bg-cyber-neon-cyan/90 hover:shadow-glow-cyan transition-all duration-300"
          >
            Explore Work
            <ArrowRight size={13} />
          </button>
          
          <button
            onClick={() => handleScroll('contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-bold tracking-wider text-cyber-neon-purple border border-cyber-neon-purple/40 hover:bg-cyber-neon-purple/10 hover:shadow-glow-purple transition-all duration-300"
          >
            Get In Touch
            <MessageSquare size={13} />
          </button>
        </motion.div>
      </div>

      {/* Cyber gradient fade out bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyber-bg to-transparent pointer-events-none" />
    </section>
  );
}
export default Hero;
