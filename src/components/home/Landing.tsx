"use client"

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Landing = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center bg-gradient-to-br from-purple-950/90 via-purple-950 to-blue-950">
      {/* Content Section - Left Side */}
      <AnimatePresence mode="sync">
        <motion.div 
          className="relative z-20 pl-24 w-1/2"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-8xl font-bold text-white mb-6 drop-shadow-lg tracking-wide">
            GOOGLE DEVS
          </h1>
          <h2 className="text-7xl font-bold mb-10 tracking-wide bg-gradient-to-l from-[#46c6fd] to-[#dc00d3] text-transparent bg-clip-text">
            FISK UNIVERSITY
          </h2>
          <p className="text-2xl text-white mb-3 drop-shadow-md max-w-3xl">
            Come Together To Identify Problems, Conceptualize
          </p>
          <p className="text-2xl text-white mb-14 drop-shadow-md max-w-3xl">
            Coding Ideas, And Find The Answers.
          </p>
          <button className="bg-gradient-to-r from-[#46c6fd] to-[#dc00d3] hover:from-[#dc00d3] hover:to-[#46c6fd] text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 drop-shadow-[0_0_15px_rgba(220,0,211,0.5)] hover:drop-shadow-[0_0_25px_rgba(70,198,253,0.6)]">
            Learn More
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Image Section - Right Side */}
      <AnimatePresence mode="sync">
        <motion.div 
          className="absolute right-0 top-0 w-4/5 h-full mix-blend-overlay opacity-80"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/placeholders/home-placeholder1.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Landing;
