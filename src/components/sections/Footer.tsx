import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: Github, url: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: socialLinks.email, label: 'Email' },
    { icon: Phone, url: socialLinks.phone, label: 'Phone' }
  ];

  return (
    <footer className="border-t border-white/5 bg-[#030712] py-12 px-4 text-center flex flex-col items-center gap-6">
      
      {/* Small Animated 3D Accent (Rotating Vector Tetrahedron) */}
      <div className="relative w-8 h-8 select-none" aria-hidden="true">
        <svg 
          className="w-full h-full text-cyber-neon-cyan/50 animate-[spin_10s_linear_infinite]" 
          viewBox="0 0 100 100" 
          fill="none"
        >
          <polygon points="50,15 85,80 15,80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="50,15 50,80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <polygon points="50,55 85,80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <polygon points="50,55 15,80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Identity Label */}
      <div className="max-w-2xl font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-cyber-text-secondary leading-loose">
        MANIKANTA NALAM — Computer Science & Engineering — AI & Data Science — Chennai, India
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-text-secondary hover:text-cyber-neon-cyan transition-colors"
              aria-label={link.label}
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>

      {/* copyright */}
      <div className="font-mono text-[9px] text-cyber-text-muted mt-2">
        © 2026 Manikanta Nalam. Built with code, curiosity, and creativity.
      </div>
    </footer>
  );
}
export default Footer;
