import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Radio, Mic, Filter, ShieldAlert } from 'lucide-react';

const projects = [
  {
    title: 'Antipodal Vivaldi Antenna',
    description: 'Designed a broadband antenna (6–18 GHz) with high directivity and gain for advanced communication systems.',
    icon: <Radio className="text-ghoul-red" />,
    tech: ['ANSYS HFSS', 'Antenna Design', 'RF Engineering'],
    link: 'https://drive.google.com/file/d/13KxJRJSv2CNp8jz5P1EI6kcHdUf70fnG/view',
    github: null,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    cursorText: 'Explore'
  },
  {
    title: 'Speech Emotion Recognition',
    description: 'ML model for emotion detection from audio signals using CatBoost and Random Forest algorithms.',
    icon: <Mic className="text-ghoul-red" />,
    tech: ['Python', 'Librosa', 'Scikit-learn', 'CatBoost'],
    link: 'https://github.com/suryatejagandla-sys',
    github: 'https://github.com/suryatejagandla-sys',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800',
    cursorText: 'Listen'
  },
  {
    title: 'DSP Analysis Suite',
    description: 'A comprehensive suite for FIR/IIR filter design, FFT-based spectral analysis, and quantization error analysis.',
    icon: <Filter className="text-ghoul-red" />,
    tech: ['MATLAB', 'Signal Processing', 'DSP'],
    link: '#',
    github: 'https://github.com/suryatejagandla-sys',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    cursorText: 'Analyze'
  },
  {
    title: 'SMS Spam Detection',
    description: 'NLP pipeline using TF-IDF and stemming with Naive Bayes, SVM, and XGBoost ensemble techniques.',
    icon: <ShieldAlert className="text-ghoul-red" />,
    tech: ['NLP', 'TF-IDF', 'XGBoost', 'Naive Bayes'],
    link: '#',
    github: 'https://github.com/suryatejagandla-sys',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    cursorText: 'Verify'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-ghoul-red mb-4"
          />
          <h2 className="text-5xl font-bold tracking-tighter text-center">PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              data-cursor="project"
              data-cursor-text={project.cursorText}
              className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-ghoul-red/30 transition-all duration-500 h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ghoul-black to-transparent" />
                <div className="absolute top-6 left-6 p-3 bg-ghoul-red/20 backdrop-blur-md rounded-xl border border-ghoul-red/30 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-ghoul-red transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-ghoul-red transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-ghoul-red transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-ghoul-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
