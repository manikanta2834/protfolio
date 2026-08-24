import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/sections/LoadingScreen';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Certifications } from './components/sections/Certifications';
import { Education } from './components/sections/Education';
import { ResumeCTA } from './components/sections/ResumeCTA';
import { CurrentlyBuilding } from './components/sections/CurrentlyBuilding';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { FloatingSocials } from './components/ui/FloatingSocials';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom cyberpunk mouse cursor trailing on desktop */}
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="portfolio-root" className="flex flex-col min-h-screen bg-cyber-bg text-cyber-text-primary overflow-x-hidden selection:bg-cyber-neon-cyan/20">
            {/* Sticky glassmorphism navigation */}
            <Navbar />
            
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Certifications />
              <Education />
              <ResumeCTA />
              <CurrentlyBuilding />
              <Contact />
            </main>
            
            {/* Structured footer with accent */}
            <Footer />
            
            {/* Sidebar socials */}
            <FloatingSocials />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
export default App;
