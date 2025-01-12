"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageComponent from "../shared/imageComponent";
import Heading from "../shared/heading";
import KeySpan from "../shared/keySpan";
import { WorkCulture, CultureValue } from "@/types/culture";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { cardAnimation, contentAnimation, imageAnimation, staggeredAnimation } from "@/animations/animations";

const getValue = (value: CultureValue): string => {
  return value.icon ? value.content + " " + value.icon : value.content;
};

const WorkCultureShowComponent: React.FC<{ culture: WorkCulture }> = ({ culture }) => {
  const { id, imageUrl, title, values, description, date, team } = culture;
  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });
  const animationDelay = 0.4;

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden p-6 secondary-card-one rounded-3xl flex flex-col justify-center items-center min-h-[45vh] min-w-full xl:flex-row xl:min-h-[75vh]"
      id={id}
      variants={cardAnimation(animationDelay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex flex-col justify-center items-center overflow-hidden xl:w-8/12"
        variants={imageAnimation(animationDelay)}
      >
        <ImageComponent
          alt={title}
          src={imageUrl}
          rounded={true}
          minHeight={300}
          className="absolute w-[50vw] h-[35vw]"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="p-4 flex flex-col w-[75%] justify-center items-center xl:w-1/2"
        variants={contentAnimation(animationDelay)}
      >
        <div>
          <div className="mb-5">
            <Heading heading={title} />
          </div>
          <p className="mb-10">{description}</p>
        </div>
        {/* Values */}
        <motion.div
          className="flex-wrap gap-2 flex"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggeredAnimation(animationDelay).container}
        >
          {values.map((value, index) => (
            <motion.div className="m-2" key={index} variants={staggeredAnimation(animationDelay).item}>
              <KeySpan genre={getValue(value)} variant={index % 2 + 1} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCultureShowComponent; 