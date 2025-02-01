import { motion } from "framer-motion";
import { Project } from "@/types/projects";

/*
  Displays the hero section for a project with a background image, 
  title, author, and estimated read time.
*/
const HeroSection = ({ project }: { project: Project }) => (
  <section className="px-4 h-screen relative">
    {/* Background image with overlay */}
    <motion.div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${project.projectHeroImg})` }}
    >
      <div className="absolute inset-0 bg-purple-950/45 backdrop-blur-xs" />
    </motion.div>

    {/* Project title and metadata */}
    <div className="relative pb-96 h-full w-full flex flex-col md:items-center justify-center">
      <div className="text-5xl md:text-8xl font-bold py-4">
        {project.projectTitle}
      </div>
      <div className="hero-details flex flex-row gap-4 items-center">
        <div className="author bg-gray-600/95 px-1 md:px-4 py-3 rounded-md">
          {project.author}
        </div>
        <div className="read-time">{project.readTimeInMins} min read</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
