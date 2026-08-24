import { useState } from 'react';
import { Project } from '../../types';
import { projectsData } from '../../data/portfolioData';
import { ProjectCard3D } from '../three/ProjectCard3D';
import { ScrollReveal } from '../animations/ScrollReveal';
import { X, Calendar, Code, ShieldAlert, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Generate unique abstract geometric visuals for each card
  const renderAbstractVisual = (id: string) => {
    switch (id) {
      case 'website-monitoring':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 to-[#030712] flex items-center justify-center opacity-70 overflow-hidden select-none">
            <div className="absolute w-24 h-24 rounded-full border border-cyber-neon-cyan/25 animate-pulse" />
            <div className="absolute w-16 h-16 rounded-full border border-cyber-neon-cyan/40" />
            <div className="absolute w-8 h-8 rounded-full bg-cyber-neon-cyan/15 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-neon-cyan animate-ping" />
            </div>
            {/* Grid overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        );
      case 'sbi-redesign':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 to-[#030712] flex items-center justify-center opacity-70 overflow-hidden select-none">
            <div className="absolute w-28 h-14 border border-cyber-neon-purple/20 rotate-12" />
            <div className="absolute w-28 h-14 border border-cyber-neon-purple/25 -rotate-12" />
            <div className="absolute w-7 h-7 border-2 border-cyber-neon-purple bg-cyber-neon-purple/10" />
          </div>
        );
      case 'tech-stack-advisor':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-[#030712] flex items-center justify-center opacity-70 overflow-hidden select-none">
            <div className="flex gap-2.5 items-end h-16">
              <div className="w-1.5 h-10 bg-cyber-neon-blue/30 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-1.5 h-16 bg-cyber-neon-blue/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
              <div className="w-1.5 h-7 bg-cyber-neon-blue/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        );
      case 'ai-tourist-guide':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-[#030712] flex items-center justify-center opacity-70 overflow-hidden select-none">
            <div className="absolute w-20 h-20 border border-emerald-500/25 rotate-45" />
            <div className="absolute w-20 h-20 border border-emerald-500/10" />
            <div className="absolute w-12 h-12 rounded-full border border-emerald-500/35 flex items-center justify-center">
              <span className="w-3 h-3 bg-emerald-500/50 rounded-full animate-pulse" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-neon-cyan/5 blur-[140px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // WORK_MODULES
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard3D 
            key={project.id}
            className="glass-card border border-white/5 rounded overflow-hidden flex flex-col h-[280px]"
            onClick={() => setSelectedProject(project)}
          >
            {/* Visual Header */}
            <div className="h-[110px] w-full relative border-b border-white/5 bg-cyber-bg/50">
              {renderAbstractVisual(project.id)}
              
              {/* Badge if exists */}
              {project.badge && (
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] uppercase tracking-wider font-mono px-2 py-0.5 rounded">
                  <Award size={10} />
                  <span>WINNER</span>
                </div>
              )}

              <div className="absolute bottom-3 right-3 text-[9px] font-mono text-cyber-text-muted">
                {project.period}
              </div>
            </div>

            {/* Info Body */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-mono text-xs md:text-sm font-bold text-cyber-text-primary uppercase tracking-wide group-hover:text-cyber-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-[11px] text-cyber-text-secondary line-clamp-2 mt-2 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Stack Preview */}
              <div className="flex flex-wrap gap-1 mt-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 rounded-[3px] border border-white/5 bg-white/5 text-[9px] font-mono text-cyber-text-primary"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[9px] font-mono text-cyber-text-muted px-1.5 self-center">
                    +{project.technologies.length - 4} MORE
                  </span>
                )}
              </div>
            </div>
          </ProjectCard3D>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#030712]/90 backdrop-blur-sm"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl glass-panel p-6 md:p-8 rounded border border-white/10 shadow-2xl z-10 flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-cyber-text-secondary hover:text-cyber-text-primary focus:outline-none p-1"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              {/* Title & Badge */}
              <div>
                <span className="font-mono text-[9px] text-cyber-neon-cyan uppercase tracking-widest block mb-1">
                  PROJECT_REPORT
                </span>
                <h3 className="font-mono text-base md:text-lg font-bold text-cyber-text-primary uppercase tracking-wide">
                  {selectedProject.title}
                </h3>
                
                {selectedProject.badge && (
                  <div className="flex items-center gap-1.5 mt-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded w-fit">
                    <Award size={12} />
                    <span>{selectedProject.badge}</span>
                  </div>
                )}
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-cyber-neon-purple" />
                  <div>
                    <span className="text-[9px] text-cyber-text-muted block uppercase">Timeline</span>
                    <span className="text-cyber-text-primary font-bold">{selectedProject.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={14} className="text-cyber-neon-cyan" />
                  <div>
                    <span className="text-[9px] text-cyber-text-muted block uppercase">License</span>
                    <span className="text-cyber-text-primary font-bold">Open Source</span>
                  </div>
                </div>
              </div>

              {/* Detail desc */}
              <div>
                <h4 className="font-mono text-[10px] text-cyber-text-muted uppercase tracking-wider mb-2">Description</h4>
                <p className="text-xs md:text-sm text-cyber-text-secondary leading-relaxed font-medium">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech details */}
              <div>
                <h4 className="font-mono text-[10px] text-cyber-text-muted uppercase tracking-wider mb-2.5">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-0.5 rounded-[4px] border border-white/5 bg-white/5 text-[10px] font-mono text-cyber-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notice */}
              <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 p-3 rounded text-[9px] font-mono text-cyber-text-muted">
                <ShieldAlert size={14} className="text-cyber-neon-cyan" />
                <span>VERIFICATION LOG: SANDBOX BUILT OR OFFLINE ONLY. NO LIVE LINKS.</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
export default Projects;
