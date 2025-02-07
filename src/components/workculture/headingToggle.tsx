"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeadingToggle = () => {
  const baseText = "At GDG, we're building a community where developers can find a safe space 🏡 ";
  const variants = [
    "Feel confident to chat 🗣️",
    "Laugh 😂",
    "Code together 💻",
    "And most importantly⚡",
    "Be free from judgment 🤝",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % variants.length); // Cycle through all variants
    }, 1700); // Change text every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  });

  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold text-white text-center">
      <div className="text-4xl sm:text-5xl xl:text-7xl mb-5">{baseText}</div>
      <AnimatePresence mode="wait">
        <motion.span
          key={variants[index]}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Faster transition
          className="text-blue-300 px-4 py-1.5 bg-[var(--secondary-background-three)] rounded-lg"
        >
          {variants[index]}
        </motion.span>
      </AnimatePresence>
    </h2>
  );
};

export default HeadingToggle;
