"use client";

import React from "react";

const EllipseEffect: React.FC = () => {
  return (
    <div
      className="absolute top-[40%] left-[50%] 
                 w-[60%] h-[70%] 
                 -translate-x-[30%] 
                 rounded-full 
                 -rotate-[89.84deg] 
                 bg-gradient-to-b from-[#DC00D3] via-[#0CFAF5] to-[#0CFAF5] 
                 blur-[150px] z-[-1]"
    />
  );
};

export default EllipseEffect;
