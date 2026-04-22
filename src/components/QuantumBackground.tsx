import { motion } from 'framer-motion';

const QuantumBackground = ({ intensity = 1, color = '#4c1d95' }: { intensity?: number; color?: string }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-1000" style={{ opacity: intensity }}>
      {/* Static Gradient Blobs - Non-animated or slow CSS animated for performance */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: `${color}20` }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: `${color}15` }} />

      {/* Grid Effect - Use a simple div with CSS */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black, transparent 85%)'
        }}
      />

      {/* Simplified Particles - Use pure CSS for less JS overhead */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse-slow"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Quantum Data Streams - Reduced count and optimized for zero lag */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`data-${i}`}
          initial={{ x: `${15 + (i * 20)}%`, y: '110%', opacity: 0 }}
          animate={{ 
            y: '-10%', 
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          style={{ willChange: 'transform' }}
          className="absolute text-[9px] text-purple-600/30 font-mono pointer-events-none select-none"
        >
          {((i + 1) * 0xABCDEF).toString(16).toUpperCase()}
          <br />
          {i % 2 === 0 ? '1011001' : '0100110'}
        </motion.div>
      ))}
    </div>
  );
};

export default QuantumBackground;
