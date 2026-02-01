import { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisualPreview } from './components/VisualPreview';
import { FeatureGrid } from './components/FeatureGrid';
import { Testimonials } from './components/Testimonials';
import { Personality } from './components/Personality';
import { Calendar } from 'lucide-react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  const { currentThemeConfig } = useTheme();
  const ThemeIcon = currentThemeConfig.icon;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black font-montserrat overflow-x-hidden">
      <Navbar />

      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3 z-0 will-change-transform" />
      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-tertiary/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0 will-change-transform" />

      <main className="relative z-10 w-full">
        <Hero />

        <div id="features">
          <VisualPreview />
          <About />
          <FeatureGrid />
        </div>

        <Testimonials />
        <Personality />
      </main>

      <footer className="py-12 border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <ThemeIcon size={32} className="text-primary" />
          </div>
          <p className="text-text-secondary mb-4">
            "Simplicity is the ultimate sophistication."
          </p>
          <p className="text-sm text-text-secondary/50">
            Created by <span className="text-white">Selton de Souza</span>. All rights reserved &copy; {new Date().getFullYear()}.
          </p>
          <div className="mt-8 flex justify-center gap-6 opacity-50">
            <Calendar size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
