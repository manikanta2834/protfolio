import { personalInfo } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { MapPin, Sparkles, Shield, Cpu } from 'lucide-react';

export function About() {
  const strengths = [
    { name: "Full-Stack Builder", icon: Cpu, desc: "React, Vue 3, Spring Boot, REST APIs, Java, Python" },
    { name: "Application Security", icon: Shield, desc: "JWT, reCAPTCHA v3, Turnstile, Bootcamps, Bug Bounty" },
    { name: "AI/ML Integration", icon: Sparkles, desc: "Ollama, Spring AI, Scikit-learn, Prompt Engineering" }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyber-neon-purple/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // AUTHOR_PROFILE
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Photo Section */}
        <div className="md:col-span-5 flex justify-center">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative group">
              {/* Corner crosshairs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-neon-cyan pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-neon-cyan pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-neon-cyan pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-neon-cyan pointer-events-none" />
              
              {/* Profile Image Frame */}
              <div className="w-56 h-72 md:w-64 md:h-80 rounded overflow-hidden glass-card p-1.5 border border-white/10 shadow-glow-cyan hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/profile.jpg"
                  alt="Manikanta Nalam Portrait"
                  className="w-full h-full object-cover rounded grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    // Fallback to abstract silhouette if profile image fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&h=500&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-3 right-3 bg-cyber-bg/95 border border-white/5 px-2.5 py-1 rounded text-[9px] font-mono text-cyber-neon-cyan shadow-xl tracking-wider select-none">
                LOC: 13.0827° N, 80.2707° E
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Text Section */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-panel p-5 md:p-6 rounded border border-white/5">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-cyber-neon-cyan mb-3 font-bold">
                SYSTEM SUMMARY
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-cyber-text-secondary font-medium">
                {personalInfo.about}
              </p>
              
              <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-cyber-text-muted">
                <MapPin size={12} className="text-cyber-neon-purple" />
                <span>Base: Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Staggered core focus */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {strengths.map((str, index) => {
                const Icon = str.icon;
                return (
                  <div 
                    key={str.name} 
                    className="glass-card p-4 rounded border border-white/5 hover:border-cyber-neon-purple/40 hover:shadow-glow-purple/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyber-neon-purple/10 flex items-center justify-center text-cyber-neon-purple mb-3">
                      <Icon size={15} />
                    </div>
                    <h4 className="text-[10px] font-bold font-mono text-cyber-text-primary mb-1 uppercase tracking-wider">
                      {str.name}
                    </h4>
                    <p className="text-[9px] text-cyber-text-secondary leading-snug">
                      {str.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
export default About;
