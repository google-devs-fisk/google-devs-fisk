"use client";

import React from "react";
import Btn from "./btn";
import HeadingWithSpan from "./headingWithSpan";
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
  return (
    <>
      <div className="mb-20">
        <HeadingWithSpan heading={heading} />
      </div>
      {paragraph && (
        <p className="project-description text-xl md:text-2xl pb-8 mb-20 px-12 sm:px-0 ">
          {paragraph}
        </p>
      )}
      {btnProps && (
        <div className="mr-auto mb-10">
          <Btn {...btnProps} />
        </div>
      )}
    </>
  );
}
