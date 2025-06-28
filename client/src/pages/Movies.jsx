import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurCircle from '../components/BlueCircle';
import Titletwo from '../components/Titletwo';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Movies = () => {
  const { shows } = useAppContext();

  return shows.length > 0 ? (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'
    >
      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Titletwo text1='Now' text2='Showing' />
      </motion.div>
      
      <motion.div
        className='flex flex-wrap max-sm:justify-center gap-8'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {shows.map((movie) => (
          <motion.div
            key={movie._id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-col items-center justify-center h-screen'
    >
      <h1 className='text-3xl font-bold text-center'>No movies Available</h1>
    </motion.div>
  );
};

export default Movies;
