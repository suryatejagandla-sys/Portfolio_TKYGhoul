import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2020',
    title: 'SSC',
    description: 'Completed secondary school education.',
    highlight: 'Completed',
  },
  {
    year: '2022',
    title: 'Intermediate',
    description: 'Completed intermediate education.',
    highlight: 'Completed',
  },
  {
    year: '2022–2026',
    title: 'NIT Silchar',
    description: 'Pursuing B.Tech in Electronics and Communication Engineering.',
    highlight: 'Pursuing',
  },
  {
    year: '2022–Present',
    title: 'Leadership & Extracurriculars',
    description: 'Active NCC Cadet, Core Member of AAVEG Dance Club, and Event Head managing various events at NIT Silchar.',
    highlight: 'Leadership',
  },
];

const Timeline = () => {
  return (
    <section id="journey" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-ghoul-red mb-4"
          />
          <h2 className="text-5xl font-bold tracking-tighter text-center">JOURNEY</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5" />
          
          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center justify-between w-full ${
                  idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Content */}
                <div className="w-[45%] glass p-6 rounded-2xl border border-white/5 hover:border-ghoul-red/30 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ghoul-red font-bold text-lg">{item.year}</span>
                    <span className="px-2 py-1 bg-ghoul-red/10 rounded text-[10px] font-bold uppercase tracking-widest text-ghoul-red">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-ghoul-red transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>

                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-ghoul-black border-2 border-ghoul-red rounded-full z-10 shadow-[0_0_10px_rgba(255,0,60,0.8)]" />
                
                {/* Spacer */}
                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
