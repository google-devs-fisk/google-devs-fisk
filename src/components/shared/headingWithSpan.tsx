import React from "react";
import { HeadingProps } from "@/types/common";

const HeadingWithSpan: React.FC<HeadingProps> = ({ heading }) => {
  // Logic to split the heading
  const words = heading.split(" ");
  const firstWord = words[0]; // The first word
  const spannedWords = words.slice(1, 4).join(" "); // 2nd, 3rd, and 4th word
  const remainingWords = words.slice(4).join(" "); // Remaining words after the 4th

  return (
    <h1 className="secondary-color text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      <span>{firstWord} </span>
      <span className="primary-heading">{spannedWords}</span>{" "}
      <span>{remainingWords}</span>
    </h1>
  );
};

export default HeadingWithSpan;