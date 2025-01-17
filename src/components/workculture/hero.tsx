import React from "react";
import { ImageComponent, FloatingIcons, HeadingWithSpan }  from "@/components";

const Hero = () => {
  const heading = "At GDG, we strive to build a community where developers can find a safe space, free from judgment, to collaborate openly. We want members to feel confident to converse, laugh, and code together, making the team feel like home."
  return (
    <div className="relative">
      <div className="absolute z-20 p-10 lg:p-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <HeadingWithSpan heading={heading} />
      </div>
      <div className="relative w-full h-[100vh] max-h-screen aspect-[16/9] overflow-hidden">
        <FloatingIcons />
        { /* Blur effect for image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black blur-2xl opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

        {/* Subtle animated elements */}
        <div className="absolute inset-0">
        <div className="absolute top-[190px] left-80 w-[550px] h-[600px] bg-[#dc00d3] rounded-full filter blur-3xl opacity-50" />
        <div className="absolute top-[190px] right-80 w-[550px] h-[600px] bg-[#46c6fd] rounded-full filter blur-3xl opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full filter blur-3xl animate-pulse opacity-5" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl animate-pulse opacity-5" />
        </div>      
        
        {/* Background Image */}
        <ImageComponent
          alt="collaborative learning"
          src="/images/placeholders/work-culture-placeholder3.jpg"
          minHeight={300}
          opacity={0.2}
          className="absolute h-full"
        />
      </div>
    </div>
  );
};

export default Hero;