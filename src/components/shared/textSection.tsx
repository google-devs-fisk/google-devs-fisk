'use client';

import React from 'react';
import TextContent from './textContent';
import OverflowContent from './overflowContent';
import { TextSectionProps, BtnProps } from '@/types/common';

function renderRightContent(
  flipLayout: boolean,
  imgURL: string,
  heading: string,
  paragraph?: string,
  btnLink?: BtnProps
) {
  return flipLayout ? (
    <TextContent heading={heading} paragraph={paragraph} btnProps={btnLink} />
  ) : (
    <OverflowContent imgURL={imgURL} />
  );
}

function renderLeftContent(
  flipLayout: boolean,
  imgURL: string,
  heading: string,
  paragraph?: string,
  btnLink?: BtnProps
) {
  return !flipLayout ? (
    <TextContent heading={heading} paragraph={paragraph} btnProps={btnLink} />
  ) : (
    <OverflowContent imgURL={imgURL} />
  );
}

export default function TextSection({
  heading,
  paragraph,
  imgURL,
  btnLink,
  flipLayout = false, // Default layout is left-right
}: TextSectionProps) {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center gap-8 px-6 sm:px-12 py-12 max-w-7xl mx-auto">
      {imgURL ? (
        <>
          {/* Left Section */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2">
            {renderLeftContent(flipLayout, imgURL, heading, paragraph, btnLink)}
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end justify-center overflow-visible lg:w-1/2">
            {renderRightContent(flipLayout, imgURL, heading, paragraph, btnLink)}
          </div>
        </>
      ) : <TextContent heading={heading} paragraph={paragraph} btnProps={btnLink} />}
    </section>
  );
}
