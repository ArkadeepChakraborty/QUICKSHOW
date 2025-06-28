import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlueCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';
import { motion } from 'motion/react';

const Featuredsection = () => {
  const navigate = useNavigate();
  const {shows} = useAppContext();

  return (
    <motion.div 
    initial= {{y: 40, opacity:0}}
    animate= {{y:0, opacity:1}}
    transition={{duration: 1, ease: "easeOut"}}
    className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden mt-[-60px]'>
      
      <motion.div 
      initial= {{y: 20, opacity:0}}
      whileInView= {{y:0, opacity:1}}
      transition={{duration: 1, delay: 0.5}}
      className='relative flex items-center justify-between pt-20 pb-20' id='card'>
        <BlurCircle top='0' right='-80px' />
        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>

        <button
          onClick={() => navigate('/movies')}
          className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
        >
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4 h-4' />
        </button>
      </motion.div>

      {/* Movie Cards */}
      <motion.div 
      initial= {{y: 100, opacity:0}}
      whileInView= {{y:0, opacity:1}}
      transition={{duration: 1, delay: 0.5}}
      className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
        {shows.slice(0, 4).map((show) => (
          <motion.div 
          initial= {{opacity:0, scale: 0.95}}
          whileInView= {{opacity:1, scale: 1}}
          transition={{duration: 0.4, ease: "easeOut"}}>
             <MovieCard key={show._id} movie={show} />
          </motion.div>
        ))}
      </motion.div>

      
      <div className='flex justify-center mt-20'>
        <motion.button
        initial={{y: 20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.6}}
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
        >
          Show More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Featuredsection;



// import { ArrowRight } from 'lucide-react';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import BlurCircle from './BlueCircle';
// import { dummyShowsData } from '../assets/assets';

// const Featuredsection = () => {
//   const navigate = useNavigate();

//   return (
//     <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
//       {/* Header Section */}
//       <div className='relative flex items-center justify-between pt-20 pb-10'>
//         <BlurCircle top='0' right='-80px' />
//         <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
//         <button
//           onClick={() => navigate('/movies')}
//           className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
//         >
//           View All
//           <ArrowRight className='group-hover:translate-x-0.5 transition w-4 h-4' />
//         </button>
//       </div>

//       {/* Horizontal Scrollable Movie Cards */}
//       <div className='flex gap-10 overflow-x-auto pb-4 no-scrollbar'>
//         {dummyShowsData.slice(0, 6).map((show, index) => (
//           <div
//             key={show._id}
//             className='relative min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] group'
//           >
//             {/* Large semi-transparent number */}
//             <div className='absolute -left-6 -top-4 text-[120px] font-bold text-blue/5 z-0 select-none'>
//               {index + 1}
//             </div>

//             {/* Movie Poster */}
//             <div className='relative z-10 rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105'>
//               <img src={show.backdrop_path} alt={show.title} className='w-full h-auto object-cover rounded-md' />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Show More Button */}
//       <div className='flex justify-center mt-20'>
//         <button
//           onClick={() => {
//             navigate('/movies');
//             scrollTo(0, 0);
//           }}
//           className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
//         >
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Featuredsection;
