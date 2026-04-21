import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Instagram, Github, Cpu, Hand, Play, X, ChevronLeft, Maximize2 } from 'lucide-react';
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
            transition={{ duration: 0.5 }}
          >
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-[4px] border-b border-purple-500/10 bg-black/20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-bold text-xl tracking-tighter">QUANTUM <span className="text-purple-500">CODE CLUB</span></span>
              </motion.div>
              
              <div className="flex items-center gap-6">
                <a href={instaPersonal} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="Instagram Personal">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={instaClub} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="Quantum Code Club">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </nav>

            <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6"
          >
            <Hand className="w-4 h-4" />
            <span>Revolutionary Hand Tracking Technology</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight"
          >
            Unity Hand <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-purple-600">
              Tracking Game
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            Experience the future of gaming with advanced quantum-inspired hand tracking. 
            No controllers needed. Just you and the machine in perfect harmony.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex flex-col items-center gap-6"
          >
            <button 
              onClick={() => setIsGameOpen(true)}
              className="group relative px-10 py-5 bg-purple-600 rounded-2xl font-bold text-xl overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all hover:translate-y-[-2px] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] active:translate-y-[1px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700" />
              <div className="relative flex items-center gap-3 z-10 text-white">
                <Play className="fill-current w-5 h-5" />
                LAUNCH GAME
              </div>
            </button>
            
            <div className="flex gap-4 items-center text-xs font-mono text-purple-400/60 uppercase tracking-widest">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> ENGINE: READY</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" /> SENSOR: ACTIVE</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" /> LATENCY: 12ms</span>
            </div>
          </motion.div>
        </div>

        {/* Terminal Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0c0a1a] overflow-hidden shadow-2xl"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs font-mono text-gray-500 ml-2">quantum-core-kernel — 80x24</span>
          </div>
          <div className="p-6 font-mono text-sm text-purple-300/80 leading-relaxed text-left">
            <p><span className="text-green-500">➜</span> <span className="text-white">initialize</span> --mode quantum --hand-tracking</p>
            <p className="text-gray-500 mt-2">[INFO] Loading neural hand models...</p>
            <p className="text-gray-500">[INFO] Calibrating depth sensors...</p>
            <p className="text-gray-500">[INFO] Establishing quantum tunnel connection...</p>
            <p className="text-purple-400 mt-2">&gt; Unity Engine HandTracking v2.4.0-stable</p>
            <p className="text-purple-400">&gt; Frame rate: 60fps | Memory: 256MB allocated</p>
            <p className="text-white mt-2 animate-pulse">_ System ready. Awaiting user input.</p>
          </div>
        </motion.div>

        {/* Tutorial Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Master the Controls</h2>
            <p className="text-gray-400">Use your hands to interact with the quantum environment</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { gesture: "👍", action: "JUMP", desc: "Thumbs up to leap" },
              { gesture: "👎", action: "CROUCH", desc: "Thumbs down to duck" },
              { gesture: "✌️", action: "START", desc: "Two fingers for freedom" },
              { gesture: "✋", action: "STOP", desc: "Open palm to pause" },
              { gesture: "➡️", action: "RIGHT", desc: "Hand towards right" },
              { gesture: "⬅️", action: "LEFT", desc: "Hand towards left" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-[#0e0c1a] border border-white/5 hover:border-purple-500/30 transition-all flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-4">{item.gesture}</span>
                <h3 className="text-purple-500 font-bold tracking-widest text-sm mb-1">{item.action}</h3>
                <p className="text-gray-400 text-xs uppercase font-mono">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-purple-500/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left group cursor-default">
            <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest group-hover:text-purple-400 transition-colors">Designed & Developed by</p>
            <h4 className="text-3xl font-black text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-500 transition-all duration-300">
              Rahmani Mostapha
            </h4>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={instaPersonal} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-medium">@itsmeokazaki</span>
              </a>
              <a 
                href={instaClub} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-medium">@qc__club</span>
              </a>
              <a 
                href={githubRepo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
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
            <div className="h-14 bg-[#0c0a1a] border-b border-purple-500/20 flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsGameOpen(false)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">Back to Hub</span>
                </button>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Live Session</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-tighter hidden md:block">
                  QUANTUM <span className="text-purple-500">CODE CLUB</span>
                </span>
                <div className="w-px h-6 bg-white/10 mx-2 hidden md:block" />
                <button 
                  onClick={() => {
                    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
                    if (iframe && iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  }}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsGameOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative bg-black">
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
