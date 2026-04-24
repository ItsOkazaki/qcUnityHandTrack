import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Instagram, Github, Cpu, Play, X, ChevronLeft, Maximize2, Shield, Eye, EyeOff, ChevronDown, Camera, ArrowRight, Zap, Globe, Brain, Paintbrush, Activity } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import ShadowClone from './components/ShadowClone';
import SystemCheck from './components/SystemCheck';
import AchievementToast from './components/AchievementToast';
import QuantumCore from './components/QuantumCore';
import SplitText from './components/SplitText';
import Magnetic from './components/Magnetic';
import PageTransition from './components/PageTransition';
import ChipBackground from './components/ChipBackground';

const PROJECTS = [
  {
    id: "hand-gesture-gaming",
    title: "Subway Surfers: Budget Edition",
    subtitle: "Active Neural Runner",
    link: "https://chaitanya-chafale.github.io/Hand-Gesture-Gaming/build/index.html",
    icon: <Play className="w-8 h-8" />,
    image: "/runner.jpg",
    description: "The classic runner reimagined for neural input. Low-poly trains, high-poly reflexes. Control your fate with simple hand gestures.",
    hasTutorial: true,
    color: "#a855f7"
  },
  {
    id: "rasengan",
    title: "Rasengan Protocol",
    subtitle: "Kinetic Chakra Matrix",
    link: "https://www.funwithcomputervision.com/rasengan/",
    icon: <Zap className="w-8 h-8" />,
    image: "/rasengan.jpg",
    description: "Channel high-energy quantum particles into your palm. Advanced tracking follows your biological frequency in real-time.",
    color: "#6366f1"
  },
  {
    id: "planet-explorer",
    title: "Cosmic Explorer",
    subtitle: "Spatial Engine V2",
    link: "https://www.funwithcomputervision.com/planet-explorer/",
    icon: <Globe className="w-8 h-8" />,
    image: "/cosmos.jpg",
    description: "Command the solar system. Multi-finger mapping allows for precision celestial navigation through the quantum vacuum.",
    color: "#3b82f6"
  },
  {
    id: "shadow-clone",
    title: "Shadow Clone Protocol",
    subtitle: "Quantum Replication Link",
    link: "custom:shadow-clone",
    icon: <Cpu className="w-8 h-8" />,
    image: "/clones.jpg",
    description: "Biological signature duplication. Initialize the hand seal to manifest your digital counterparts across the field.",
    color: "#ec4899"
  },
  {
    id: "handtrack-js",
    title: "Neural Vision Lab",
    subtitle: "AI Vision Module",
    link: "https://victordibia.github.io/handtrack.js/",
    icon: <Brain className="w-8 h-8" />,
    image: "/neural.jpg",
    description: "High-performance neural network hand detection. Real-time bounding box projection and skeleton mapping.",
    color: "#10b981"
  },
  {
    id: "demo4",
    title: "Neural Paint Lab",
    subtitle: "Creative Input Bridge",
    link: "https://www.funwithcomputervision.com/demo4/",
    icon: <Paintbrush className="w-8 h-8" />,
    image: "/paint.jpg",
    description: "Translate motion into art. A high-precision digital canvas where your movement defines the medium.",
    color: "#f59e0b"
  },
  {
    id: "demo7",
    title: "Kinetic Matrix",
    subtitle: "Optical Flow Array",
    link: "https://www.funwithcomputervision.com/demo7/",
    icon: <Activity className="w-8 h-8" />,
    image: "/matrix.jpg",
    description: "Engage with virtual high-velocity particles. Powered by advanced optical flow tracking algorithms.",
    color: "#ef4444"
  }
];

const ProtocolSlide = ({ project, theme, onLaunch, showTutorial, onToggleTutorial }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-[60vh] flex flex-col lg:flex-row items-center gap-12 py-12 px-10 rounded-[40px] border transition-all duration-700
        ${theme === 'light' ? 'bg-white border-purple-500/10 shadow-xl' : 
          theme === 'stealth' ? 'bg-black border-purple-900/10 shadow-none' : 
          'bg-black/40 border-white/5 shadow-2xl backdrop-blur-sm'}`}
    >
      <div className="flex-1 space-y-6">
         <div className="flex items-center gap-4">
           <div className="p-4 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-500 shadow-inner">
             {project.icon}
           </div>
           <div>
             <p className="text-purple-500 font-mono text-[9px] font-black uppercase tracking-[0.3em] mb-1">{project.subtitle}</p>
             <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-black' : 'text-white'}`}>{project.title}</h2>
           </div>
         </div>
         
         <p className={`text-lg leading-relaxed max-w-lg font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
           {project.description}
         </p>

         <div className="flex flex-wrap gap-4 pt-2">
           <Magnetic>
             <button 
               onClick={onLaunch}
               className="group px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-xs tracking-widest transition-all flex items-center gap-3 shadow-lg active:scale-95"
             >
               INITIALIZE
               <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
             </button>
           </Magnetic>
           
           {project.hasTutorial && (
             <Magnetic>
               <button 
                 onClick={onToggleTutorial}
                 className={`px-7 py-3.5 rounded-xl border font-bold text-xs tracking-widest transition-all
                   ${theme === 'light' ? 'border-purple-200 text-purple-600 hover:bg-purple-50' : 'border-white/10 text-white hover:bg-white/5'}`}
               >
                 {showTutorial ? 'CLOSE DATA' : 'GESTURES'}
               </button>
             </Magnetic>
           )}
         </div>

         <AnimatePresence>
           {showTutorial && (
             <motion.div 
               initial={{ height: 0, opacity: 0, y: 10 }}
               animate={{ height: 'auto', opacity: 1, y: 0 }}
               exit={{ height: 0, opacity: 0, y: 10 }}
               className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-2"
             >
               {[{l:"JUMP", i:"👍"},{l:"DUCK", i:"👎"},{l:"START", i:"✌️"},{l:"STOP", i:"✋"},{l:"LEFT", i:"⬅️"},{l:"RIGHT", i:"➡️"}].map((g, idx)=>(
                 <div key={idx} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-black/60 border border-white/5">
                   <span className="text-xl">{g.i}</span>
                   <span className="text-[7px] font-bold text-purple-400 uppercase tracking-tighter">{g.l}</span>
                 </div>
               ))}
             </motion.div>
           )}
         </AnimatePresence>
      </div>

      <div className="flex-1 w-full lg:w-auto relative group h-[250px] lg:h-[300px]">
         <div className={`relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center`}>
           <motion.img 
             src={project.image} 
             alt={project.title}
             className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
           />
           <div className="relative z-10 p-8 rounded-full bg-black/80 border border-white/20 group-hover:scale-105 transition-transform duration-1000 shadow-2xl">
             <div className="text-purple-500">
               {project.icon}
             </div>
           </div>
         </div>
      </div>
    </motion.section>
  );
};

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showShadowClone, setShowShadowClone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'stealth'>('dark');
  const [showSubwayTutorial, setShowSubwayTutorial] = useState(false);
  const [achievement, setAchievement] = useState<{title: string, desc: string} | null>(null);
  const [showSystemCheck, setShowSystemCheck] = useState(true);
  const [isWiping, setIsWiping] = useState(false);
  
  const activeProject = PROJECTS.find(p => p.id === activeProjectId);
  const githubRepo = "https://github.com/ItsOkazaki";
  const linktree = "https://linktr.ee/Quantum_Code_Club?utm_source=ig&utm_medium=social&utm_content=link_in_bio";
  const instaClub = "https://www.instagram.com/qc__club/?hl=en";

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const triggerAchievement = (title: string, desc: string) => {
    setAchievement({ title, desc });
  };

  const handleLaunch = (project: any) => {
    setIsWiping(true);
    setTimeout(() => {
        if (project.link === "custom:shadow-clone") {
          setShowShadowClone(true);
          triggerAchievement("Shadow Clone Jutsu", "Quantum Replication Active");
        } else {
          setIsLoading(true);
          setActiveProjectId(project.id);
          if (project.id === 'hand-gesture-gaming') {
            triggerAchievement("Quantum Pilot", "Survived Budget Subway Surfers");
          }
        }
        setIsWiping(false);
    }, 500);
  };

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('stealth');
    else setTheme('dark');
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-1000 
      ${theme === 'light' ? 'bg-[#f8f7ff] text-[#05040a]' : theme === 'stealth' ? 'bg-[#020105] text-purple-900/50' : 'bg-[#05040a] text-white'}`}>
      
      <ChipBackground />
      <PageTransition isVisible={isWiping} />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-[200]" style={{ scaleX }} />

      <CustomCursor />
      
      <AnimatePresence mode="popLayout">
        {achievement && (
          <AchievementToast 
            key={achievement.title}
            achievement={achievement} 
            onDismiss={() => setAchievement(null)} 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showSystemCheck && (
          <SystemCheck 
            onInit={() => triggerAchievement("Neural Link", "Camera Interface Online")} 
            onClose={() => setShowSystemCheck(false)}
          />
        )}
      </AnimatePresence>

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
            transition={{ duration: 0.2 }}
          >
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 px-6 py-3 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-500
              ${theme === 'light' ? 'bg-white/70 border-purple-500/10 shadow-sm' : 'bg-black/40 border-purple-500/10'}`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent" />
                <span className={`font-black text-xl tracking-tighter uppercase font-mono ${theme === 'light' ? 'text-black' : 'text-white'}`}>QUANTUM <span className="text-purple-600 italic">CODE</span></span>
              </div>
              
              <div className="flex items-center gap-3 md:gap-5">
                <button 
                  onClick={() => setShowSystemCheck(!showSystemCheck)}
                  className={`p-2 rounded-xl border transition-all ${showSystemCheck ? 'bg-purple-600 text-white border-purple-500' : 'bg-white/5 border-white/10 text-gray-400'}`}
                >
                  <Camera className="w-4 h-4" />
                </button>
                <button 
                  onClick={cycleTheme}
                  className={`px-4 py-1.5 rounded-xl border transition-all flex items-center gap-3 text-[9px] font-black uppercase tracking-widest
                    ${theme === 'stealth' ? 'bg-purple-500/20 border-purple-500/50 text-purple-400' : 'bg-white/5 border-white/10 text-gray-400 hover:text-purple-500'}`}
                >
                  {theme === 'light' ? <Shield className="w-3.5 h-3.5" /> : theme === 'dark' ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span className="hidden lg:inline font-mono">{theme}</span>
                </button>
                <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />
                <Magnetic>
                    <a href={linktree} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all font-black text-[10px] text-white shadow-lg font-mono">
                      LINKTREE
                    </a>
                </Magnetic>
              </div>
            </nav>

            <main className="relative pt-20 px-6 max-w-7xl mx-auto">
              {/* Hero Section */}
              <div className="min-h-[90vh] flex flex-col items-center justify-center text-center relative">
                <div className="mb-[-60px] mt-[-100px] w-full max-w-[600px] h-[350px]">
                   <QuantumCore />
                </div>

                <div className="relative z-10 mb-6">
                  <SplitText 
                    text="HAND TRACKING" 
                    className={`text-6xl md:text-[8rem] font-black tracking-tight leading-[0.8]
                      ${theme === 'light' ? 'text-black' : 'text-white'}`} 
                  />
                  <motion.h1 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className={`text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8]
                      ${theme === 'light' ? 'text-purple-600' : 
                        theme === 'stealth' ? 'text-purple-900/40' : 
                        'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-purple-800'}`}
                  >
                    MULTIVERSE
                  </motion.h1>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-bold tracking-tight ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}
                >
                  Engineered by <span className={`text-purple-500`}>Rahmani Mostapha</span>. 
                  Digital evolution, controlled by biological motion.
                </motion.p>
                
                <div className="flex flex-col items-center gap-3 animate-bounce">
                  <span className="text-[9px] font-mono text-purple-500 uppercase tracking-[0.5em] font-black">Scroll Protocol</span>
                  <ChevronDown className="w-5 h-5 text-purple-500" />
                </div>
              </div>

              {/* Protocol Slideshow */}
              <div className="space-y-[15vh] pb-[20vh]">
                {PROJECTS.map((project) => (
                  <ProtocolSlide 
                    key={project.id} 
                    project={project} 
                    theme={theme}
                    onLaunch={() => handleLaunch(project)}
                    showTutorial={project.id === 'hand-gesture-gaming' && showSubwayTutorial}
                    onToggleTutorial={() => setShowSubwayTutorial(!showSubwayTutorial)}
                  />
                ))}
              </div>

              {/* Terminal Section */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mt-32 w-full max-w-4xl mx-auto rounded-[2.5rem] border overflow-hidden shadow-2xl transition-colors duration-1000 
                  ${theme === 'light' ? 'bg-white border-purple-100' : 'bg-[#0c0a1a] border-white/5'}`}
              >
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest ml-3 font-black">core-system.v8</span>
                </div>
                <div className={`p-8 font-mono text-sm leading-relaxed text-left transition-colors duration-1000 
                  ${theme === 'light' ? 'text-gray-500' : 'text-purple-300/80'}`}>
                  <p><span className="text-green-500">okazaki@quantum-hub:~$</span> ./sync_all.sh</p>
                  <p className="text-gray-500 mt-1">&gt; Neural sensors synchronized. Chakra flow optimal.</p>
                  <p className={`mt-4 font-black text-xl ${theme === 'light' ? 'text-purple-600' : 'text-white'}`}>&gt; HUB STATUS: 100% OPERATIONAL</p>
                  <p className="text-purple-400 mt-1 animate-pulse">&gt; Waiting for pilot input...</p>
                </div>
              </motion.div>
            </main>

            {/* Footer */}
            <footer className={`mt-40 border-t py-24 px-10 transition-colors duration-1000 
              ${theme === 'light' ? 'bg-white border-purple-100' : 'bg-black/40 border-white/5 backdrop-blur-3xl'}`}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="text-center md:text-left group cursor-default">
                  <p className="text-purple-500 text-xs font-mono mb-2 uppercase tracking-[0.5em] font-black text-center md:text-left">Project Alpha</p>
                  <h4 className={`text-5xl md:text-7xl font-black tracking-tighter group-hover:text-purple-500 transition-colors duration-700 
                    ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    Mostapha
                  </h4>
                  <div className="w-20 h-1 bg-purple-600 mt-6 group-hover:w-full transition-all duration-1000" />
                </div>

                <div className="flex flex-col items-center md:items-end gap-10">
                  <div className="flex flex-wrap justify-center gap-6">
                    <Magnetic>
                        <a href={instaClub} target="_blank" rel="noopener noreferrer" className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all block">
                          <Instagram className="w-6 h-6 text-purple-500" />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all block">
                          <Github className="w-6 h-6 text-purple-500" />
                        </a>
                    </Magnetic>
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
            className="fixed inset-0 z-[120] bg-black flex flex-col"
          >
            <div className="h-16 bg-[#0c0a1a] border-b border-purple-500/20 flex items-center justify-between px-10 shrink-0">
              <div className="flex items-center gap-8">
                <button 
                  onClick={() => { setActiveProjectId(null); setIsLoading(false); }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group px-6 py-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-black tracking-widest uppercase text-xs">Terminate Protocol</span>
                </button>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse" />
                  <span className="text-xs font-mono font-black text-white uppercase tracking-[0.3em]">{activeProject?.title} Protocol</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button onClick={() => {
                  const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
                  if (iframe?.requestFullscreen) iframe.requestFullscreen();
                }} className="p-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/10">
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button onClick={() => { setActiveProjectId(null); setIsLoading(false); }} className="p-4 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-2xl transition-all border border-transparent hover:border-red-500/20">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative bg-[#05040a] overflow-hidden">
              <AnimatePresence>
                {isLoading && (
                  <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-10 bg-black flex flex-col items-center justify-center gap-8">
                    <div className="w-24 h-24 border-b-4 border-l-4 border-purple-500 rounded-full animate-spin" />
                    <p className="font-mono text-xs text-purple-400 animate-pulse uppercase tracking-[0.5em]">Synchronizing Neural Data...</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <iframe id="game-iframe" src={activeProject?.link} onLoad={() => setIsLoading(false)} className="w-full h-full border-0" allow="camera; microphone; fullscreen; display-capture; autoplay" title={activeProject?.title} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
