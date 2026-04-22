import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Instagram, Github, Cpu, Play, X, ChevronLeft, Maximize2, Terminal, Shield, Eye, EyeOff, ChevronDown, ChevronUp } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import QuantumBackground from './components/QuantumBackground';
import ShadowClone from './components/ShadowClone';
import Leaderboard from './components/Leaderboard';
import SystemCheck from './components/SystemCheck';
import AchievementToast from './components/AchievementToast';

const PROJECTS = [
  {
    id: "hand-gesture-gaming",
    title: "Subway Surfers: Budget Edition",
    subtitle: "Protocol 01",
    link: "https://chaitanya-chafale.github.io/Hand-Gesture-Gaming/build/index.html",
    icon: "🎮",
    description: "It's like the real thing, but your GPU might actually survive this one. Use your hands to not die while dodging trains in low-poly glory.",
    hasTutorial: true
  },
  {
    id: "rasengan",
    title: "Rasengan Protocol",
    subtitle: "Chakra Protocol 02",
    link: "https://www.funwithcomputervision.com/rasengan/",
    icon: "🌀",
    description: "Concentrate chakra in your palm. High-energy particle effects locked to your biological movement."
  },
  {
    id: "planet-explorer",
    title: "Cosmic Explorer",
    subtitle: "Navigation Protocol 03",
    link: "https://www.funwithcomputervision.com/planet-explorer/",
    icon: "🌍",
    description: "Navigate the solar system. Zoom and rotate celestial bodies using multi-finger gesture mapping."
  },
  {
    id: "shadow-clone",
    title: "Shadow Clone Protocol",
    subtitle: "Quantum Replication 04",
    link: "custom:shadow-clone",
    icon: "👥",
    description: "Quantum duplication of your biological signature. Perform the hand seal and witness your digital clones manifest in real-time."
  },
  {
    id: "handtrack-js",
    title: "Neural Vision Lab",
    subtitle: "Detection Protocol 05",
    link: "https://victordibia.github.io/handtrack.js/",
    icon: "👁️",
    description: "Real-time hand detection using high-performance neural networks and bounding box projection."
  },
  {
    id: "demo4",
    title: "Neural Paint Lab",
    subtitle: "Creative Protocol 06",
    link: "https://www.funwithcomputervision.com/demo4/",
    icon: "🖌️",
    description: "A high-precision canvas where your fingers become the brush. Uses neural networks to track motion paths in 3D space."
  },
  {
    id: "demo7",
    title: "Kinetic Matrix",
    subtitle: "Optical Flow 07",
    link: "https://www.funwithcomputervision.com/demo7/",
    icon: "⚛️",
    description: "Interact with high-speed virtual particles using advanced optical flow tracking. Feel the digital physics through your camera."
  }
];

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showShadowClone, setShowShadowClone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'stealth'>('dark');
  const [showSubwayTutorial, setShowSubwayTutorial] = useState(false);
  const [achievement, setAchievement] = useState<{title: string, desc: string} | null>(null);
  
  const activeProject = PROJECTS.find(p => p.id === activeProjectId);
  const instaPersonal = "https://www.instagram.com/itsmeokazaki/?hl=en";
  const instaClub = "https://www.instagram.com/qc__club/?hl=en";
  const githubRepo = "https://github.com/ItsOkazaki";
  const linktree = "https://linktr.ee/Quantum_Code_Club?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  const triggerAchievement = (title: string, desc: string) => {
    setAchievement({ title, desc });
    setTimeout(() => setAchievement(null), 5000);
  };

  const handleLaunch = (project: any) => {
    if (project.id === 'hand-gesture-gaming') {
      triggerAchievement("Quantum Pilot", "Survived Budget Subway Surfers");
    }

    if (project.link === "custom:shadow-clone") {
      setShowShadowClone(true);
      triggerAchievement("Shadow Clone Jutsu", "Quantum Replication Active");
    } else {
      setIsLoading(true);
      setActiveProjectId(project.id);
      setTimeout(() => setIsLoading(false), 3000);
    }
  };

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('stealth');
    else setTheme('dark');
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-1000 
      ${theme === 'light' ? 'bg-[#f8f7ff] text-[#05040a]' : theme === 'stealth' ? 'bg-[#020105] text-purple-900/50' : 'bg-[#05040a] text-white'}`}>
      <CustomCursor />
      <AchievementToast achievement={achievement} onDismiss={() => setAchievement(null)} />
      <SystemCheck onInit={() => triggerAchievement("Neural Link", "Camera Interface Online")} />
      
      {!activeProjectId && !showShadowClone && <QuantumBackground intensity={theme === 'stealth' ? 0.2 : theme === 'light' ? 0.5 : 1} color={theme === 'light' ? '#6b21a8' : '#a855f7'} />}

      <AnimatePresence>
        {showShadowClone && <ShadowClone onClose={() => setShowShadowClone(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!activeProjectId ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-500
              ${theme === 'light' ? 'bg-white/70 border-purple-500/10' : 'bg-black/40 border-purple-500/10'}`}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className={`font-bold text-xl tracking-tighter uppercase ${theme === 'light' ? 'text-black' : 'text-white'}`}>Quantum <span className="text-purple-500">Code Club</span></span>
              </motion.div>
              
              <div className="flex items-center gap-4 md:gap-6">
                <button 
                  onClick={cycleTheme}
                  className={`p-2 rounded-xl border transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-wider
                    ${theme === 'stealth' ? 'bg-purple-500/20 border-purple-500/50 text-purple-400' : 'bg-white/5 border-white/10 text-gray-400 hover:text-purple-500'}`}
                  title="Cycle Appearance"
                >
                  {theme === 'light' && <Shield className="w-4 h-4" />}
                  {theme === 'dark' && <EyeOff className="w-4 h-4" />}
                  {theme === 'stealth' && <Eye className="w-4 h-4" />}
                  <span className="hidden sm:inline">{theme} mode</span>
                </button>
                <a href={linktree} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all font-bold text-xs text-white" title="Linktree">
                  <Terminal className="w-4 h-4" />
                  LINKTREE
                </a>
                <a href={githubRepo} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-400 transition-colors ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={instaClub} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-400 transition-colors ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} title="Quantum Code Club">
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
                  <Shield className="w-4 h-4" />
                  <span className="font-mono tracking-wider uppercase">Encrypted Multi-Protocol Hub</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none"
                >
                  Hand Tracking <br />
                  <span className={`bg-clip-text text-transparent transition-all duration-1000 
                    ${theme === 'light' ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-900' : 
                      theme === 'stealth' ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-black' : 
                      'bg-gradient-to-r from-white via-purple-300 to-purple-600'}`}>
                    Multiverse
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`text-lg md:text-xl max-w-2xl mb-12 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
                >
                  Developed by <span className={`font-bold ${theme === 'light' ? 'text-purple-600' : 'text-white'}`}>Rahmani Mostapha</span>. 
                  Control the digital stream with your bare hands.
                </motion.p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {PROJECTS.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`group relative p-8 rounded-3xl transition-all flex flex-col overflow-hidden border 
                      ${theme === 'light' ? 'bg-white border-purple-500/10 shadow-xl shadow-purple-500/5' : 
                        theme === 'stealth' ? 'bg-black border-purple-900/20' : 
                        'bg-white/[0.02] border-white/5 hover:border-purple-500/40'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-5xl">{project.icon}</span>
                      {project.id === 'hand-gesture-gaming' && (
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowSubwayTutorial(!showSubwayTutorial);
                          }}
                          className={`relative z-[40] px-4 py-2 rounded-xl border transition-all flex items-center gap-2 font-mono text-[10px] font-black tracking-widest
                            ${showSubwayTutorial ? 'bg-white text-purple-600 border-white' : 'bg-purple-600/20 text-purple-400 border-purple-500/30 hover:bg-purple-600 hover:text-white'}`}
                        >
                          {showSubwayTutorial ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          {showSubwayTutorial ? 'HIDE' : 'CONTROLS'}
                        </button>
                      )}
                    </div>
                    <h3 className={`text-2xl font-black mb-1 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{project.title}</h3>
                    <p className="text-purple-500/70 text-xs font-mono font-bold uppercase mb-4 tracking-widest">{project.subtitle}</p>
                    <p className={`text-sm leading-relaxed mb-8 flex-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{project.description}</p>
                    
                    {/* Expandable Tutorial for Subway Surfers */}
                    <AnimatePresence>
                      {project.id === 'hand-gesture-gaming' && showSubwayTutorial && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mb-6"
                        >
                          <div className={`grid grid-cols-3 gap-2 p-3 rounded-2xl border ${theme === 'light' ? 'bg-purple-50 border-purple-100' : 'bg-black/60 border-white/5'}`}>
                            {[
                              { label: "JUMP", icon: "👍" },
                              { label: "CROUCH", icon: "👎" },
                              { label: "START", icon: "✌️" },
                              { label: "STOP", icon: "✋" },
                              { label: "LEFT", icon: "⬅️" },
                              { label: "RIGHT", icon: "➡️" },
                            ].map((g, idx) => (
                              <div key={idx} className={`flex flex-col items-center gap-1 p-2 rounded-xl border ${theme === 'light' ? 'bg-white border-purple-200' : 'bg-white/5 border-white/5'}`}>
                                <span className="text-lg">{g.icon}</span>
                                <span className={`text-[8px] font-black uppercase ${theme === 'light' ? 'text-purple-900' : 'text-white'}`}>{g.label}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                      onClick={() => handleLaunch(project)}
                      className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 relative z-10 pointer-events-auto 
                        ${theme === 'light' ? 'bg-purple-600 text-white hover:bg-purple-700' : 
                          theme === 'stealth' ? 'bg-purple-900/20 hover:bg-purple-600 text-purple-400 hover:text-white' : 
                          'bg-white/5 group-hover:bg-purple-600 group-hover:text-white text-white'}`}
                    >
                      <Play className="w-4 h-4 fill-current" />
                      INITIALIZE PROTOCOL
                    </button>
                    
                    {project.id === 'hand-gesture-gaming' && (
                      <div className="mt-4">
                        <Leaderboard minimal={true} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Terminal Section */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mt-32 w-full max-w-4xl mx-auto rounded-xl border overflow-hidden shadow-2xl transition-colors duration-1000 
                  ${theme === 'light' ? 'bg-white border-purple-100' : 
                    theme === 'stealth' ? 'bg-black border-purple-900/30' : 
                    'bg-[#0c0a1a] border-white/10'}`}
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">quantum-kernel.sys</span>
                  </div>
                </div>
                <div className={`p-8 font-mono text-sm leading-relaxed text-left transition-colors duration-1000 
                  ${theme === 'light' ? 'text-gray-500' : 
                    theme === 'stealth' ? 'text-purple-900/80' : 
                    'text-purple-300/80'}`}>
                  <p><span className="text-green-500">okazaki@quantum-hub:~$</span> ./multiverse_init.sh</p>
                  <p className="text-gray-500 mt-2">&gt; [0.002s] Scanning parallel dimensions...</p>
                  <p className="text-gray-500">&gt; [0.045s] Syncing Neural Hand Tracking nodes...</p>
                  <p className="text-gray-500">&gt; [0.120s] Initializing Jutsu Chakra flow...</p>
                  <p className={`mt-4 font-bold ${theme === 'light' ? 'text-purple-600' : 'text-white'}`}>&gt; QUANTUM HUB: ONLINE</p>
                  <p className="text-purple-400">&gt; Accessing Multiverse Protcols. Ready for initialization.</p>
                  <p className={`${theme === 'light' ? 'text-black' : 'text-white'} mt-4 animate-pulse`}>▋</p>
                </div>
              </motion.div>
            </main>

            {/* Footer */}
            <footer className={`mt-32 border-t py-20 px-6 transition-colors duration-1000 
              ${theme === 'light' ? 'bg-white border-purple-100' : 'bg-black/40 border-white/5 backdrop-blur-sm'}`}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left group cursor-default">
                  <p className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-[0.3em]">Developed by</p>
                  <h4 className={`text-4xl font-black tracking-tighter group-hover:text-purple-500 transition-colors duration-500 
                    ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    Rahmani Mostapha
                  </h4>
                  <div className="w-12 h-1 bg-purple-600 mt-4 group-hover:w-full transition-all duration-700" />
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href={instaPersonal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all">
                      <Instagram className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-bold">@itsmeokazaki</span>
                    </a>
                    <a href={instaClub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all">
                      <Instagram className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-bold">@qc__club</span>
                    </a>
                    <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all">
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
            key="game-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="h-16 bg-[#0c0a1a] border-b border-purple-500/20 flex items-center justify-between px-8 shrink-0">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => { setActiveProjectId(null); setIsLoading(false); }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-xl hover:bg-white/5"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold tracking-tight uppercase text-xs">Exit Protocol</span>
                </button>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">{activeProject?.title} Linked</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => {
                    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
                    if (iframe && iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    } else if (iframe && (iframe as any).webkitRequestFullscreen) {
                      (iframe as any).webkitRequestFullscreen();
                    }
                  }}
                  className="p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => { setActiveProjectId(null); setIsLoading(false); }}
                  className="p-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all"
                  title="Terminate Session"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative bg-[#05040a] overflow-hidden">
              <AnimatePresence>
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 bg-black flex flex-col items-center justify-center gap-6"
                  >
                    <div className="w-20 h-20 border-t-2 border-r-2 border-purple-500 rounded-full animate-spin" />
                    <p className="font-mono text-sm text-purple-400 animate-pulse uppercase tracking-[0.3em]">Establishing Quantum Link...</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <iframe 
                id="game-iframe"
                src={activeProject?.link}
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-0"
                allow="camera; microphone; fullscreen; display-capture; autoplay"
                title={activeProject?.title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
