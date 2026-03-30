import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image Slot */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 group"
        >
          <div className="absolute -inset-4 bg-ghoul-red/10 blur-2xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 glass p-2">
            <img
              src="https://w0.peakpx.com/wallpaper/342/700/HD-wallpaper-ken-kaneki-anime-ken-kaneki-tokyo-ghoul.jpg"
              alt="Kaneki Ken"
              className="w-full h-full object-cover rounded-xl transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ghoul-black/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Column: About Me Text */}
        <div className="flex flex-col gap-6 order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-1 bg-ghoul-red" />
            <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            I am an <span className="text-ghoul-red font-semibold">AI & ML enthusiast</span> from NIT Silchar (ECE), 
            passionate about building data-driven systems, intelligent models, and exploring the depths of signal processing.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            My technical expertise spans across <span className="text-white font-medium">Deep Learning, Computer Vision, and Digital Signal Processing</span>. 
            I thrive in environments where I can apply mathematical rigor to solve engineering problems, whether it's optimizing 
            neural network architectures or designing efficient communication systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Beyond the screen and circuits, I am a disciplined leader and a creative spirit. As an <span className="text-ghoul-red font-semibold">NCC Cadet</span>, 
            I've honed my resilience and precision, while my involvement in the <span className="text-ghoul-red font-semibold">AAVEG Dance Club</span> 
            allows me to explore the rhythm and expression that balance my analytical side. I believe that the most 
            innovative solutions come from a mind that can navigate both the logical and the artistic.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
