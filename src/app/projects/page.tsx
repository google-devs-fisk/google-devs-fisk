import { Nav, Footer } from "@/components";
import Btn from "@/components/shared/btn";

import "./styles.css";

export default function Projects() {
  return (
    <div className="projectspage">
      <Nav />
      <div className="carousel-container flex flex-row items-center justify-between py-16">
        <div className="carousel-right w-full">
          <h2 className="project-title">Smart Attendance</h2>
          <p className="project-description">
            "Smart Attendance" is a cutting0-edge app designed to transform
            traditional attendance systems into a dynamic tool for enhancing
            student engagement and boosting classroom productivity. By
            seamlessly integrating facial recognition technolgy with real-time
            data analytics, our app provides educators with a comprehensice
            solution to track attendance, monitor student participation, and
            gain valuable insigts into classroom dynamics.
          </p>
          <Btn text="See Details" link="/projects" />
        </div>
        <div className="carousel-left w-full">
          <div className="projects-list flex flex-row items-center justify-around">
            <div className="project-card">Project 2</div>
            <div className="project-card">Project 3</div>
            <div className="project-card">Project 1</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
