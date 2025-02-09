"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCarousel from "./testimonialCarousel";
import { cardAnimation } from "@/animations/animations";
import TestimonialBottom from "./testimonialBottom";
import { Testimonial } from "@/types/common";

interface TestimonialHeroProps {
  testimonials: Testimonial[];
}

const TestimonialHero: React.FC<TestimonialHeroProps> = ({ testimonials }) => {
  const animationDelay = 0.4; // Base delay for staggered animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" }); // Detects when element is visible

  return (
    <div className="relative h-[85vh] flex flex-col justify-center items-center overflow-y-visible">
      {/* Testimonial Carousel - Scroll Animation */}
      <motion.div
        ref={ref}
        className="absolute top-[-3%] left-0 w-full h-full z-30 px-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
      >
        <TestimonialCarousel testimonials={testimonials} />
      </motion.div>

      {/* Background Effects */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardAnimation(animationDelay)}
      >
        <TestimonialBottom />
      </motion.div>
    </div>
  );
};

export default TestimonialHero;
