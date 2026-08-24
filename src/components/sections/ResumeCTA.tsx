import { ScrollReveal } from '../animations/ScrollReveal';
import { FileText, Download } from 'lucide-react';

export function ResumeCTA() {
  return (
    <section 
      id="resume" 
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-neon-purple/5 blur-[130px] pointer-events-none" />

      <ScrollReveal>
        <div className="glass-panel p-8 md:p-12 rounded-lg border border-white/5 hover:border-cyber-neon-purple/20 transition-all duration-300 text-center relative overflow-hidden flex flex-col items-center shadow-2xl">
          {/* Cyberpunk grid bg */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-cyber-neon-purple/10 flex items-center justify-center text-cyber-neon-purple border border-cyber-neon-purple/20 mb-6 z-10">
            <FileText size={22} />
          </div>

          {/* Heading & Paragraph */}
          <h2 className="font-mono text-xl md:text-2xl font-bold text-cyber-text-primary uppercase tracking-wide mb-3 z-10">
            Want the full story?
          </h2>
          
          <p className="text-xs md:text-sm text-cyber-text-secondary leading-relaxed max-w-md mb-8 z-10 font-medium">
            Explore my comprehensive professional history, educational deep-dives, academic research, and complete certifications list in one printable document.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 z-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded text-xs font-mono font-bold tracking-wider text-cyber-bg bg-cyber-neon-purple hover:bg-cyber-neon-purple/90 hover:shadow-glow-purple transition-all duration-300"
            >
              View Resume
              <FileText size={14} />
            </a>

            <a
              href="/resume.pdf"
              download="Manikanta_Nalam_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded text-xs font-mono font-bold tracking-wider text-cyber-neon-cyan border border-cyber-neon-cyan/40 hover:bg-cyber-neon-cyan/10 hover:shadow-glow-cyan transition-all duration-300"
            >
              Download PDF
              <Download size={14} />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
export default ResumeCTA;
