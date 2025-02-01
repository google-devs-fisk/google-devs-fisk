"use client";

import React from "react";
import Image from "next/legacy/image";
import Btn from "./btn";
import Heading from "./heading";
import KeySpan from "./keySpan";
import { VideoComponentProps } from "@/types/common";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { contentAnimation, imageAnimation } from "@/animations/animations";

const VideoComponent: React.FC<VideoComponentProps> = ({
  videoContent,
  buttonInfo,
  spanVariant,
}) => {
  const { title, imgUrl, genres } = videoContent;
  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });
  const animationDelay = 0.4;

  return (
    <div className="relative w-full min-h-[350px] max-h-screen aspect-[16/9] overflow-hidden rounded-lg">
      <AnimatePresence mode="sync">
        <motion.div
          ref={ref}
          className="absolute top-[13%] left-[13%] right-[13%] bottom-[13%] flex flex-col justify-end z-20"
          initial={{ x: -200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={contentAnimation(animationDelay)}
        >
          {/* Video Title */}
          <div className="mb-4">
            <Heading heading={title} />
          </div>

          {/* Watch Button */}
          <div className="mb-4">
            <Btn {...buttonInfo} />
          </div>

          {/* Genres */}
          <div className="flex-wrap gap-2 flex">
            {genres.map((genre, index) => (
              <KeySpan key={index} genre={genre} variant={spanVariant} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Background Image */}
      <AnimatePresence mode="sync">
        <motion.div
          className="absolute right-0 top-0 w-full h-full will-change-transform"
          initial={{ x: 200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={imageAnimation(animationDelay)}
        >
            <Image
              src={imgUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              unoptimized
            />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VideoComponent;
