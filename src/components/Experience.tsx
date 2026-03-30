import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Music, Calendar, Trophy, Award } from 'lucide-react';

const positions = [
  {
    title: 'NCC Cadet',
    description: 'Developed leadership, discipline, and teamwork through rigorous training and community service.',
    icon: <Shield className="text-ghoul-red" />,
    image: 'https://www.shutterstock.com/shutterstock/photos/2256479877/display_1500/stock-photo-closeup-portrait-cadet-of-national-cadet-corps-or-ncc-cadet-from-behind-while-he-is-standing-with-2256479877.jpg',
  },
  {
    title: 'AAVEG Dance Core Member',
    description: 'Led a team of 50+ performers, managing choreography and large-scale stage productions.',
    icon: <Music className="text-ghoul-red" />,
    image: 'https://ih1.redbubble.net/image.6096724134.5980/pp,504x498-pad,600x600,f8f8f8.jpg',
  },
  {
    title: 'Event Head',
    description: 'Managed logistics, budgeting, and coordination for major college events and festivals.',
    icon: <Calendar className="text-ghoul-red" />,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
  },
];

const achievements = [
  {
    title: 'Best Shooter',
    description: 'Awarded Best Shooter at CATC 2023 & 2024 for exceptional marksmanship.',
    icon: <Trophy className="text-ghoul-red" />,
    image: 'https://pbs.twimg.com/media/GkUzgtiaoAMiOie.jpg',
  },
  {
    title: 'NCC B & C Certificate',
    description: 'Successfully earned both B and C certificates, demonstrating high proficiency and dedication.',
    icon: <Award className="text-ghoul-red" />,
    image: 'https://dcac.du.ac.in/assets/img/ncc-img.jpg',
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Positions of Responsibility */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-1 bg-ghoul-red mb-4"
            />
            <h2 className="text-5xl font-bold tracking-tighter text-center">RESPONSIBILITIES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((pos, idx) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="relative overflow-hidden group rounded-3xl h-[400px] flex flex-col justify-end p-8 border border-white/5 hover:border-ghoul-red/30 transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={pos.image} 
                    alt={pos.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ghoul-black via-ghoul-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-ghoul-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm border border-white/5">
                    {pos.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-ghoul-red transition-colors">{pos.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pos.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex flex-col items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-1 bg-ghoul-red mb-4"
            />
            <h2 className="text-5xl font-bold tracking-tighter text-center">ACHIEVEMENTS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden group rounded-3xl h-[300px] flex flex-col justify-end p-8 border border-white/5 hover:border-ghoul-red/30 transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={ach.image} 
                    alt={ach.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ghoul-black via-ghoul-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 bg-ghoul-red/10 rounded-2xl group-hover:rotate-12 transition-transform backdrop-blur-sm border border-white/5">
                    {ach.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-ghoul-red transition-colors">{ach.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
