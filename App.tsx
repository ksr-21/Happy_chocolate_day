
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroCard from './components/IntroCard';
import ChocolateBar from './components/ChocolateBar';
import FinalScreen from './components/FinalScreen';
import ShayariScreen from './components/ShayariScreen';
import { AppState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('intro');

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#2c1810]">
      <AnimatePresence mode="wait">
        {view === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -100, rotate: -5, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="z-10"
          >
            <IntroCard onUnwrap={() => setView('grid')} />
          </motion.div>
        )}

        {view === 'grid' && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-20 w-full h-full flex items-center justify-center"
          >
            <ChocolateBar onComplete={() => setView('final')} />
          </motion.div>
        )}

        {view === 'final' && (
          <motion.div
            key="final"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="z-30"
          >
            <FinalScreen onNext={() => setView('shayari')} />
          </motion.div>
        )}

        {view === 'shayari' && (
          <motion.div
            key="shayari"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="z-40"
          >
            <ShayariScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative Hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 2}s infinite alternate ease-in-out`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          from { transform: scale(1); opacity: 0.2; }
          to { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default App;
