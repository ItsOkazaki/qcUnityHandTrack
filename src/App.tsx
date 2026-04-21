import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Instagram, Github, Cpu, Hand, Play, X, ChevronLeft, Maximize2, Terminal } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import QuantumBackground from './components/QuantumBackground';

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const gameLink = "https://chaitanya-chafale.github.io/Hand-Gesture-Gaming/build/index.html";
  const instaPersonal = "https://www.instagram.com/itsmeokazaki/?hl=en";
  const instaClub = "https://www.instagram.com/qc__club/?hl=en";
  const githubRepo = "https://github.com/ItsOkazaki";

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden bg-[#05040a]">
      <CustomCursor />
      
      {!isGameOpen && <QuantumBackground />}

      <AnimatePresence mode="wait">
        {!isGameOpen ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-purple-500/10 bg-black/40">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tighter">QUANTUM <span className="text-purple-500">CODE CLUB</span></span>
              </motion.div>
              
              <div className="flex items-center gap-6">
                <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={instaClub} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="Quantum Code Club">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </nav>

            <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
              {/* Hero Section */}
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-8"
                >
                  <Hand className="w-4 h-4" />
                  <span className="font-mono tracking-wider uppercase">MediaPipe & Unity</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none"
                >
                  Unity Hand <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-purple-600">
                    Tracking Game
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                >
                  Enter the quantum realm where your hands are the controller. 
                  Real-time gesture recognition powered by advanced neural networks.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-8"
                >
                  <button 
                    onClick={() => setIsGameOpen(true)}
                    className="group relative px-12 py-6 bg-purple-600 rounded-2xl font-black text-2xl overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(147,51,234,0.6)] active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-700" />
                    <div className="relative flex items-center gap-4 z-10 text-white">
                      <Play className="fill-current w-6 h-6" />
                      LAUNCH PORTAL
                    </div>
                  </button>
                  
                  <div className="flex gap-6 items-center text-[10px] font-mono text-purple-400/80 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> WEBCAM READY</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" /> QUANTUM LINK: STABLE</span>
                  </div>
                </motion.div>
              </div>

              {/* Terminal Section */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-32 w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0c0a1a] overflow-hidden shadow-2xl"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">system-initialize.sh</span>
                  </div>
                </div>
                <div className="p-8 font-mono text-sm text-purple-300/80 leading-relaxed text-left">
                  <p><span className="text-green-500">okazaki@quantum-hub:~$</span> ./boot_engine.sh</p>
                  <p className="text-gray-500 mt-2">&gt; [0.002s] Initializing Tensor Processing Unit...</p>
                  <p className="text-gray-500">&gt; [0.045s] Loading MediaPipe Handpose v0.10.0...</p>
                  <p className="text-gray-500">&gt; [0.120s] Mapping 21-point hand coordinate system...</p>
                  <p className="text-white mt-4 font-bold">&gt; SYSTEM STATUS: READY</p>
                  <p className="text-purple-400">&gt; Hand tracking activated. Waiting for user to launch portal...</p>
                  <p className="text-white mt-4 animate-pulse">▋</p>
                </div>
              </motion.div>

              {/* Tutorial Section */}
              <div className="mt-40">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-black mb-4">Master the Gestures</h2>
                  <p className="text-gray-400 text-lg uppercase tracking-widest font-mono text-xs">Neural Input Mappings</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { gesture: "👍", action: "JUMP", desc: "Thumbs Up" },
                    { gesture: "👎", action: "CROUCH", desc: "Thumbs Down" },
                    { gesture: "✌️", action: "START", desc: "Victory / Freedom" },
                    { gesture: "✋", action: "STOP", desc: "Open Palm" },
                    { gesture: "➡️", action: "RIGHT", desc: "Hand to Right" },
                    { gesture: "⬅️", action: "LEFT", desc: "Hand to Left" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                      className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center text-center group"
                    >
                      <span className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.gesture}</span>
                      <h3 className="text-white font-black tracking-widest text-xl mb-2">{item.action}</h3>
                      <p className="text-purple-500/70 text-xs font-mono font-bold uppercase">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="mt-32 border-t border-white/5 py-20 px-6 bg-black/40 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left group cursor-default">
                  <p className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-[0.3em]">Developed by</p>
                  <h4 className="text-4xl font-black text-white tracking-tighter group-hover:text-purple-500 transition-colors duration-500">
                    Rahmani Mostapha
                  </h4>
                  <div className="w-12 h-1 bg-purple-600 mt-4 group-hover:w-full transition-all duration-700" />
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href={instaPersonal} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                    >
                      <Instagram className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-bold">@itsmeokazaki</span>
                    </a>
                    <a 
                      href={instaClub} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                    >
                      <Instagram className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-bold">@qc__club</span>
                    </a>
                    <a 
                      href={githubRepo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                    >
                      <Github className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-bold">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="h-16 bg-[#0c0a1a] border-b border-purple-500/20 flex items-center justify-between px-8 shrink-0">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsGameOpen(false)}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-xl hover:bg-white/5"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold tracking-tight">Return to Hub</span>
                </button>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Neural Link Active</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden lg:flex flex-col items-end mr-4">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Hand Tracking Session</span>
                  <span className="text-xs font-black tracking-tighter text-white uppercase">Quantum Code Club Engine</span>
                </div>
                <button 
                  onClick={() => {
                    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
                    if (iframe && iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  }}
                  className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsGameOpen(false)}
                  className="p-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all"
                  title="Terminate Session"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative bg-[#05040a]">
              {/* Webcam Warning Overlay (Only visible for a few seconds or if camera blocked) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-50 group">
                <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-2">
                  <Hand className="w-3 h-3 text-purple-400" />
                  Ensure webcam is enabled for hand tracking
                </div>
              </div>

              <iframe 
                id="game-iframe"
                src={gameLink}
                className="w-full h-full border-0"
                allow="camera; microphone; fullscreen; display-capture; autoplay"
                title="Unity Hand Tracking Game"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
