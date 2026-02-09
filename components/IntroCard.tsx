
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroCardProps {
  onUnwrap: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onUnwrap }) => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  const handleUnwrap = () => {
    if (isUnwrapped) return;
    setIsUnwrapped(true);
    // Wait for the opening animation to finish before switching views
    setTimeout(onUnwrap, 800);
  };

  return (
    <div 
      className="relative w-80 h-[480px] bg-[#4a2c1d] rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center border-4 border-[#3a2217] cursor-pointer"
      onClick={handleUnwrap}
    >
      {/* The actual content underneath */}
      <div className="flex flex-col items-center justify-center text-center p-6">
        <div className="text-pink-400 text-6xl mb-4">💝</div>
        <h2 className="text-3xl font-handwriting text-white mb-2">For Someone Special</h2>
        <p className="text-white/60 text-sm">Every piece is a piece of my heart.</p>
      </div>

      {/* Wrapping Paper Layers */}
      <AnimatePresence>
        {!isUnwrapped && (
          <>
            {/* Left Flap */}
            <motion.div 
              className="absolute inset-y-0 left-0 w-1/2 z-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 border-r border-yellow-600/30 shadow-xl origin-left"
              exit={{ 
                x: '-100%', 
                rotateY: -90,
                transition: { duration: 0.8, ease: "easeInOut" } 
              }}
            >
              {/* Texture/Pattern */}
              <div className="w-full h-full opacity-10 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:20px_20px]" />
            </motion.div>

            {/* Right Flap */}
            <motion.div 
              className="absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-300 border-l border-yellow-600/30 shadow-xl origin-right"
              exit={{ 
                x: '100%', 
                rotateY: 90,
                transition: { duration: 0.8, ease: "easeInOut" } 
              }}
            >
               {/* Texture/Pattern */}
               <div className="w-full h-full opacity-10 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:20px_20px]" />
            </motion.div>

            {/* Seal / Label */}
            <motion.div 
              className="absolute z-30 flex flex-col items-center justify-center"
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 bg-[#4a2c1d] rounded-full border-4 border-yellow-600 shadow-2xl flex items-center justify-center flex-col p-2 text-center group-hover:scale-110 transition-transform">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-tighter">Premium</span>
                <span className="text-white font-handwriting text-xl leading-tight">Sweet Surprise</span>
                <div className="mt-1 text-red-500 text-lg">❤️</div>
              </div>
              
              <motion.div 
                className="mt-12 px-6 py-2 bg-white/10 rounded-full border border-white/30 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-md"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Tap to Unwrap
              </motion.div>
            </motion.div>

            {/* Decorative Ribbon (Vertical) */}
            <motion.div 
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-red-600 z-10 shadow-inner"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            />
            
            {/* Shimmer Effect */}
            <motion.div 
              className="absolute inset-0 z-25 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full pointer-events-none"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ skewX: -45 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroCard;
