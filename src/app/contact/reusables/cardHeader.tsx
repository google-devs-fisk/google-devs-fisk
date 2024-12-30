"use client";
import { CardHeader } from "@nextui-org/react";

interface Interest {
  text: string;
  isActive: boolean;
}

interface CardHeaderProps {
  interests: Interest[];
  onSelectItem: (item: number) => void;
  headingText: string;
}

const CHeader = ({ interests, onSelectItem, headingText }: CardHeaderProps) => {
  return (
    <div>
      {" "}
      <CardHeader className="flex flex-col items-start">
        <h1 className="pt-4 pb-4">{headingText}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {interests.map((interest, index) => (
            <button
              key={index}
              onClick={() => onSelectItem(index)}
              className={`
                  py-2 px-4 
                  text-sm 
                  font-medium 
                  rounded-lg shadow-lg hover:opacity-90 focus:outline-none
                  hover:bg-gradient-to-r 
                  hover:to-[#46c6fd] 
                  hover:from-[#dc00d3]
                  ${
                    interest.isActive
                      ? "bg-gradient-to-r to-[#46c6fd] from-[#dc00d3] text-white"
                      : "border"
                  }
                `}
            >
              {interest.text}
            </button>
          ))}
        </div>
      </CardHeader>
    </div>
  );
};

export default CHeader;
