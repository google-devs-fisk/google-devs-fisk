"use client";

import { motion } from "framer-motion";
import { HeadingWithSpan, KeySpan } from "@/components";
import { RelevantLink } from "@/types/projects";
import Link from "next/link";

const RelevantLinks = ({ relevantLinks }: { relevantLinks: RelevantLink[] }) => {
  return (
    <section className="relative flex flex-col items-center mb-10">
      <HeadingWithSpan
        className="text-4xl sm:text-5xl lg:text-6xl"
        heading="Relevant Links"
      />
      {/* Adjusted Divider for full width */}
      <div className="w-full my-5">
      </div>
      {/* Relevant Links */}
      <div className="flex flex-wrap gap-4 justify-around mb-[5vh]">
        {relevantLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeIn",
              delay: index * 0.1, // Slight delay for each link
            }}
          >
            <Link href={link.docsLink} target="_blank">
              <KeySpan genre={link.docsTitle} variant={1}/>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelevantLinks;
