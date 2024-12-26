'use client';

import React from "react";
import { LeftHalfRectangleProps } from '@/types/common';

const LeftHalfRectangle: React.FC<LeftHalfRectangleProps> = ({
  width = 559,
  height = 525,
  className,
  ariaLabel = "Decorative Left Half Rectangle",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 559 525"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <g filter="url(#filter0_d_1_692)">
        <path
          d="M55 323C55 161.181 186.181 30 348 30H504V445H55V323Z"
          fill="url(#paint0_linear_1_692)"
          shapeRendering="crispEdges"
        />
        <path
          d="M55.5 323C55.5 161.457 186.457 30.5 348 30.5H503.5V444.5H55.5V323Z"
          stroke="white"
          strokeOpacity="0.54"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_692"
          x="0"
          y="0"
          width="559"
          height="525"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="27.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_692"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_692"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_692"
          x1="197.555"
          y1="52.5"
          x2="324.183"
          y2="442.773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#46C6FD" stopOpacity="0.47" />
          <stop offset="1" stopColor="#DC00D1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LeftHalfRectangle;
