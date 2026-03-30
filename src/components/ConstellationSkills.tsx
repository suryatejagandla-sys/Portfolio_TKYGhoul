import React, { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  label: string;
  category: string;
  color: string;
  radius: number;
  hoverScale: number;
  icon?: string;
}

const categories = [
  { name: 'FRONTEND', color: '#f97316' }, // Orange
  { name: 'BACKEND', color: '#38bdf8' },  // Blue
  { name: 'DATABASE', color: '#4ade80' }, // Green
  { name: 'AI / ML', color: '#c084fc' },  // Purple
  { name: 'LANGUAGES', color: '#fb7185' }, // Pink
  { name: 'TOOLS', color: '#facc15' },    // Yellow
];

const skillsData = [
  // Frontend
  { name: 'React', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Three.js', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
  { name: 'Tailwind', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', category: 'FRONTEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  
  // Backend
  { name: 'Node.js', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'FastAPI', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Django', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Flask', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Socket.io', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  { name: 'GraphQL', category: 'BACKEND', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  
  // Database
  { name: 'MySQL', category: 'DATABASE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', category: 'DATABASE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', category: 'DATABASE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Redis', category: 'DATABASE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  
  // AI / ML
  { name: 'PyTorch', category: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', category: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Python', category: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Pandas', category: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', category: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  
  // Languages
  { name: 'C++', category: 'LANGUAGES', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', category: 'LANGUAGES', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Java', category: 'LANGUAGES', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  
  // Tools
  { name: 'Git', category: 'TOOLS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux', category: 'TOOLS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Docker', category: 'TOOLS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Figma', category: 'TOOLS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const ConstellationSkills = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const hoveredCategoryRef = useRef<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});
  const animationFrameRef = useRef<number>(0);

  // Pre-load images
  useEffect(() => {
    skillsData.forEach(skill => {
      if (skill.icon) {
        const img = new Image();
        img.src = skill.icon;
        imagesRef.current[skill.name] = img;
      }
    });
  }, []);

  const initNodes = (width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Symmetric Circular Layout
    const categoryRadius = Math.min(width, height) * 0.35;
    const nodes: SkillNode[] = [];

    categories.forEach((cat, catIdx) => {
      const catAngle = (catIdx / categories.length) * Math.PI * 2;
      const catCenterX = centerX + Math.cos(catAngle) * categoryRadius;
      const catCenterY = centerY + Math.sin(catAngle) * categoryRadius;

      const catSkills = skillsData.filter(s => s.category === cat.name);
      const skillRadius = 80;

      catSkills.forEach((skill, skillIdx) => {
        const skillAngle = (skillIdx / catSkills.length) * Math.PI * 2;
        const x = catCenterX + Math.cos(skillAngle) * skillRadius;
        const y = catCenterY + Math.sin(skillAngle) * skillRadius;

        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          label: skill.name,
          category: skill.category,
          color: cat.color,
          radius: 6,
          hoverScale: 0,
        });
      });
    });

    nodesRef.current = nodes;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initNodes(width, height);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      
      const mouse = mouseRef.current;
      const hoveredCategory = hoveredCategoryRef.current;
      const connectionDistance = 150;

      // Update nodes
      nodesRef.current.forEach(node => {
        const distToMouse = Math.sqrt(Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2));
        const isHovered = distToMouse < 80 || node.category === hoveredCategory;
        
        // Smooth scaling
        if (isHovered) {
          node.hoverScale += (1 - node.hoverScale) * 0.1;
        } else {
          node.hoverScale += (0 - node.hoverScale) * 0.05;
        }

        // Gentle floating animation
        const time = Date.now() * 0.001;
        const floatX = Math.sin(time + node.baseX) * 5;
        const floatY = Math.cos(time + node.baseY) * 5;
        node.x = node.baseX + floatX;
        node.y = node.baseY + floatY;
      });

      // Draw connections
      ctx.beginPath();
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach(otherNode => {
          const dist = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
          
          if (dist < connectionDistance) {
            const isSameCategory = node.category === otherNode.category;
            const highlight = (node.hoverScale + otherNode.hoverScale) / 2;
            
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            
            if (highlight > 0.1) {
              ctx.strokeStyle = node.color;
              ctx.globalAlpha = 0.1 + highlight * 0.4;
              ctx.lineWidth = 0.5 + highlight;
            } else {
              ctx.strokeStyle = '#ffffff';
              ctx.globalAlpha = isSameCategory ? 0.08 : 0.02;
              ctx.lineWidth = 0.2;
            }
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodesRef.current.forEach(node => {
        const highlight = node.hoverScale;
        
        ctx.save();
        ctx.translate(node.x, node.y);

        // Glow
        if (highlight > 0.01) {
          ctx.beginPath();
          ctx.arc(0, 0, 15 + highlight * 10, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = 0.1 * highlight;
          ctx.fill();
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(0, 0, 10 + highlight * 5, 0, Math.PI * 2);
        ctx.fillStyle = '#111111';
        ctx.strokeStyle = highlight > 0.1 ? node.color : '#333333';
        ctx.globalAlpha = 0.8 + highlight * 0.2;
        ctx.lineWidth = 1 + highlight;
        ctx.fill();
        ctx.stroke();

        // Icon
        const img = imagesRef.current[node.label];
        if (img && img.complete) {
          ctx.globalAlpha = 0.6 + highlight * 0.4;
          const iconSize = 12 + highlight * 4;
          ctx.drawImage(img, -iconSize/2, -iconSize/2, iconSize, iconSize);
        }

        // Label
        ctx.font = `${highlight > 0.5 ? 'bold' : 'normal'} ${10 + highlight * 2}px "Space Grotesk", sans-serif`;
        ctx.fillStyle = highlight > 0.1 ? node.color : '#888888';
        ctx.globalAlpha = 0.6 + highlight * 0.4;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, 0, 25 + highlight * 5);

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []); // Empty dependency array for stable loop

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-ghoul-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-ghoul-red mb-4"
          />
          <h2 className="text-5xl font-bold tracking-tighter text-center uppercase">Skills Constellation</h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-2 cursor-pointer group"
              onMouseEnter={() => {
                hoveredCategoryRef.current = cat.name;
                setActiveCategory(cat.name);
              }}
              onMouseLeave={() => {
                hoveredCategoryRef.current = null;
                setActiveCategory(null);
              }}
            >
              <div 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCategory === cat.name ? 'scale-125' : 'scale-100'}`} 
                style={{ 
                  backgroundColor: cat.color, 
                  boxShadow: activeCategory === cat.name ? `0 0 12px ${cat.color}` : `0 0 4px ${cat.color}` 
                }} 
              />
              <span className={`text-[10px] font-bold tracking-widest transition-colors duration-300 ${activeCategory === cat.name ? 'text-white' : 'text-gray-500'}`}>
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[700px] glass rounded-3xl overflow-hidden border border-white/5 z-10"
          onMouseMove={(e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
              mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
            }
          }}
          onMouseLeave={() => {
            mouseRef.current = { x: -1000, y: -1000 };
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
        </motion.div>
      </div>
    </section>
  );
});

ConstellationSkills.displayName = 'ConstellationSkills';

export default ConstellationSkills;
