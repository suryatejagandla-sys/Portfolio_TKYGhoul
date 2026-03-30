import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-ghoul-red mb-4"
          />
          <h2 className="text-5xl font-bold tracking-tighter text-center">CONTACT</h2>
        </div>

        <div className="flex flex-col gap-16">
          {/* Top Section: Two-column Grid (Three-Part Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-6">
                <a href="mailto:suryatejagandla@gmail.com" className="flex items-center gap-6 group">
                  <div className="p-4 bg-ghoul-red/10 rounded-2xl group-hover:bg-ghoul-red group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-xl font-medium">suryatejagandla@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+917893887245" className="flex items-center gap-6 group">
                  <div className="p-4 bg-ghoul-red/10 rounded-2xl group-hover:bg-ghoul-red group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                    <p className="text-xl font-medium">+91-7893887245</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-ghoul-red/10 rounded-2xl group-hover:bg-ghoul-red group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-xl font-medium">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <a href="https://github.com/suryatejagandla-sys" target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl hover:text-ghoul-red hover:neon-border transition-all">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/surya-teja-gundla-447024258/" target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl hover:text-ghoul-red hover:neon-border transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Kaneki Ken Wallpaper Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.4)] border border-white/10"
            >
              <img
                src="https://wallpapers.com/images/hd/kaneki-phone-mxfwtzvojd6kpbij.jpg" 
                alt="Kaneki Ken"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://w0.peakpx.com/wallpaper/416/595/HD-wallpaper-kaneki-ken-mask-tokyo-ghoul.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ghoul-black/60 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Bottom Section: Full-width Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/5 w-full"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    placeholder="Kaneki Ken"
                    className="w-full bg-ghoul-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-ghoul-red transition-colors text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    placeholder="ghoul@anteiku.com"
                    className="w-full bg-ghoul-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-ghoul-red transition-colors text-white placeholder:text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea
                  rows={6}
                  placeholder="What's 1000 minus 7?"
                  className="w-full bg-ghoul-black/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-ghoul-red transition-colors resize-none text-white placeholder:text-gray-600"
                />
              </div>
              <div className="flex justify-end">
                <button className="px-12 py-4 bg-ghoul-red text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:neon-glow hover:scale-[1.02] active:scale-95 transition-all">
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
