
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHOCO_MESSAGES, TOTAL_PIECES } from '../constants';
import { FloatingMessage } from '../types';

interface ChocolateBarProps {
  onComplete: () => void;
}

const ChocolateBar: React.FC<ChocolateBarProps> = ({ onComplete }) => {
  const [eaten, setEaten] = useState<boolean[]>(new Array(TOTAL_PIECES).fill(false));
  const [popups, setPopups] = useState<FloatingMessage[]>([]);
  const [msgIndex, setMsgIndex] = useState(0);

  const handlePieceClick = (index: number, e: React.MouseEvent) => {
    if (eaten[index]) return;

    const newEaten = [...eaten];
    newEaten[index] = true;
    setEaten(newEaten);

    // Create a new floating message
    const newMessage: FloatingMessage = {
      id: Date.now(),
      text: CHOCO_MESSAGES[msgIndex % CHOCO_MESSAGES.length],
      x: e.clientX,
      y: e.clientY
    };
    
    setPopups(prev => [...prev, newMessage]);
    setMsgIndex(prev => prev + 1);

    // Cleanup message after animation
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== newMessage.id));
    }, 2000);
  };

  useEffect(() => {
    if (eaten.every(item => item === true)) {
      setTimeout(onComplete, 1200);
    }
  }, [eaten, onComplete]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="grid grid-cols-3 gap-2 bg-[#4a2c1d] p-4 rounded-xl shadow-inner border-4 border-[#3a2217]">
        {eaten.map((isEaten, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 1, scale: 1 }}
            animate={isEaten ? { opacity: 0, scale: 0, rotate: -10 } : { opacity: 1, scale: 1 }}
            whileHover={!isEaten ? { scale: 1.05, backgroundColor: '#5c3928' } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={(e) => handlePieceClick(idx, e)}
            className={`w-20 h-20 bg-[#4f2f1e] rounded-md shadow-md cursor-pointer flex items-center justify-center border-t-2 border-l-2 border-white/5`}
          >
            {!isEaten && (
              <div className="opacity-20 text-red-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {popups.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: 1, y: -100, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="fixed pointer-events-none z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-semibold shadow-lg text-sm md:text-base text-center"
            style={{ left: p.x - 60, top: p.y - 40 }}
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ChocolateBar;
