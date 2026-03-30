import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useTime } from 'framer-motion';

const CentipedeBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Tie path length and opacity to scroll progress
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.1, 0.2, 0.2, 0.1]);

  // Use time for the high-frequency wiggle
  const time = useTime();
  const wiggle = useTransform(time, (t) => Math.sin(t / 100) * 2);

  const segments = useMemo(() => Array.from({ length: 150 }), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -2 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 10000"
        preserveAspectRatio="none"
        className="opacity-20"
        style={{ willChange: 'transform' }}
      >
        <motion.g style={{ opacity }}>
          {/* Main Body Spine */}
          <motion.path
            d="M 50 0 
               C 80 500, 20 1500, 50 2000 
               S 80 3500, 50 4000 
               S 20 5500, 50 6000 
               S 80 7500, 50 8000 
               S 20 9500, 50 10000"
            fill="none"
            stroke="#ff0000"
            strokeWidth="0.5"
            style={{ pathLength }}
            className="drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
          />
          
          {/* Head */}
          <motion.g 
            style={{ x: wiggle }}
            transform="translate(50, 50)"
          >
            <ellipse cx="0" cy="0" rx="8" ry="10" fill="none" stroke="#ff0000" strokeWidth="1" />
            <path d="M -4 -8 Q -8 -16 -12 -10" fill="none" stroke="#ff0000" strokeWidth="0.5" />
            <path d="M 4 -8 Q 8 -16 12 -10" fill="none" stroke="#ff0000" strokeWidth="0.5" />
            <circle cx="-3" cy="-2" r="1" fill="#ff0000" />
            <circle cx="3" cy="-2" r="1" fill="#ff0000" />
          </motion.g>

          {/* Body Segments and Legs */}
          {segments.map((_, i) => {
            const t = i / 150;
            const y = t * 10000;
            const xBase = 50 + Math.sin(t * Math.PI * 6) * 20;
            
            return (
              <Segment key={i} xBase={xBase} y={y} index={i} wiggle={wiggle} />
            );
          })}

          {/* Tail */}
          <g transform="translate(50, 9950)">
            <path d="M 0 0 L -6 40 L 0 35 L 6 40 Z" fill="none" stroke="#ff0000" strokeWidth="1" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

interface SegmentProps {
  xBase: number;
  y: number;
  index: number;
  wiggle: any;
}

const Segment: React.FC<SegmentProps> = ({ xBase, y, index, wiggle }) => {
  // Each segment twitches slightly differently based on its index
  const segmentWiggle = useTransform(wiggle, (v: number) => v * Math.sin(index * 0.5));
  
  return (
    <motion.g 
      style={{ x: xBase, y }}
    >
      <ellipse
        cx="0"
        cy="0"
        rx="5"
        ry="4"
        fill="none"
        stroke="#ff0000"
        strokeWidth="0.4"
      />
      
      {/* Left Leg */}
      <motion.path
        d="M -5 0 Q -15 -8 -20 10"
        fill="none"
        stroke="#ff0000"
        strokeWidth="0.2"
        style={{ x: segmentWiggle }}
      />
      
      {/* Right Leg */}
      <motion.path
        d="M 5 0 Q 15 -8 20 10"
        fill="none"
        stroke="#ff0000"
        strokeWidth="0.2"
        style={{ x: segmentWiggle }}
      />
    </motion.g>
  );
};

export default CentipedeBackground;
