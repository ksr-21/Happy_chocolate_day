
import React from 'react';
import { motion } from 'framer-motion';

const ShayariScreen: React.FC = () => {
  return (
    <div className="bg-[#fdf8f5] p-6 sm:p-10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col items-center max-w-[92%] sm:max-w-lg w-full mx-auto relative border-4 border-[#e2c7b8] overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-[#4a2c1d]/20 text-2xl sm:text-4xl">✿</div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#4a2c1d]/20 text-2xl sm:text-4xl">✿</div>
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-[#4a2c1d]/20 text-2xl sm:text-4xl">✿</div>
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-[#4a2c1d]/20 text-2xl sm:text-4xl">✿</div>

      <motion.h2 
        className="text-3xl sm:text-4xl font-handwriting text-[#4a2c1d] mb-6 sm:mb-8 text-center border-b-2 border-[#4a2c1d]/10 pb-4 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Happy Chocolate Day
      </motion.h2>

      <motion.div 
        className="text-center space-y-4 sm:space-y-6 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-[#5c3928] text-lg sm:text-2xl font-medium leading-relaxed font-handwriting">
          "Chocolate Se Tumhara Muh Mitha Krunga, Dil Ki Bat Bolkar Iss Riste Me Mithas Launga,"
        </p>
        <p className="text-[#5c3928] text-lg sm:text-2xl font-medium leading-relaxed font-handwriting">
          "Janta Hu Chocolate Ke Shaukin Ho Tum Chalo Mai Tumhare Liye Chocolate Ban Jaunga."
        </p>
      </motion.div>

      <div className="mt-8 sm:mt-12 flex flex-col items-center">
        <motion.div 
          className="text-red-500 text-3xl sm:text-4xl mb-2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-handwriting text-red-600 font-bold text-center"
        >
          I Love You
        </motion.p>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-[#4a2c1d]" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            🍫
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShayariScreen;
