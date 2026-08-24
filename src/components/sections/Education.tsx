import { educationData } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section 
      id="education" 
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyber-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // EDUCATION_PATH
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Stack layout */}
      <div className="flex flex-col gap-6">
        {educationData.map((edu, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
            <div className="glass-panel p-5 md:p-6 rounded border border-white/5 hover:border-cyber-neon-cyan/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
              
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-cyber-neon-cyan/10 text-cyber-neon-cyan border border-cyber-neon-cyan/20 shrink-0">
                  <GraduationCap size={18} />
                </span>
                
                <div>
                  <h3 className="font-mono text-sm md:text-base font-bold text-cyber-text-primary uppercase tracking-wide">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono text-cyber-text-secondary mt-1 tracking-wide">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap md:flex-col gap-3 md:gap-1.5 md:items-end text-[10px] font-mono text-cyber-text-secondary shrink-0 border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-cyber-neon-purple" />
                  <span>{edu.period}</span>
                </div>
                {edu.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-cyber-neon-purple" />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
export default Education;
