import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const ChipBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Layers of movement
  const layer1X = useTransform(smoothX, (x) => x * 1.5);
  const layer1Y = useTransform(smoothY, (y) => y * 1.5);
  const layer2X = useTransform(smoothX, (x) => x * -0.8);
  const layer2Y = useTransform(smoothY, (y) => y * -0.8);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#05040a] pointer-events-none">
      {/* Circuit Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Layer 1: Foreground "Dismantled" pieces */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`l1-${i}`}
            className="absolute bg-purple-500/10 border border-purple-500/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 20 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 90}deg)`,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2: Background "Dismantled" pieces */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={`l2-${i}`}
            className="absolute border-l border-t border-purple-400/5"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Connection Nodes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.05),transparent_70%)]" />
    </div>
  );
};

export default ChipBackground;
