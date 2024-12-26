'use client'

import React from "react";
import Btn from "./btn";
import { BtnProps } from "@/types/common";

interface SectionContentProps {
  heading: string;
  paragraph?: string;
  btnProps?: BtnProps;
}

export default function TextContent({
  heading,
  paragraph,
  btnProps,
}: SectionContentProps) {
  // Logic to dynamically span 2nd, 3rd, and 4th words
  const words = heading.split(" ");
  const firstWord = words[0]; // The first word
  const spannedWords = words.slice(1, 4).join(' '); // 2nd, 3rd, and 4th words
  const remainingWords = words.slice(4).join(' '); // Remaining words after the 4th

  return (
    <>
      <h1 className="secondary-color text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10">
        <span>{firstWord} </span>
        <span className="primary-heading">{spannedWords}</span>{' '}
        <span>{remainingWords}</span>
      </h1>
      {paragraph && <p className="text-lg sm:text-xl secondary-color mb-10">{paragraph}</p>}
      {btnProps && (
        <div className="mr-auto">
            <Btn {...btnProps} />
        </div>
       )}
    </>
  );
}
