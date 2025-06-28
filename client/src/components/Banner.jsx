import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'; // Ensure you have a relevant image at assets.banner_movie_image

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-12 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-gray-800 mt-[70px]'
    >
      
      <div className='text-white max-w-xl'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4'>
          Book Your <span className="text-primary">Movie</span> Tickets Instantly
        </h1>
        <p className='text-gray-300 text-lg mb-6'>
          Enjoy hassle-free movie ticket booking with real-time seat selection, exclusive discounts, and blazing-fast checkout.
        </p>
        {/* <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px #ff004f' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='px-6 py-3 bg-[#ff004f] hover:bg-[#e60045] transition text-white font-semibold rounded-lg shadow-md'
          onClick={() => window.scrollTo(0, 600)} // Example scroll
        >
          Book Now
        </motion.button> */}
      </div>

      
      <motion.img
        src="/Pop1.png" // Replace with your movie-themed image path
        alt="Movie Banner"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='w-full max-w-sm rounded-xl shadow-lg'
      />
    </motion.div>
  );
};

export default Banner;
