"use client"

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import EllipseEffect from "./ellipseEffect";
import HeroOverlay from "./heroOverlay";
import { BgGrid, Btn } from "@/components";
import { BtnProps } from "@/types/common";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { contentAnimation, imageAnimation } from "@/animations/animations";

const Landing = () => {
  // TODO: This URL is test value and should be removed.
  // The URL should be fetched from the HomePageResponse.
  const buttonInfo: BtnProps = {
    text: "Play now ▶",
    link: "/",
  };
  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });
  const animationDelay = 0.4; // Base delay for the animations
  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Content Section */}
      <AnimatePresence mode="sync">
        <motion.div
          ref={ref}
          className="absolute z-20 w-[80%] mx-auto h-auto p-10"
          initial={{ x: -200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={contentAnimation(animationDelay)}
        >
          <h1 className="secondary-color text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            GOOGLE DEVS
          </h1>
          <h2 className="primary-heading text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-10 py-2">
            @Fisk
          </h2>
          <p className="secondary-color text-xl sm:text-3xl lg:text-4xl font-light leading-tight mb-10">
            Come together to identify problems, conceptualize coding ideas, and find the answers.
          </p>
          <Btn {...buttonInfo} />
        </motion.div>
      </AnimatePresence>
      {/* Image Section */}
      <AnimatePresence mode="sync">
        <motion.div
          className="absolute right-0 top-0 w-full h-full will-change-transform"
          initial={{ x: 200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={imageAnimation(animationDelay)}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/landing-hero-img.png"
              alt="Background"
              fill
              className="object-cover object-center z-10 opacity-75"
              loading="lazy"
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      {/* The Background Grid */}
      <BgGrid />
      {/* The Background Overlay */}
      <HeroOverlay />
      {/* Background Ellipse */}
      <EllipseEffect />
    </div>
  );
};

export default Landing;
