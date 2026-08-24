import { achievementsData } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Trophy } from 'lucide-react';

export function Achievements() {
  return (
    <section 
      id="achievements" 
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative"
    >
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyber-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // ACHIEVEMENTS_LOG
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievementsData.map((ach, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
            <div className="glass-card p-5 rounded border border-white/5 hover:border-cyber-neon-cyan/35 hover:shadow-glow-cyan/10 transition-all duration-300 flex items-start gap-4">
              <span className="text-2xl select-none" role="img" aria-label="Achievement icon">
                {ach.emoji}
              </span>
              <div>
                <h3 className="font-mono text-xs font-bold text-cyber-text-primary uppercase tracking-wide leading-snug">
                  {ach.title}
                </h3>
                <p className="text-[10px] text-cyber-text-secondary mt-1 font-medium tracking-wide">
                  {ach.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
export default Achievements;
