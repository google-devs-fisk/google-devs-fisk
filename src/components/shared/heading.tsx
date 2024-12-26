import React from "react";
import { HeadingProps } from "@/types/common";

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <h1 className="secondary-color text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{heading}</h1>
  );
};

export default Heading;