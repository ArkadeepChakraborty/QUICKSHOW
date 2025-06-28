import React, { useEffect, useState } from 'react';
import Background from './Background';
import Hero from './Hero';
import Aboutus from './Aboutus';
import Featuredsection from '../Featuredsection';
import { motion } from 'framer-motion';

function AboutHome() {
  const heroData = [
    { text1: "Book Your Seat Instantly", text2: "Experience Movies Your Way" },
    { text1: "Unlock the Magic of Cinema", text2: "Tickets Just a Tap Away!" },
    { text1: "Big Screen, Small Effort", text2: "Book Anytime, Anywhere" },
    { text1: "Catch the Latest Blockbusters", text2: "No More Waiting in Lines!" }
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.div
        className='overflow-x-hidden relative top-[70px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className='w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Background heroCount={heroCount} />
          <Hero
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            heroData={heroData[heroCount]}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Aboutus />
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Featuredsection />
      </motion.div>
    </div>
  );
}

export default AboutHome;
