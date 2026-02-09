
import React from 'react';
import { motion } from 'framer-motion';

interface FinalScreenProps {
  onNext: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ onNext }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center max-w-sm w-full mx-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500" />
      
      <motion.h2 
        className="text-4xl font-handwriting text-[#4a2c1d] mb-6 mt-2 text-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Happy Chocolate Day! 🍫
      </motion.h2>

      <div className="w-64 h-64 mb-6 rounded-2xl overflow-hidden shadow-inner bg-pink-50 flex items-center justify-center">
        <motion.img 
          src="https://media.tenor.com/sIAClHy5cSEAAAAi/strawberry-shortcake.gif"
          alt="Strawberry Shortcake"
          className="w-full h-full object-contain"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="text-center space-y-3 px-2">
        <p className="text-[#6b4433] font-semibold text-lg">
          You are sweeter than any chocolate in this world.
        </p>
        <p className="text-pink-600 font-bold text-xl italic">
          My Sweetest Addiction. ❤️
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-8 px-8 py-3 bg-[#4a2c1d] text-white rounded-full font-bold shadow-lg hover:bg-[#5c3928] transition-colors"
      >
        Send Love Again
      </motion.button>

      {/* Confetti-like small hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-lg"
          initial={{ 
            x: Math.random() * 300 - 150, 
            y: 400,
            opacity: 1 
          }}
          animate={{ 
            y: -100, 
            opacity: 0,
            rotate: 360
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FinalScreen;
