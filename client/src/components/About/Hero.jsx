import React from 'react';
import { FaCircle } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className='w-[40%] h-[100%] relative'>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={heroData.text1 + heroData.text2}
          className='absolute text-[black] text-[20px] md:text-[40px] lg:text-[55px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-[10px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className='absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {[0, 1, 2, 3].map((idx) => (
          <FaCircle
            key={idx}
            className={`w-[14px] cursor-pointer transition-all duration-300 ${
              heroCount === idx ? "fill-orange-400 scale-110" : "fill-white opacity-70"
            }`}
            onClick={() => setHeroCount(idx)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;
