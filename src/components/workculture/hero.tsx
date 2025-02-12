'use client'
import React from "react";
import { ImageComponent, FloatingIcons } from "@/components";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import HeadingToggle from "./headingToggle";

const Hero = () => {
  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });

  const contentVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    visible: {
      y: -150,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute justify-center z-20 p-10 lg:p-20 top-[50%] translate-x-[-50%] translate-y-[-50%] w-full"
      >
        <HeadingToggle />
      </motion.div>

      <div className="relative w-full h-[100vh] max-h-screen aspect-[16/9] overflow-hidden">
        <FloatingIcons />
        {/* Blur effect for image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black blur-2xl opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

        {/* Subtle animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[190px] left-80 w-[550px] h-[600px] bg-[#dc00d3] rounded-full filter blur-3xl opacity-50" />
          <div className="absolute top-[190px] right-80 w-[550px] h-[600px] bg-[#46c6fd] rounded-full filter blur-3xl opacity-50" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full filter blur-3xl animate-pulse opacity-5" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl animate-pulse opacity-5" />
        </div>

        {/* Background Image */}
        <ImageComponent
          alt="collaborative learning"
          src="/images/work-culture-page-hero.jpeg"
          minHeight={300}
          opacity={0.35}
          className="absolute h-full"
        />
      </div>
    </div>
  );
};

export default Hero;