"use client";

import React from "react";

const TestimonialBottom = () => {
  return (
    <svg
      viewBox="0 0 1304 1074"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-[5%] left-0 w-full h-[60%] -z-20 transform scale-x-[-1]" // Horizontal Flip
      preserveAspectRatio="none"
    >
      <defs>
        {/* Radial Gradient for Smooth Glow */}
        <radialGradient id="waveGlow" cx="40%" cy="20%" r="100%">
          <stop offset="0%" stopColor="#DC00D3" stopOpacity="0.9" /> {/* Vivid Pink */}
          <stop offset="40%" stopColor="#0CFAF5" stopOpacity="0.6" /> {/* Cyan */}
          <stop offset="100%" stopColor="#1B1F3A" stopOpacity="0" /> {/* Dark Fade */}
        </radialGradient>
      </defs>

      {/* Main Wave - Now Flows from Left to Right */}
      <path
        opacity="0.8"
        d="M354.525 501.225C162.429 757.497 50 609.871 50 609.871V1073.99H1304V0C1304 0 1180 390 950 370C720 350 546.622 244.953 354.525 501.225Z"
        fill="url(#waveGlow)"
        filter="url(#blur)"
      />

      {/* Additional Layer for Depth */}
      <path
        opacity="0.6"
        d="M354.525 501.225C137.644 719.917 50 609.871 50 609.871V1073.99H1304V0C1304 0 1160 350 950 370C740 390 571.406 282.533 354.525 501.225Z"
        fill="url(#waveGlow)"
      />

      {/* Subtle Bottom Wave for Extra Depth */}
      <path
        opacity="0.4"
        d="M405.689 478.586C179.3 665.131 50 609.871 50 609.871V1073.99H1304V0C1304 0 1200 400 1049.99 339.131C899.98 280 632.078 292.042 405.689 478.586Z"
        fill="url(#waveGlow)"
      />

      {/* Blur Effect for a Smooth Glow */}
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="50" />
        </filter>
      </defs>
    </svg>
  );
};

export default TestimonialBottom;
