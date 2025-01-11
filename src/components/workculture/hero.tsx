import React from "react";
import Nav from "../shared/nav";
import FloatingIcons from "../shared/floatingIcons";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/placeholders/work-culture-placeholder3.jpg')",
      }}
    >
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

      <Nav />

      {/* Floating elements */}
      <FloatingIcons />

      {/* Main content */}
      <div className="relative">
        <div className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[61px] font-bold pb-[50px] sm:pb-[70px] md:pb-[100px] mt-[100px] sm:mt-[150px] lg:mt-[210px] mx-5 sm:mx-10 md:mx-[100px] lg:mx-[200px] leading-tight">
          <span className="relative inline-block">
            <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm"></span>
            <span className="relative bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              At GDG
            </span>
          </span>
          <span className="text-white">
            , we strive to build a community where developers can find a safe
            space, free from judgment, to collaborate openly. We want members to
            feel confident to converse, laugh, and code together, making the
            team feel like home.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;