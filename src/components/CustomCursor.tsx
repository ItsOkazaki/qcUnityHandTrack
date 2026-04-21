import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Faster springs for better responsiveness
  const springConfig = { damping: 35, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Reduced tail count and simplified for performance
  const tailCount = 4;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {[...Array(tailCount)].map((_, i) => (
        <TailSegment key={i} index={i} x={cursorX} y={cursorY} />
      ))}
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-purple-400/50 rounded-full mix-blend-difference will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};

const TailSegment = ({ index, x, y }: { index: number; x: any; y: any }) => {
  // Each segment follows the previous with snappy spring physics
  const springX = useSpring(x, { stiffness: 1000 - index * 150, damping: 50 + index * 5 });
  const springY = useSpring(y, { stiffness: 1000 - index * 150, damping: 50 + index * 5 });

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-purple-500/30 rounded-full mix-blend-screen will-change-transform"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        scale: 1 - index * 0.2,
        opacity: 0.6 - index * 0.1,
      }}
    />
  );
};

export default CustomCursor;
