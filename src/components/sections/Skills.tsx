import { skillsData } from '../../data/portfolioData';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SkillsConstellation } from '../three/SkillsConstellation';

export function Skills() {
  // Define styling configuration per category
  const categories = [
    {
      name: 'Programming',
      color: 'text-red-400 border-red-500/20 bg-red-950/10',
      dotColor: 'bg-red-500'
    },
    {
      name: 'Web',
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/10',
      dotColor: 'bg-cyber-neon-cyan'
    },
    {
      name: 'Databases',
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/10',
      dotColor: 'bg-emerald-500'
    },
    {
      name: 'Tools',
      color: 'text-amber-400 border-amber-500/20 bg-amber-950/10',
      dotColor: 'bg-amber-500'
    },
    {
      name: 'Engineering',
      color: 'text-pink-400 border-pink-500/20 bg-pink-950/10',
      dotColor: 'bg-pink-500'
    },
    {
      name: 'AI/ML',
      color: 'text-purple-400 border-purple-500/20 bg-purple-950/10',
      dotColor: 'bg-cyber-neon-purple'
    }
  ];

  // Group skills
  const groupedSkills = categories.map(cat => ({
    ...cat,
    skills: skillsData.filter(s => s.category === cat.name)
  }));

  return (
    <section 
      id="skills" 
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="absolute top-10 right-0 w-80 h-80 bg-cyber-neon-cyan/5 blur-[130px] pointer-events-none" />

      {/* Title */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl md:text-3xl font-mono tracking-widest uppercase text-gradient-cyan-purple font-bold">
            // SKILL_CONSTELLATION
          </h2>
          <div className="h-[1px] w-20 bg-cyber-neon-cyan mt-3" />
        </div>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Flat list group on left */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groupedSkills.map((cat, idx) => (
                <div 
                  key={cat.name} 
                  className={`glass-card p-4 rounded border border-white/5 hover:border-white/10 transition-colors duration-300`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                    <h3 className="font-mono text-[11px] uppercase tracking-widest font-bold text-cyber-text-primary">
                      {cat.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${cat.color}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* 3D WebGL constellation on right (Visible only on desktop) */}
        <div className="lg:col-span-5 hidden lg:block">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-panel rounded border border-white/5 flex flex-col items-center relative">
              <span className="absolute top-3 left-4 font-mono text-[9px] text-cyber-text-muted tracking-widest uppercase select-none">
                3D_MATRIX_VIZ_ACTIVE
              </span>
              <SkillsConstellation />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
export default Skills;
