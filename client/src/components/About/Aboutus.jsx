// import React from 'react';
// import { motion } from 'framer-motion';
// import BlurCircle from '../BlueCircle';

// const Aboutus = () => {
//   return (
//     <motion.div
//       className="relative w-full min-h-screen px-4 py-10 md:py-20 mt-20 bg-transparent overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
    
//       <BlurCircle top="20px" left="-100px" size="220px" color="#6c5dd3" />
//       <BlurCircle bottom="10%" right="-80px" size="200px" color="#6c5dd3" />
//       <BlurCircle top="50%" left="50%" size="180px" color="#00bfff" />
//       <BlurCircle top="60%" left="130px" size="160px" color="#00bfff" />

      
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         About Us
//       </motion.h2>

      
//       <div className="flex flex-col md:flex-row items-center justify-center gap-18 max-w-7xl mt-[-25px] mx-auto">
//         {/* Left: Circular logo with two images */}
//         <motion.div
//           className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[6px] border-blue-600 shadow-2xl flex"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
          
//           <img
//             src="/yellowt.png"
//             alt="Pic1"
//             className="w-1/2 h-full object-cover"
//           />
          
//           <img
//             src="/bluet.png"
//             alt="Pic2"
//             className="w-1/2 h-full object-cover"
//           />
//         </motion.div>

        
//         <motion.div
//           className="max-w-[600px] text-left px-4"
//           initial={{ x: 60, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <h3 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-6">QuickShow</h3>
//           <p className="text-lg md:text-2xl text-white leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean at
//             interdum enim, eget lacinia magna. Pellentesque habitant morbi tristique senectus et
//             netus et malesuada fames ac turpis egestas.
//           </p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Aboutus;




import React from 'react';
import { motion } from 'framer-motion';
import BlurCircle from '../BlueCircle';

const Aboutus = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen px-4 py-10 md:py-20 mt-20 bg-transparent overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BlurCircle top="20px" left="-100px" size="220px" color="#6c5dd3" />
      <BlurCircle bottom="10%" right="-80px" size="200px" color="#6c5dd3" />
      <BlurCircle top="50%" left="50%" size="180px" color="#00bfff" />
      <BlurCircle top="60%" left="130px" size="160px" color="#00bfff" />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        About Us
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-18 max-w-7xl mt-[-25px] mx-auto">
        {/* Left: Rotating Circular Logo */}
        <motion.div
          className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[6px] border-blue-600 shadow-2xl flex"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          <img
            src="/yellowt.png"
            alt="Pic1"
            className="w-1/2 h-full object-cover"
          />
          <img
            src="/bluet.png"
            alt="Pic2"
            className="w-1/2 h-full object-cover"
          />
        </motion.div>

        {/* Right: Description Text */}
        <motion.div
          className="max-w-[600px] text-left px-4"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-6">QuickShow</h3>
          <p className="text-lg md:text-2xl text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean at
            interdum enim, eget lacinia magna. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Aboutus;
