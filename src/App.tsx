import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import Background from './components/Background';

// Lazy loaded sections for performance
const About = lazy(() => import('./components/About'));
const ConstellationSkills = lazy(() => import('./components/ConstellationSkills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const FloatingResume = () => (
  <motion.a
    href="https://drive.google.com/file/d/1tG5VCk5BiQNP7iIO79gm4HRzPnipgIt4/view?usp=sharing"
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] p-4 bg-ghoul-red text-white rounded-full shadow-[0_0_20px_rgba(255,0,60,0.5)] hover:shadow-[0_0_30px_rgba(255,0,60,0.8)] transition-all flex items-center justify-center group"
  >
    <FileText size={24} />
    <span className="absolute right-full mr-4 px-3 py-1 bg-ghoul-red text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      View Resume
    </span>
  </motion.a>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-ghoul-black text-white selection:bg-ghoul-red selection:text-white overflow-x-hidden">
      <Background />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-screen bg-ghoul-black flex items-center justify-center text-ghoul-red">Loading...</div>}>
          <About />
          <ConstellationSkills />
          <Projects />
          <Timeline />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <FloatingResume />
    </div>
  );
}
