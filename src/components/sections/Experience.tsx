import { experienceData } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section 
      id="experience" 
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative"
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyber-neon-purple/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // CAREER_TIMELINE
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Timeline entries */}
      <div className="relative border-l border-white/5 pl-6 md:pl-8 ml-2 md:ml-4 flex flex-col gap-12">
        {experienceData.map((exp, idx) => (
          <div key={exp.company + idx} className="relative group">
            {/* Timeline node */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-cyber-bg border border-cyber-neon-cyan/50 text-cyber-neon-cyan shadow-glow-cyan/20 group-hover:border-cyber-neon-purple group-hover:text-cyber-neon-purple transition-colors duration-300">
              <Briefcase size={12} />
            </span>

            <ScrollReveal direction="up" delay={idx * 0.1}>
              <div className="glass-panel p-5 md:p-6 rounded border border-white/5 hover:border-cyber-neon-cyan/20 transition-all duration-300 shadow-xl">
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-sm md:text-base font-bold font-mono text-cyber-text-primary uppercase tracking-wide">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono text-cyber-neon-cyan mt-0.5">
                      @{exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-[10px] font-mono text-cyber-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-cyber-neon-purple" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-cyber-neon-purple" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="list-none flex flex-col gap-2.5 mb-6 text-xs text-cyber-text-secondary leading-relaxed font-medium">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 items-start">
                      <span className="text-cyber-neon-cyan mt-1 font-bold">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded-[4px] border border-white/5 bg-white/5 text-[9px] font-mono text-cyber-text-primary uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
