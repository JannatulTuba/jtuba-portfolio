import React, { useState } from "react";
import { GitHubProjects } from "../components/GitHubProjects";

type Project = {
  title: string;
  description: string;
  techStack: string[];
};

const featuredProjects: Project[] = [
  {
    title: "Selenium Microservice Framework",
    description:
      "Group project where we built a microservice-style automation framework using Java, Selenium, TestNG, Maven, and SQL to test a web application with reusable components.",
    techStack: ["Java", "Selenium", "TestNG", "Maven", "SQL"]
  },
  {
    title: "BDD Microservice Framework",
    description:
      "BDD-based framework using Cucumber, Java, Selenium, and Maven to test web applications with human-readable scenarios.",
    techStack: ["Cucumber", "Java", "Selenium", "Maven"]
  },
  {
    title: "Bangla OCR",
    description:
      "Machine learning project generating synthetic Bangla handwritten datasets with Python and PyTorch, and deploying an OCR web app using Flask.",
    techStack: ["Python", "PyTorch", "Flask"]
  },
  {
    title: "Water Body Segmentation & Label Noise Study",
    description:
      "Research project on label noise effects in remote sensing-based water body segmentation models, using QGIS and Python for dataset creation.",
    techStack: ["Python", "QGIS", "Remote Sensing"]
  },
  {
    title: "Online Craft Shop",
    description:
      "An eCommerce website created with PHP, HTML, CSS, SQL, and basic JavaScript for managing craft products and orders.",
    techStack: ["PHP", "HTML", "CSS", "SQL", "JavaScript"]
  }
];

export const Projects: React.FC = () => {
  const [showGithub, setShowGithub] = useState<boolean>(true);

  return (
    <section className="page">
      <h2>Projects</h2>
      <p>
        These projects come from both university work and automation practice.
        They show my experience with frameworks, web development, and
        machine-learning related applications.
      </p>

      <div className="projects-grid">
        {featuredProjects.map((proj) => (
          <article key={proj.title} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p className="tech-stack">
              Tech: {proj.techStack.join(", ")}
            </p>
          </article>
        ))}
      </div>

      <section className="github-section">
        <h3>GitHub Repositories</h3>
        <p>
          This section uses the GitHub API to load some of my public
          repositories automatically.
        </p>
        <button onClick={() => setShowGithub((prev) => !prev)}>
          {showGithub ? "Hide GitHub Projects" : "Show GitHub Projects"}
        </button>

        {/* Change this to your actual GitHub username if not already set */}
        {showGithub && <GitHubProjects username="JannatulTuba" />}
      </section>
    </section>
  );
};
