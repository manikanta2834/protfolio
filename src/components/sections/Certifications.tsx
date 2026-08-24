import { certificationsData } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Award, ShieldCheck, Cpu } from 'lucide-react';

export function Certifications() {
  return (
    <section 
      id="certifications" 
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-neon-purple/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // CREDENTIALS_STORE
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, idx) => {
          // Highlight government or google certs with distinct icon colors
          const isSecurity = cert.title.toLowerCase().includes('security') || cert.issuer.toLowerCase().includes('isea') || cert.issuer.toLowerCase().includes('meity');
          const isAI = cert.title.toLowerCase().includes('ai') || cert.title.toLowerCase().includes('generative');
          
          return (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <div className="glass-card p-5 rounded border border-white/5 hover:border-cyber-neon-cyan/30 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      isSecurity 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : isAI 
                          ? 'bg-cyber-neon-purple/10 text-cyber-neon-purple border border-cyber-neon-purple/20' 
                          : 'bg-cyber-neon-cyan/10 text-cyber-neon-cyan border border-cyber-neon-cyan/20'
                    }`}>
                      {isSecurity ? <ShieldCheck size={14} /> : isAI ? <Cpu size={14} /> : <Award size={14} />}
                    </span>
                    
                    {cert.period && (
                      <span className="text-[8px] font-mono text-cyber-text-muted border border-white/5 px-2 py-0.5 rounded">
                        {cert.period}
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-mono text-xs font-bold text-cyber-text-primary uppercase tracking-wide leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-[10px] font-mono text-cyber-text-secondary mt-1 uppercase tracking-wider">
                    {cert.issuer}
                  </div>
                  
                  {/* Cert ID if exists */}
                  {cert.id && (
                    <div className="text-[8px] font-mono text-cyber-neon-cyan mt-1 bg-cyber-neon-cyan/10 border border-cyber-neon-cyan/20 px-2 py-0.5 rounded w-fit select-all">
                      ID: {cert.id}
                    </div>
                  )}
                </div>

                {/* Topics Covered */}
                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[8px] font-mono text-cyber-text-muted block uppercase tracking-wider mb-1.5">
                    Topics Covered
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.topics.map((topic) => (
                      <span 
                        key={topic} 
                        className="px-2 py-0.5 rounded-[3px] bg-white/[0.02] border border-white/5 text-[9px] font-mono text-cyber-text-secondary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
export default Certifications;
