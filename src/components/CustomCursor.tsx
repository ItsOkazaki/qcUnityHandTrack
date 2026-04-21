import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Ultra-responsive springs for elite performance
  const springConfig = { damping: 40, stiffness: 1200 };
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
  // Ultra-fast tail physics
  const springX = useSpring(x, { stiffness: 1500 - index * 200, damping: 60 + index * 10 });
  const springY = useSpring(y, { stiffness: 1500 - index * 200, damping: 60 + index * 10 });

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
