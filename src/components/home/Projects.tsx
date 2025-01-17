import React from 'react';
import dynamic from 'next/dynamic';
import SwiperComponent from './SwiperComponent';

const Projects: React.FC = () => {
  return (
    <div className="pt-40 pl-10 flex flex-col">
      <div >
        <SwiperComponent />
      </div>

      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-pink-400 transition duration-300 lg:w-1/4 ml-10 mt-10">
          Learn More
      </button>
    </div>
  );
};

export default Projects;