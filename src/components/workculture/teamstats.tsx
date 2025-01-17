import React from "react";
import Rod from "../shared/rod";
import DepthBlur from "../shared/depthBlur";
import TimelineItem from "./timelineItem";
import StatCard from "./statsCard";



const Teamstats = () => {
  return (
    <div className="flex flex-col mx-auto lg:flex-row gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 mb-[50px] lg:mb-[100px]">
      {/* Left Section */}
      <div className="flex-1 mt-[50px] lg:mt-[150px]">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[60px] lg:mb-[120px]">
          <StatCard
            title="ONGOING PROJECTS"
            value="03"
            progress={1}
            subValue="01"
            subLabel="COMPLETED PROJECTS"
          />
          <StatCard
            title="NEW LEADS"
            value="06"
            progress={55}
            subValue="15"
            subLabel="THIS WEEK"
            isCircular
          />
          <StatCard
            title="GITHUB COMMITS"
            value="178"
            progress={13}
            subLabel="PER WEEK"
          />
        </div>

        {/* Image Container */}
        <div className="relative mx-auto lg:ml-[100px] w-full max-w-[480px] aspect-square rounded-tl-[60%] bg-gradient-to-b from-[#5e6cc3] via-purple-500 to-[#dc00d3] overflow-visible">
          <div className="absolute left-[200px] -top-[50px] w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[600px] bg-gradient-to-r from-[#dc00d3] to-[#46c6fd] rounded-full filter blur-5xl opacity-70"></div>
          <img
            src="/images/placeholders/work-culture-placholder1.png"
            className="absolute -top-[130px] h-[128%] w-full object-cover z-10"
            alt="Team Culture"
          />
        </div>
      </div>

      {/* Right Section - Timeline */}
      <div className="mt-[50px] lg:mt-[130px] max-w-md relative">
        {/* Rod positioned absolutely behind timeline items */}
        <div className="absolute left-[60%] transform -translate-x-1/2 w-full h-full -mt-8">
          <Rod style="h-[990px] sm:h-[830px] w-[27px]" />
        </div>
        <DepthBlur />
        {/* Timeline items with spacing and hover effects */}
        <div className="relative space-y-6 z-10">
          <TimelineItem
            avatarSrc="/images/placeholders/projects-placeholder8.png"
            message="Innovative Community! Everyone works extremely passionately."
            name="Person 1"
            role="Designer, Junior"
            bgColor="bg-gradient-to-r from-[#48c0f4] via-purple-[#5d828b] to-[#6f4425] backdrop-blur-sm"
          />
          <TimelineItem
            avatarSrc="/images/placeholders/projects-placeholder8.png"
            message="Coding together is the best part."
            name="Person 2"
            role="ML Team, Senior"
            bgColor="bg-gradient-to-r from-[#5e6cc3] via-purple-500 to-[#dc00d3] backdrop-blur-sm"
          />
          <TimelineItem
            avatarSrc="/images/placeholders/projects-placeholder8.png"
            message="Built for growth. Happy to be part of it."
            name="Person 3"
            role="Cyber Team, Senior"
            bgColor="bg-gradient-to-r from-[#d6702a] to-[#783e18] backdrop-blur-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Teamstats;
