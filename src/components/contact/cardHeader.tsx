"use client"

import { useState } from "react";
import { CHeaderProps } from "@/types/contact";

const CHeader: React.FC<CHeaderProps> = ({ headingText, onInterestSelect }) => {
  const interestsOptions = [
    "iOS Dev",
    "Android",
    "ML",
    "Full Stack",
    "System Design",
    "Other",
  ];

  const [activeInterest, setActiveInterest] = useState<number | null>(null);

  const handleInterestClick = (interest: string, index: number) => {
    setActiveInterest(index); // Set the clicked button as active
    onInterestSelect(interest); // Notify parent of selected interest
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="pt-4 pb-4">{headingText}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {interestsOptions.map((interest, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleInterestClick(interest, index)}
            className={`
              py-2 px-4 
              text-sm 
              font-medium 
              rounded-lg shadow-lg hover:opacity-90 focus:outline-none
              ${
                activeInterest === index
                  ? "bg-gradient-to-r to-[#46c6fd] from-[#dc00d3] text-white"
                  : "border"
              }
            `}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CHeader;
