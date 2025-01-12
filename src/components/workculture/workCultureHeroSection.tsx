'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/placeholders/culture-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-light text-center max-w-4xl leading-relaxed">
          At GDG, we strive to build a community where developers can find a 
          <span className="text-purple-400 font-medium"> safe space</span>, free from judgment, to 
          <span className="text-purple-400 font-medium"> collaborate openly</span>. We want members to feel confident to 
          <span className="text-purple-400 font-medium"> converse, laugh, and code together</span>, making the team feel like home.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection; 