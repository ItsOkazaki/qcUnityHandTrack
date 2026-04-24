import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const QuantumCore = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 50);
      mouseY.set((e.clientY / innerHeight - 0.5) * 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full h-full flex items-center justify-center relative pointer-events-none perspective-[1000px]">
      {/* Interactive Chip Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            x: springX,
            y: springY,
            translateX: Math.cos(i) * 150,
            translateY: Math.sin(i) * 150,
          }}
          animate={{
            rotate: 360,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-sm border border-purple-400/50"
        />
      ))}

      {/* Main Core */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 40px rgba(168, 85, 247, 0.3)",
            "0 0 80px rgba(168, 85, 247, 0.6)",
            "0 0 40px rgba(168, 85, 247, 0.3)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-32 h-32 bg-gradient-to-br from-white via-purple-500 to-purple-900 rounded-full relative z-10"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
      </motion.div>

      {/* Orbital Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 border border-dashed border-purple-500/20 rounded-full"
      />
    </div>
  );
};

export default QuantumCore;
