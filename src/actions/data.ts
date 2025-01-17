import { Project, ProjectsPageResponse } from "@/types/projects";
import { Timestamp } from "@google-cloud/firestore";

const sampleProjectsResponse: ProjectsPageResponse = {
  projects: [
    {
      id: "1",
      projectHeroImg: "/images/placeholders/projects-placeholder4.jpg",
      projectTitle: "Smart Attendance",
      author: "Team Innovation",
      readTimeInMins: 5,
      overview: {
        textContents: [
          {
            imgUrl: "/overview1-1.jpg",
            content:
              "Smart Attendance is a cutting-edge app designed to transform traditional attendance systems into a dynamic tool for enhancing student engagement and boosting classroom productivity. By seamlessly integrating facial recognition technology with real-time data analytics, our app provides educators with a comprehensive solution to track attendance, monitor student participation, and gain valuable insights into classroom dynamics.",
          },
          {
            imgUrl: "/overview1-2.jpg",
            content:
              "Seamlessly integrating facial recognition technology with real-time data analytics for comprehensive classroom management.",
          },
        ],
      },
      problemStatement:
        "Traditional attendance tracking methods are time-consuming and prone to errors, leading to inefficient classroom management and reduced teaching time.",
      features: {
        textContents: [
          {
            imgUrl: "/features1-1.jpg",
            content: "Facial recognition and Real-time analytics",
          },
          {
            imgUrl: "/features1-2.jpg",
            content: "Automated reporting and Student engagement tracking",
          },
        ],
      },
      demo: {
        title: "Smart Attendance Demo",
        imgUrl: "/demo1.jpg",
        genres: ["Education", "Technology", "AI"],
        videoUrl: "/demo1.mp4",
      },
      relevantLinks: [
        { docsLink: "https://github.com/project/smart-attendance", docsTitle: "GitHub Repository" },
        { docsLink: "https://docs.smart-attendance.com", docsTitle: "Documentation" },
      ],
    },
    {
      id: "2",
      projectHeroImg: "/images/placeholders/projects-placeholder1.png",
      projectTitle: "Project Management Tool",
      author: "Dev Team Alpha",
      readTimeInMins: 4,
      overview: {
        textContents: [
          {
            imgUrl: "/overview2-1.jpg",
            content: "An intuitive project management solution that streamlines task tracking.",
          },
          {
            content: "Enhanced team collaboration features for distributed teams.",
          },
        ],
      },
      problemStatement:
        "Teams struggle with project coordination and task management across distributed environments.",
      features: {
        textContents: [
          {
            imgUrl: "/features2-1.jpg",
            content: "Task tracking and Team collaboration",
          },
          {
            imgUrl: "/features2-2.jpg",
            content: "Timeline management and Resource allocation",
          },
        ],
      },
      demo: {
        title: "Project Management Demo",
        imgUrl: "/demo2.jpg",
        genres: ["Productivity", "Team Management", "Software"],
        videoUrl: "/demo2.mp4",
      },
      relevantLinks: [
        { docsLink: "https://github.com/project/pm-tool", docsTitle: "GitHub Repository" },
        { docsLink: "https://pm-tool.docs.com", docsTitle: "Documentation" },
      ],
    },
    {
      id: "3",
      projectHeroImg: "/images/placeholders/projects-placeholder5.png",
      projectTitle: "AI-Powered Tutoring",
      author: "Team EdTech",
      readTimeInMins: 6,
      overview: {
        textContents: [
          {
            imgUrl: "/overview3-1.jpg",
            content:
              "AI-Powered Tutoring is a transformative platform that leverages artificial intelligence to offer personalized learning experiences for students of all ages. By combining adaptive algorithms with interactive lesson plans, this tool ensures every student achieves their full potential.",
          },
          {
            imgUrl: "/overview3-2.jpg",
            content:
              "Empowering educators with actionable insights and enabling students to learn at their own pace.",
          },
        ],
      },
      problemStatement:
        "Educational tools often fail to address the unique learning needs of individual students.",
      features: {
        textContents: [
          {
            imgUrl: "/features3-1.jpg",
            content: "AI-driven adaptive learning paths",
          },
          {
            imgUrl: "/features3-2.jpg",
            content: "Interactive lesson plans with instant feedback",
          },
        ],
      },
      demo: {
        title: "AI-Powered Tutoring Demo",
        imgUrl: "/demo3.jpg",
        genres: ["Education", "AI", "EdTech"],
        videoUrl: "/demo3.mp4",
      },
      relevantLinks: [
        { docsLink: "https://github.com/project/ai-tutoring", docsTitle: "GitHub Repository" },
        { docsLink: "https://ai-tutoring.docs.com", docsTitle: "Documentation" },
      ],
    },
  ],
  // lastUpdated: Timestamp.fromDate(new Date())
};

const projects: Project[] = sampleProjectsResponse.projects;

export default projects;