import React from 'react';
import { motion } from 'framer-motion';
import BlurCircle from './BlueCircle';

const HeroPart = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden mt-[-20px]">
      <BlurCircle top="100px" left="-120px" size="250px" color="#6c5dd3" />
      <BlurCircle top="40%" left="50%" size="200px" color="#ff7b00" />
      <BlurCircle top="25%" right="12%" size="300px" color="#ffb347" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 text-white"
      >
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-red-500">QuickShow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">
            Book your favorite movies, anytime, anywhere — experience the joy of cinema in a single click.
          </p>
          <a href="#card">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold shadow-lg"
            >
              🎟️ Book Tickets
            </motion.button>
          </a>
        </div>

        {/* Horizontally Rotating Popcorn Image */}
        <motion.img
          src="/Pop2.png"
          alt="Movie Popcorn"
          className="max-h-[400px] object-contain drop-shadow-2xl relative z-10"
          animate={{ rotateY: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
      </motion.div>
    </div>
  );
};

export default HeroPart;









// import React from 'react';
// import { motion } from 'framer-motion';
// import BlurCircle from './BlueCircle';

// const HeroPart = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden mt-[-20px]">
//       <BlurCircle top="100px" left="-120px" size="250px" color="#6c5dd3" />
//       <BlurCircle top="40%" left="50%" size="200px" color="#ff7b00" />
//       <BlurCircle top="25%" right="12%" size="300px" color="#ffb347" />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 text-white"
//       >
//         <div className="text-center md:text-left space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             Welcome to <span className="text-red-500">QuickShow</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-md">
//             Book your favorite movies, anytime, anywhere — experience the joy of cinema in a single click.
//           </p>
//           <a href="#card">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold shadow-lg"
//             >
//               🎟️ Book Tickets
//             </motion.button>
//           </a>
//         </div>

//         {/* Rotating Popcorn Image */}
//         <motion.img
//           src="/Pop2.png"
//           alt="Movie Popcorn"
//           className="max-h-[400px] object-contain drop-shadow-2xl relative z-10"
//           animate={{ rotate: 360 }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 10,
//             ease: "linear",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default HeroPart;







// import React from 'react';
// import { motion } from 'framer-motion';
// import BlurCircle from './BlueCircle';

// const HeroPart = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden mt-[-20px]">
      
//       <BlurCircle top="100px" left="-120px" size="250px" color="#6c5dd3" />
//       <BlurCircle top="40%" left="50%" size="200px" color="#ff7b00" />

//       <BlurCircle top="25%" right="12%" size="300px" color="#ffb347" />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 text-white"
//       >
        
//         <div className="text-center md:text-left space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             Welcome to <span className="text-red-500">QuickShow</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-md">
//             Book your favorite movies, anytime, anywhere — experience the joy of cinema in a single click.
//           </p>
//           <a href='#card'>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold shadow-lg"
//           >
//             🎟️ Book Tickets
//           </motion.button>
//           </a>
//         </div>
        

//         <motion.img
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           src="/Pop2.png"
//           alt="Movie Popcorn"
//           className="max-h-[400px] object-contain drop-shadow-2xl relative z-10"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default HeroPart;