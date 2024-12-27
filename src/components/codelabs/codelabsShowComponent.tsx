"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageComponent from "../shared/imageComponent";
import Heading from "../shared/heading";
import KeySpan from "../shared/keySpan";
import ImageClickMeOverlay from "./imageClickMeOverlay";
import { Codelab, KeyLearning } from "@/types/codelabs";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { cardAnimation, contentAnimation, imageAnimation, staggeredAnimation } from "@/animations/animations";

const getGenre = (learning: KeyLearning): string => {
  return learning.icon ? learning.content + " " + learning.icon : learning.content;
};

const CodelabsShowComponent: React.FC<{ codelab: Codelab }> = ({ codelab }) => {
  const { id, screenshotUrl, title, keyLearnings, releasedDate, author } = codelab;

  // Use the custom hook to detect when this component is in view
  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });

  // Dynamic delay for animations
  const animationDelay = 0.4; // Base delay for the animations

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden p-6 secondary-card-one rounded-3xl flex flex-col justify-center items-center min-h-[45vh] min-w-full xl:flex-row xl:min-h-[75vh]"
      id={id}
      variants={cardAnimation(animationDelay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation only when in view
    >
      {/* Image Section */}
      <motion.div
        className="relative flex flex-col justify-center items-center overflow-hidden xl:w-8/12"
        variants={imageAnimation(animationDelay)}
      >
        <ImageComponent
          alt={title}
          src={screenshotUrl}
          rounded={true}
          minHeight={300}
          className="absolute w-[50vw] h-[35vw]"
        />
        <ImageClickMeOverlay codelabId={id} />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="p-4 flex flex-col w-[75%] justify-center items-center xl:w-1/2"
        variants={contentAnimation(animationDelay)}
      >
        <p className="font-semibold mb-10 lg:ml-auto">Last Modified: {releasedDate}</p>
        <div>
          <div className="mb-5">
            <Heading heading={title} />
          </div>
          <p className="font-semibold mb-10">By {author || "Unknown Author"}</p>
        </div>
        {/* Genres */}
        <motion.div
          className="flex-wrap gap-2 flex"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger only when in view
          variants={staggeredAnimation(animationDelay).container}
        >
          {keyLearnings.map((learning, index) => (
            <motion.div className="m-2" key={index} variants={staggeredAnimation(animationDelay).item}>
              <KeySpan genre={getGenre(learning)} variant={index % 2 + 1} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CodelabsShowComponent;
