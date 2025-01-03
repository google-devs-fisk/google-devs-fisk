'use client'

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
      <div className="mb-20"><HeadingWithSpan heading={heading} /></div>
      {paragraph && <p className="text-lg sm:text-xl secondary-color mb-20">{paragraph}</p>}
      {btnProps && (
        <div className="mr-auto">
            <Btn {...btnProps} />
        </div>
       )}
    </>
  );
}
