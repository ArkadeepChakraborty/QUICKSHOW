import React from 'react';

const Aboutus = () => {
  return (
    <div className="w-full min-h-screen px-4 py-10 md:py-20 mt-30.5 bg-transparent">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">About Us</h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-18 max-w-7xl  mt-[-25px] mx-auto">
        {/* Left: Circular logo with two images */}
        <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[6px] border-blue-600 shadow-2xl flex">
          {/* Left Half - Pic1 */}
          <img
            src="/yellowt.png"
            alt="Pic1"
            className="w-1/2 h-full object-cover"
          />
          {/* Right Half - Pic2 */}
          <img
            src="/bluet.png"
            alt="Pic2"
            className="w-1/2 h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-[600px] text-left px-4">
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-6">QuickShow</h3>
          <p className="text-lg md:text-2xl text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean at
            interdum enim, eget lacinia magna. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
