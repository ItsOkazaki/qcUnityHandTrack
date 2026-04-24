import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!(target.closest('a') || target.closest('button')));
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform'
      }}
    >
      <div className={`w-6 h-6 border border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovering ? 'scale-150 bg-purple-500/20' : 'scale-100'}`} />
      <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default CustomCursor;
