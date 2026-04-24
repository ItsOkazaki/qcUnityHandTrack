import { motion } from 'framer-motion';

const PageTransition = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-purple-600 origin-bottom pointer-events-none"
    />
  );
};

export default PageTransition;
