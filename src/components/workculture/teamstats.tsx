"use client";

import React from "react";
import { Rod, DepthBlur, Footer } from "@/components";
import TimelineItem from "./timelineItem";
import StatCard from "./statsCard";
import BottomWave from "./bottomWave";
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

  const { ref, isInView } = useInViewAnimation({ margin: "-20%", once: true });

  // Animation Variants for Individual Cards
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 }, // Staggered delay
    }),
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-12 p-8 w-full max-w-[1200px]"
      >
        <AnimatePresence>
          {/* Left Section - Stats Cards */}
          <motion.div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-10 max-w-[400px]">
              {metrics?.length > 0 ? (
                metrics.map((metric, index) => (
                  <motion.div
                    key={`${metric.metricHeading || "metric"}-${index}`} // Safe unique key
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index}
                  >
                    <StatCard
                      title={metric.metricHeading}
                      value={metric.stat.value.toString().padStart(2, "0")}
                      progress={metric.subHeadingStat?.value || 0}
                      subValue={metric.subHeadingStat?.value?.toString() || ""}
                      subLabel={metric.metricSubHeading || ""}
                      dailyGrowth={metric.goals?.[0]?.heading ?? ""}
                      isCircular={index === 1}
                    />
                  </motion.div>
                ))
              ) : (
                <p className="text-white">No metrics available.</p>
              )}
            </div>
          </motion.div>

          {/* Right Section - Timeline Items */}
          <motion.div className="relative flex-1 flex flex-col items-center justify-center max-w-[500px]">
            <div className="absolute left-[60%] transform -translate-x-1/2 w-full h-full -mt-8">
              <Rod style="h-[1100px] sm:h-[830px] w-[27px]" />
            </div>
            <DepthBlur />

            <div className="relative z-10">
              {testimonials?.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id || "testimonial"}-${index}`} // Unique key
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    exit="hidden"
                    custom={index}
                  >
                    <TimelineItem
                      avatarSrc={testimonial.authorImgUrl || "/images/placeholders/projects-placeholder8.png"}
                      message={testimonial.content}
                      name={testimonial.author || "Anonymous"}
                      role={`${testimonial.teamDomain}, ${testimonial.classification}`}
                      bgColor={bgColors[index % bgColors.length]}
                    />
                  </motion.div>
                ))
              ) : (
                <p className="text-white">No testimonials available.</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Blur Effect */}
      <div className="absolute inset-0 top-[250px] -left-[200px] w-[30%] h-[500px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>

      <BottomWave />
      <Footer />
    </div>
  );
};

export default TeamStats;
