import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, RefreshCw, Move, X } from 'lucide-react';

const SystemCheck = ({ onInit, onClose }: { onInit?: () => void, onClose?: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);

  const startCamera = async () => {
    setIsInitializing(true);
    setError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      onInit?.();
    } catch (err) {
      setError("Webcam Access Denied");
      console.error(err);
    } finally {
      setIsInitializing(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    return () => stopCamera();
  }, [stream]);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.div 
        drag
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileDrag={{ scale: 1.02, zIndex: 100 }}
        className="relative group"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative w-64 rounded-xl border border-white/10 bg-[#0c0a1a] overflow-hidden shadow-2xl">
          {/* Header */}
          <div 
            className="px-4 py-3 border-b border-white/10 bg-white/10 flex items-center justify-between select-none cursor-move hover:bg-white/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Move className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">System Check</span>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${stream ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse' : 'bg-gray-600'}`} />
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                title="Hide Mirror"
              >
                <X className="w-3 h-3 text-white/50 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Viewport */}
          <div className="aspect-video relative bg-black flex items-center justify-center">
            <AnimatePresence mode="wait">
              {stream ? (
                <motion.video
                  key="video"
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-cover grayscale-[0.5] hue-rotate-[280deg] brightness-125 contrast-125"
                />
              ) : (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-3 text-center px-4"
                >
                  <CameraOff className="w-8 h-8 text-white/20" />
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
                    {error || "Camera Interface Offline"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scanning Overlay */}
            {stream && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-[2px] bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] absolute animate-[scan_3s_ease-in-out_infinite]" />
                <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-purple-500/5 transition-all duration-500" />
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="p-3">
            {!stream ? (
              <button 
                onClick={startCamera}
                disabled={isInitializing}
                className="w-full py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                {isInitializing ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Camera className="w-3 h-3" />
                )}
                Initialize Mirror
              </button>
            ) : (
              <button 
                onClick={stopCamera}
                className="w-full py-2 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 text-gray-400 hover:text-red-400"
              >
                <X className="w-3 h-3" />
                Disconnect Stream
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemCheck;
