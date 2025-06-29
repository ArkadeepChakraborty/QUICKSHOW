import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import { PlayCircleIcon } from 'lucide-react';
import BlurCircle from './BlueCircle';
import { motion } from 'motion/react';

// Convert YouTube video link to embed format
const getYouTubeEmbedURL = (youtubeUrl) => {
  const videoId = youtubeUrl.split('v=')[1];
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
};

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <motion.div 
    initial= {{y: 40, opacity:0}}
    animate= {{y:0, opacity:1}}
    transition={{duration: 1, ease: "easeOut"}}
    className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto text-center">Trailers</p>

      
      <motion.div 
      initial= {{y: 20, opacity:0}}
      whileInView= {{y:0, opacity:1}}
      transition={{duration: 1, delay: 0.5}}
    className="relative mt-6 flex justify-center">
        <BlurCircle top="-100px" right="-100px" />
        <iframe
          width="960"
          height="540"
          src={getYouTubeEmbedURL(currentTrailer.videoUrl)}
          title="YouTube Trailer"
          className="rounded-lg shadow-lg max-w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>


      <motion.div 
      initial= {{y: 100, opacity:0}}
      whileInView= {{y:0, opacity:1}}
      transition={{duration: 1, delay: 0.5}}
    className="group grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-6xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <motion.div
          initial= {{opacity:0, scale: 0.95}}
          whileInView= {{opacity:1, scale: 1}}
          transition={{duration: 0.4, ease: "easeOut"}}
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition duration-300 group-hover:opacity-50 hover:opacity-100 hover:-translate-y-1 ${
              currentTrailer.videoUrl === trailer.videoUrl ? 'ring-2 ring-primary' : ''
            }`}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-40 object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 md:w-10 md:h-10 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrailersSection;
