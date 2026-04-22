import { motion } from 'framer-motion';
import { Trophy, Medal, Crown } from 'lucide-react';

import { useState } from 'react';

const Leaderboard = ({ minimal = false }: { minimal?: boolean }) => {
  const [data, setData] = useState<any[]>([]);
  const [newName, setNewName] = useState("");
  const [newScore, setNewScore] = useState("");

  const addScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newScore) return;
    const nextData = [...data, { 
      name: newName, 
      score: parseInt(newScore.replace(/,/g, '')), 
      rank: data.length + 1, 
      tag: "PILOT" 
    }].sort((a, b) => b.score - a.score)
      .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
    
    setData(nextData);
    setNewName("");
    setNewScore("");
  };

  if (minimal) {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-white/5">
        <h4 className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em] mb-4 flex items-center justify-between">
          Live Rankings 
          <span className="animate-pulse">●</span>
        </h4>
        <div className="space-y-2">
          {data.length === 0 ? (
            <p className="text-[9px] text-gray-600 italic">No protocols recorded yet...</p>
          ) : (
            data.slice(0, 3).map((entry) => (
              <div key={entry.name} className="flex justify-between items-center text-[10px]">
                <span className="text-gray-400">{entry.rank}. {entry.name}</span>
                <span className="font-mono text-purple-400">{entry.score.toLocaleString()}</span>
              </div>
            ))
          )}
        </div>
        
        <form onSubmit={addScore} className="mt-4 flex gap-2">
          <input 
            type="text" 
            placeholder="Name" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[9px] outline-none focus:border-purple-500"
          />
          <input 
            type="number" 
            placeholder="Score" 
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
            className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[9px] outline-none focus:border-purple-500"
          />
          <button type="submit" className="p-1 bg-purple-600 rounded-lg text-[9px] font-bold">ADD</button>
        </form>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto mt-32 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-600 rounded-xl shadow-lg shadow-purple-500/20">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight uppercase">Quantum Leaderboard</h2>
            <p className="text-purple-400 font-mono text-xs uppercase tracking-widest mt-1">Top Pilots of the Matrix</p>
          </div>
        </div>
        <div className="hidden md:flex gap-2">
           <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-gray-400">SYNC: REALTIME</div>
        </div>
      </div>

      <div className="space-y-3">
        {data.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl text-gray-600 font-mono text-sm uppercase tracking-widest">
            No live transmissions received...
          </div>
        ) : data.map((entry, idx) => (
          <motion.div
            key={entry.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
              entry.rank === 1 
                ? "bg-purple-600/20 border-purple-500/40 shadow-lg shadow-purple-500/5" 
                : "bg-black/40 border-white/5 hover:border-purple-500/20"
            }`}
          >
            <div className="flex items-center gap-6">
              <div className="w-8 flex justify-center">
                {entry.rank === 1 && <Crown className="w-5 h-5 text-yellow-400" />}
                {entry.rank === 2 && <Medal className="w-5 h-5 text-gray-300" />}
                {entry.rank === 3 && <Medal className="w-5 h-5 text-orange-400" />}
                {entry.rank > 3 && <span className="font-mono text-gray-500 font-bold">{entry.rank}</span>}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg">{entry.name}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    entry.tag === 'DEV' ? 'border-purple-500 text-purple-400 bg-purple-500/10' : 'border-white/10 text-gray-500 bg-white/5'
                  }`}>
                    {entry.tag}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono font-black text-xl text-purple-400 tracking-tighter">{entry.score}</span>
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Quantum Units</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard;
