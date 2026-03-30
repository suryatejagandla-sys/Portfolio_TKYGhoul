import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-ghoul-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold tracking-tighter">
            <span className="text-ghoul-red">S</span>URYA TEJA
          </h2>
          <p className="text-sm text-gray-500">AI & ML Engineer | ECE Undergraduate</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/suryatejagandla-sys" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-ghoul-red transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/surya-teja-gundla-447024258/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-ghoul-red transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-ghoul-red transition-colors">
            <Facebook size={20} />
          </a>
          <a href="mailto:suryatejagandla@gmail.com" className="text-gray-400 hover:text-ghoul-red transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-gray-500 italic text-center md:text-right max-w-[250px]">
            "I'm not the one who's wrong. What's wrong is... this world!"
          </p>
          <p className="text-xs text-gray-600">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
