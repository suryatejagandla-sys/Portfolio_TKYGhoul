import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "AI Enthusiast | ML Developer | Problem Solver";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-ghoul-red/20 blur-[80px] rounded-full" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
            SURYA TEJA <br />
            <span className="text-ghoul-red drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">GANDLA</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-8 mb-12"
        >
          <p className="text-xl md:text-2xl font-medium text-gray-400 font-mono">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-6 bg-ghoul-red ml-1 align-middle"
            />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-16 mt-8"
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a
              href="#projects"
              data-cursor-text="Explore"
              className="group relative px-10 py-5 bg-ghoul-red text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,0,60,0.3)] block"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="https://drive.google.com/file/d/1tG5VCk5BiQNP7iIO79gm4HRzPnipgIt4/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              data-cursor-text="Download"
              className="group relative px-10 py-5 border-2 border-ghoul-red text-ghoul-red font-bold rounded-full overflow-hidden transition-all hover:bg-ghoul-red/10 hover:scale-105 active:scale-95 block"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Resume <FileText size={20} />
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-10 text-gray-400">
            <a href="https://github.com/suryatejagandla-sys" target="_blank" rel="noreferrer" className="hover:text-ghoul-red transition-all hover:scale-110 block" data-cursor-text="Github">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/surya-teja-gundla-447024258/" target="_blank" rel="noreferrer" className="hover:text-ghoul-red transition-all hover:scale-110 block" data-cursor-text="Connect">
              <Linkedin size={28} />
            </a>
            <a href="mailto:suryatejagandla@gmail.com" className="hover:text-ghoul-red transition-all hover:scale-110 block" data-cursor-text="Email">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2"
      >
        <div className="w-1 h-2 bg-ghoul-red rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
