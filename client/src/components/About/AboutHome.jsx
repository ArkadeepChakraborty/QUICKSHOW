import React, { useEffect, useState } from 'react';
import Background from './Background';
import Hero from './Hero';
import Aboutus from './Aboutus';
import Featuredsection from '../Featuredsection';

function AboutHome() {
  let heroData = [
    { text1: "Book Your Seat Instantly", text2: "Experience Movies Your Way" },
    { text1: "Unlock the Magic of Cinema", text2: "Tickets Just a Tap Away!" },
    { text1: "Big Screen, Small Effort", text2: "Book Anytime, Anywhere" },
    { text1: "Catch the Latest Blockbusters", text2: "No More Waiting in Lines!" }

  ];

  let [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className='overflow-x-hidden relative top-[70px]'>
      <div className='w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
        <Background heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]} 
        />
      </div>
    </div>
    <Aboutus />
    <Featuredsection />
    </div>
  );
}

export default AboutHome;
