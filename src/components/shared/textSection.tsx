'use client';

import React from 'react';
import TextContent from './textContent';
import OverflowContent from './overflowContent';
import { TextSectionProps, BtnProps } from '@/types/common';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ImageComponent } from '@/components';

function renderRightContent(
  flipLayout: boolean,
  imgURL: string,
  heading: string,
  paragraph?: string,
  btnLink?: BtnProps,
  loadOverlayContent?: boolean,
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
      {!loadOverlayContent ? (
        <div className="w-[470px] h-[450px] flex items-center justify-center rounded-lg">
          <ImageComponent
            src={imgURL}
            alt={heading}
            minHeight={500}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <OverflowContent imgURL={imgURL} />
      )}
    </motion.div>
  );
}

function renderLeftContent(
  flipLayout: boolean,
  imgURL: string,
  heading: string,
  paragraph?: string,
  btnLink?: BtnProps,
  loadOverlayContent?: boolean,
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
      {!loadOverlayContent ? (
        <div className="w-[470px] h-[450px] flex items-center justify-center rounded-lg">
          <ImageComponent
            src={imgURL}
            alt={heading}
            minHeight={500}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <OverflowContent imgURL={imgURL} />
      )}
    </motion.div>
  );
}

export default function TextSection({
  heading,
  paragraph,
  imgURL,
  btnLink,
  flipLayout = false, // Default layout is left-right
  loadOverlayContent = false, // Default to false (don't show OverflowContent)
}: TextSectionProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 max-w-7xl mx-auto"
    >
      {imgURL ? (
        <>
          {/* Left Section */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2">
            {renderLeftContent(flipLayout, imgURL, heading, paragraph, btnLink, loadOverlayContent, isInView)}
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end justify-center overflow-visible lg:w-1/2">
            {renderRightContent(flipLayout, imgURL, heading, paragraph, btnLink, loadOverlayContent, isInView)}
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
