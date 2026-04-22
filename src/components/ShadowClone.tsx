import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X } from 'lucide-react';

interface ShadowCloneProps {
  onClose: () => void;
}

const ShadowClone: React.FC<ShadowCloneProps> = ({ onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isCloning, setIsCloning] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let currentStream: MediaStream | null = null;
    async function setupCamera() {
      // Small timeout to ensure the component is fully mounted
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        currentStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 1280, height: 720 },
          audio: false 
        });
        setStream(currentStream);
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
        setIsActive(true);
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setError("Camera Access Denied or Not Found. Please allow camera permissions to perform Jutsu.");
        setIsActive(true);
      }
    }
    setupCamera();

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const triggerJutsu = () => {
    if (!stream) return;
    setIsCloning(true);
    setTimeout(() => setIsCloning(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4"
    >
      <div className="absolute top-6 right-6 z-[110]">
        <button 
          onClick={() => {
            if (stream) stream.getTracks().forEach(t => t.stop());
            onClose();
          }}
          className="p-4 bg-white/10 hover:bg-red-500/40 text-white rounded-2xl transition-all border border-white/10 backdrop-blur-md"
        >
          <X className="w-8 h-8" />
        </button>
      </div>

      <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_80px_rgba(147,51,234,0.4)] bg-gray-900">
        {!isActive && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-purple-400 bg-black z-20">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="font-mono text-sm uppercase tracking-widest animate-pulse">Initializing Optical Sensors...</p>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-red-400 bg-black z-20 p-8 text-center">
            <X className="w-12 h-12 text-red-500" />
            <p className="font-mono text-sm uppercase tracking-widest">{error}</p>
          </div>
        )}

        {/* Main Video */}
        <video 
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover transition-all duration-700 ${isCloning ? 'brightness-150 contrast-125 scale-105 blur-[2px]' : ''} ${!stream ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Shadow Clones */}
        <AnimatePresence>
          {isCloning && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 0.7, 
                    x: i === 0 ? -300 : i === 1 ? 300 : i === 2 ? -150 : 150, 
                    y: i < 2 ? -80 : 80,
                    scale: 0.9,
                    filter: "hue-rotate(280deg) brightness(1.1) contrast(1.1)"
                  }}
                  exit={{ opacity: 0, scale: 1.2, filter: "blur(40px)" }}
                  transition={{ type: "spring", stiffness: 60, damping: 15, delay: i * 0.1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <video 
                    autoPlay 
                    playsInline 
                    muted 
                    ref={el => { if(el && stream) el.srcObject = stream; }}
                    className="w-full h-full object-cover rounded-3xl opacity-80 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay" />
                </motion.div>
              ))}
              
              {/* Smoke Effect Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5], filter: ["blur(0px)", "blur(20px)", "blur(40px)"] }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-white/20 pointer-events-none z-30"
              />
            </>
          )}
        </AnimatePresence>

        {/* HUD UI */}
        <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none">
          <div className="absolute top-10 left-10 flex flex-col gap-1 text-left">
            <span className="text-white font-mono text-[10px] tracking-widest uppercase opacity-50">Experimental Protocol: 04</span>
            <span className="text-purple-400 font-black text-xl tracking-tighter uppercase">Shadow Clone Replication</span>
          </div>
          
          <div className="absolute bottom-10 left-10 text-right">
             <div className="flex items-center gap-2 justify-end mb-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${stream ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-white font-mono text-[10px] tracking-widest uppercase">
                  {stream ? 'Chakra Level: Optimal' : 'System: Offline'}
                </span>
             </div>
             <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: stream ? "100%" : "0%" }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="h-full bg-purple-500"
                />
             </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6">
        <button
          onClick={triggerJutsu}
          disabled={!stream}
          className={`group relative px-10 py-5 font-black text-xl rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-95 overflow-hidden
            ${stream ? 'bg-white text-black cursor-pointer' : 'bg-gray-800 text-gray-500 cursor-not-allowed shadow-none'}`}
        >
          <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors uppercase tracking-widest">
            <Zap className="w-6 h-6 fill-current" />
            Perform Hand Seal
          </span>
        </button>
        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">Hold to concentrate chakra</p>
      </div>
    </motion.div>
  );
};

export default ShadowClone;
