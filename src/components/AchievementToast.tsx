import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';



const AchievementToast = ({ achievement, onDismiss }: { achievement: { title: string; desc: string } | null, onDismiss: () => void }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onDismiss, 500); // Allow exit animation
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onDismiss]);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(onDismiss, 500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          className="fixed top-24 right-8 z-[100] w-80"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-[#0c0a1a] border border-white/20 shadow-2xl">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleDismiss();
                }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all hover:scale-110 shadow-lg z-[101] border-2 border-[#0c0a1a]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-12 h-12 shrink-0 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1 font-bold">Achievement Unlocked</p>
                <h4 className="text-white font-black text-lg leading-tight uppercase tracking-tighter">{achievement?.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{achievement?.desc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementToast;
