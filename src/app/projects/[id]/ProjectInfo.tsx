"use client";

import { Nav, Footer } from "@/components";
import DemoSection from "@/components/projects/DemoSection";
import HeroSection from "@/components/projects/HeroSection";
import FeaturesSection from "@/components/projects/FeaturesSection";
import OverviewSection from "@/components/projects/OverviewSection";
import ProblemStatementSection from "@/components/projects/ProblemStatementSection";
import { Project } from "@/types/projects";

/*
  Renders detailed information about a project if data is available.
  If no project data is provided, displays a "Project Not Found" message.

  Sections included:
  - HeroSection: Displays project title and hero image
  - OverviewSection: Provides a high-level overview
  - ProblemStatementSection: Highlights the problem the project addresses
  - FeaturesSection: Lists key features
  - DemoSection: Displays a demo video if available
*/
export default function ProjectInfo({ project }: { project?: Project }) {
  // If project data is available, render the full project details
  if (project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1 overflow-y-auto">
          <HeroSection project={project} />
          <OverviewSection overview={project.overview} />
          <ProblemStatementSection
            problemStatement={project.problemStatement}
          />
          <FeaturesSection features={project.features} />
          <DemoSection demoVideo={project.demo} />
        </div>
        <Footer />
      </div>
    );
  }

  // If no project is found, display a fallback message
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold pb-4">Project Details Not Found.</h1>
        <p>
          Sorry, we were not able to find the project details you were looking
          for.
        </p>
      </div>
      <Footer />
    </div>
  );
}
