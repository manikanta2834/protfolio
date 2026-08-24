import { personalInfo } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Play } from 'lucide-react';

export function CurrentlyBuilding() {
  return (
    <section 
      id="currently-building" 
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // RUNNING_SUBPROCESSES
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Thread Subprocesses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {personalInfo.currentlyBuilding.map((item, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
            <div className="glass-card p-4 rounded border border-white/5 hover:border-cyber-neon-cyan/30 transition-all duration-300 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyber-neon-cyan/10 text-cyber-neon-cyan animate-pulse">
                <Play size={10} fill="currentColor" />
              </span>
              
              <div>
                <span className="font-mono text-[8px] text-cyber-text-muted block tracking-widest">
                  THREAD_0{idx + 1}_ACTIVE
                </span>
                <h3 className="font-mono text-[11px] font-bold text-cyber-text-primary uppercase tracking-wide">
                  {item}
                </h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
export default CurrentlyBuilding;
