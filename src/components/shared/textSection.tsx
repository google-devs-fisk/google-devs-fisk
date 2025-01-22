'use client';

import React from 'react';
import TextContent from './textContent';
import OverflowContent from './overflowContent';
import { TextSectionProps, BtnProps } from '@/types/common';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

function renderRightContent(
  flipLayout: boolean,
  imgURL: string,
  heading: string,
  paragraph?: string,
  btnLink?: BtnProps,
  inView?: boolean
) {
  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return flipLayout ? (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <TextContent heading={heading} paragraph={paragraph} btnProps={btnLink} />
    </motion.div>
  ) : (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <OverflowContent imgURL={imgURL} />
    </motion.div>
  );
}

function renderLeftContent(
  flipLayout: boolean,
  imgURL: string,
  heading: string,
  paragraph?: string,
  btnLink?: BtnProps,
  inView?: boolean
) {
  const contentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return !flipLayout ? (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <TextContent heading={heading} paragraph={paragraph} btnProps={btnLink} />
    </motion.div>
  ) : (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <OverflowContent imgURL={imgURL} />
    </motion.div>
  );
}

export default function TextSection({
  heading,
  paragraph,
  imgURL,
  btnLink,
  flipLayout = false, // Default layout is left-right
}: TextSectionProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center justify-center h-screen px-6 sm:px-12 max-w-7xl mx-auto"
    >
      {imgURL ? (
        <>
          {/* Left Section */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2">
            {renderLeftContent(flipLayout, imgURL, heading, paragraph, btnLink, isInView)}
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end justify-center overflow-visible lg:w-1/2">
            {renderRightContent(flipLayout, imgURL, heading, paragraph, btnLink, isInView)}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TextContent heading={heading} paragraph={paragraph} btnProps={btnLink} />
        </motion.div>
      )}
    </section>
  );
}
