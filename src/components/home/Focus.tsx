"use client";

import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { HeadingWithSpan, BottomWave} from "@/components";
import FocusClickMeOverlay from "./focusClickMeOverlay";

const Focus = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const domains = [
    {
      src: "https://storage.googleapis.com/gdg-fisk-assets/images/web-dev-image.png",
      title: "Full Stack\nWeb Development",
      width: 400,
      height: 400,
    },
    {
      src: "https://storage.googleapis.com/gdg-fisk-assets/images/mobile-app-dev.jpg",
      title: "Android and iOS\nDevelopment",
      width: 300,
      height: 300,
    },
    {
      src: "https://storage.googleapis.com/gdg-fisk-assets/images/ml-image.png",
      title: "Machine Learning",
      width: 400,
      height: 400,
    },
  ];

  return (
    <div ref={ref} className="relative flex flex-col justify-center items-center px-4">
      {/* Heading */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center max-w-7xl w-full"
      >
        <div className="mb-20">
          <HeadingWithSpan heading="Key Focus Domains" />
        </div>

        {/* Motion Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              {/* Card Content */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#46c6fd] to-[#dc00d3] opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-[2rem] bg-[#1E1B26] p-1 w-full">
                  <Image
                    src={domain.src}
                    alt={domain.title}
                    width={domain.width}
                    height={domain.height}
                    className="rounded-[1.8rem] aspect-square object-cover w-full"
                  />
                </div>
                {/* Overlay Positioned on Top of Each Domain */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <FocusClickMeOverlay />
                </div>
              </div>
              <h2 className="secondary-color text-xl sm:text-2xl lg:text-3xl font-medium mt-6 whitespace-pre-line py-6 text-center">
                {domain.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <BottomWave />
    </div>
  );
};

export default Focus;
