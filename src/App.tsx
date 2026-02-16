import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Progress from './components/Progress';
import ThreeBackground from './components/ThreeBackground';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Progress />
        <Navigation scrolled={scrolled} />
        <Hero />
        <Services />
        <TechStack />
        <Process />
        <CaseStudies />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
