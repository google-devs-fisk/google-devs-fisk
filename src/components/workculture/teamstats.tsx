"use client";

import React from "react";
import { Rod, DepthBlur, ImageComponent } from "@/components";
import TimelineItem from "./timelineItem";
import StatCard from "./statsCard";
import { Metric, Testimonial } from "@/types/common";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface TeamStatsProps {
  testimonials: Testimonial[];
  metrics: Metric[];
}

const TeamStats = ({ testimonials, metrics }: TeamStatsProps) => {
  const bgColors = [
    "bg-gradient-to-r from-[#48c0f4] via-purple-[#5d828b] to-[#6f4425] backdrop-blur-sm",
    "bg-gradient-to-r from-[#5e6cc3] via-purple-500 to-[#dc00d3] backdrop-blur-sm",
    "bg-gradient-to-r from-[#d6702a] to-[#783e18] backdrop-blur-sm",
  ];

  // Animation Variants
  const leftSectionVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const rightSectionVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };
  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col mx-auto lg:flex-row gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 mb-[50px] lg:mb-[100px]"
    >
      <AnimatePresence mode="sync">
        {/* Left Section Animation */}
        <motion.div
          className="flex-1 mt-[50px] lg:mt-[150px]"
          variants={leftSectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-[60px] lg:mb-[120px]">
            {metrics.map((metric, index) => (
              <StatCard
                key={index}
                title={metric.metricHeading}
                value={metric.stat.value.toString().padStart(2, "0")}
                progress={
                  index === 1
                    ? metric.goals?.[0]?.stat?.value ?? 0
                    : metric.subHeadingStat?.value || 0
                }
                subValue={
                  index === 1
                    ? metric.goals?.[1]?.stat?.value
                        .toString()
                        .padStart(2, "0") ?? "00"
                    : metric.subHeadingStat?.value
                        ?.toString()
                        .padStart(2, "0") || ""
                }
                subLabel={
                  index === 1
                    ? metric.goals?.[1]?.heading ?? ""
                    : metric.metricSubHeading || ""
                }
                dailyGrowth={metric.goals?.[0]?.heading ?? ""}
                isCircular={index === 1}
              />
            ))}
          </div>

          {/* Image Container */}
          <div className="relative mx-auto lg:ml-[100px] w-[40vw] min-w-[300px] max-w-[500px] overflow-visible">
            <div className="absolute left-[200px] -top-[50px] w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[600px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>
            <ImageComponent
              src="https://storage.googleapis.com/gdg-fisk-assets/images/work-culture-placholder1.png"
              minHeight={500}
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Right Section Animation */}
        <motion.div
          className="mt-[100px] lg:mt-[155px] max-w-[45%] mx-auto relative"
          variants={rightSectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
        >
          {/* Rod positioned absolutely behind timeline items */}
          <div className="absolute left-[60%] transform -translate-x-1/2 w-full h-full -mt-8">
            <Rod style="h-[1100px] sm:h-[830px] w-[27px]" />
          </div>
          <DepthBlur />

          {/* Timeline items */}
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <TimelineItem
                key={testimonial.id || index}
                avatarSrc={
                  testimonial.authorImgUrl ||
                  "/images/placeholders/projects-placeholder8.png"
                }
                message={testimonial.content}
                name={testimonial.author || "Anonymous"}
                role={`${testimonial.teamDomain}, ${testimonial.classification}`}
                bgColor={bgColors[index % bgColors.length]}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TeamStats;
