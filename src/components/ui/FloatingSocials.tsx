import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks, personalInfo } from '../../data/portfolioData';

export function FloatingSocials() {
  const socials = [
    { icon: Github, url: socialLinks.github, label: 'GitHub', type: 'link' },
    { icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn', type: 'link' },
    { icon: Mail, url: socialLinks.email, label: 'Email', type: 'link' },
    { icon: Phone, url: socialLinks.phone, label: 'Phone', type: 'link' },
    { icon: MapPin, url: null, label: personalInfo.location, type: 'info' }
  ];

  return (
    <div className="fixed bottom-8 left-6 z-40 hidden md:flex flex-col gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        
        const cardContent = (
          <div 
            className="group relative flex items-center justify-center w-10 h-10 rounded-full glass-card border border-white/5 hover:border-cyber-neon-cyan/50 hover:shadow-glow-cyan text-cyber-text-secondary hover:text-cyber-neon-cyan transition-all duration-300 cursor-pointer"
            role="img"
            aria-label={social.label}
          >
            <Icon size={18} />
            {/* Tooltip */}
            <span className="absolute left-14 scale-0 group-hover:scale-100 transition-all origin-left bg-cyber-bg/95 border border-white/10 text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded text-cyber-text-primary whitespace-nowrap pointer-events-none shadow-xl">
              {social.label}
            </span>
          </div>
        );

        if (social.type === 'link' && social.url) {
          return (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, ease: 'easeOut' }}
              aria-label={social.label}
            >
              {cardContent}
            </motion.a>
          );
        }

        return (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, ease: 'easeOut' }}
          >
            {cardContent}
          </motion.div>
        );
      })}
      <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent self-center mt-2" />
    </div>
  );
}
