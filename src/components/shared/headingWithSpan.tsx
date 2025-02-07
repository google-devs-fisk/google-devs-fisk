import React from "react";
import { HeadingProps } from "@/types/common";

const defaultTextSize = "text-3xl sm:text-4xl lg:text-5xl";

const HeadingWithSpan: React.FC<HeadingProps> = ({
  heading,
  className = defaultTextSize,
}) => {
  // Logic to split the heading
  const words = heading.split(" ");
  const firstWord = words[0]; // The first word
  const spannedWords = words.slice(1, 4).join(" "); // 2nd, 3rd, and 4th word
  const remainingWords = words.slice(4).join(" "); // Remaining words after the 4th

  return (
    <h1 className={`secondary-color font-bold leading-tigh ${className}`}>
      <span>{firstWord} </span>
      <span className="primary-heading">{spannedWords}</span>{" "}
      <span>{remainingWords}</span>
    </h1>
  );
};

export default HeadingWithSpan;
