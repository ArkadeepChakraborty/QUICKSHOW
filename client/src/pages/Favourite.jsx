import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurCircle from '../components/BlueCircle';
import Titletwo from '../components/Titletwo';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Favourite = () => {
  const { favoriteMovies } = useAppContext();

  return favoriteMovies.length > 0 ? (
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
        transition={{ duration: 0.5 }}
      >
        <Titletwo text1="Your" text2="Favourite" text3="Movies" />
      </motion.div>

      <motion.div
        className='flex flex-wrap max-sm:justify-center gap-8'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            }
          }
        }}
      >
        {favoriteMovies.map((movie) => (
          <motion.div
            key={movie._id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      className='flex flex-col items-center justify-center h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-3xl font-bold text-center'>No movies Available</h1>
    </motion.div>
  );
};

export default Favourite;
