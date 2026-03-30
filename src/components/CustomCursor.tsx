import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const rotation = useMotionValue(0);

  const prevX = useRef(0);
  const prevY = useRef(0);
  const currentRotation = useRef(0);

  // Stiffer, more precise springs for position and rotation
  const springConfig = { damping: 25, stiffness: 400, mass: 0.3 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const rotate = useSpring(rotation, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const curX = e.clientX;
      const curY = e.clientY;
      
      mouseX.set(curX);
      mouseY.set(curY);

      const deltaX = curX - prevX.current;
      const deltaY = curY - prevY.current;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Only update rotation if there's enough movement to determine direction accurately
      if (distance > 1.5) {
        let newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        // Handle angle wrapping (shortest path rotation)
        // This prevents the "jacking" when crossing the -180/180 boundary
        const prevAngle = currentRotation.current;
        let diff = newAngle - (prevAngle % 360);
        
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        
        const targetRotation = prevAngle + diff;
        rotation.set(targetRotation);
        currentRotation.current = targetRotation;
      }

      prevX.current = curX;
      prevY.current = curY;

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], [data-cursor]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, rotation, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{
          x,
          y,
          rotate,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Paper Airplane Shape (Pointed Right by Default) */}
        <div className="relative">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-ghoul-red drop-shadow-[0_0_8px_rgba(255,0,60,0.5)]"
          >
            <path 
              d="M2 22L22 12L2 2L5 12L2 22Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
          
          {/* Subtle Glow Trail/Aura */}
          <motion.div 
            className="absolute inset-0 bg-ghoul-red/20 blur-md rounded-full -z-10"
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.6 : 0.3,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
