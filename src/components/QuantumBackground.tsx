import { motion } from 'framer-motion';

const QuantumBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#06030d]">
      {/* Static Gradient Blobs - Non-animated or slow CSS animated for performance */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-900/15 rounded-full blur-[100px] pointer-events-none" />

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
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Quantum Data Streams - Reduced count and optimized */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`data-${i}`}
          initial={{ x: `${10 + (i * 15)}%`, y: '110%', opacity: 0 }}
          animate={{ 
            y: '-10%', 
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute text-[9px] text-purple-600/50 font-mono pointer-events-none select-none"
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
