import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Education', id: 'education' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for nav trigger boundary

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full glass-nav px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300">
      {/* Brand Header */}
      <button 
        className="flex items-center gap-2 cursor-pointer focus:outline-none" 
        onClick={() => handleNavClick('home')}
        aria-label="Scroll to home"
      >
        <Terminal className="text-cyber-neon-cyan" size={18} />
        <span className="font-mono font-bold tracking-widest text-[12px] md:text-sm bg-gradient-to-r from-cyber-text-primary to-cyber-text-secondary bg-clip-text text-transparent">
          MANI
        </span>
      </button>

      {/* Desktop Nav Items */}
      <div className="hidden lg:flex items-center gap-0.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-2.5 py-1.5 rounded text-[11px] font-mono tracking-wider transition-all duration-200 ${
              activeSection === item.id
                ? 'text-cyber-neon-cyan bg-cyber-neon-cyan/10 font-bold glow-text-cyan'
                : 'text-cyber-text-secondary hover:text-cyber-text-primary hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-cyber-text-secondary hover:text-cyber-text-primary focus:outline-none p-1"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel bg-cyber-bg/95 border-b border-white/5 py-4 px-6 flex flex-col gap-1.5 lg:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 px-3 text-left text-xs font-mono tracking-wide rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'text-cyber-neon-cyan bg-cyber-neon-cyan/10 font-bold'
                    : 'text-cyber-text-secondary hover:text-cyber-text-primary hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default Navbar;
