import React, { useState } from "react";
import { GitHubProjects } from "../components/GitHubProjects";

type Project = {
  title: string;
  description: string;
  techStack: string[];
};

const featuredProjects: Project[] = [
  {
    title: "Milestory Planner",
    description:
      "A planning and memory app idea that helps users plan long-term goals, track milestones, and store important memories.",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "QA Test Manager Concept",
    description:
      "A concept design for a test case management system with traceability and reporting for QA teams.",
    techStack: ["TypeScript", "React"],
  },
  {
    title: "SocialNet Analyzer",
    description:
      "An academic project focused on graph algorithms and analyzing social network data.",
    techStack: ["Python", "Algorithms"],
  },
];

export const Projects: React.FC = () => {
  const [showGithub, setShowGithub] = useState<boolean>(true);

  return (
    <section className="page">
      <h2>Projects</h2>
      <p>
        These projects show how I connect QA thinking, algorithms, and web
        development. Some are professional ideas, others are course projects.
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
          This section uses the GitHub API (extra credit) to load some of my
          public repositories automatically.
        </p>
        <button onClick={() => setShowGithub((prev) => !prev)}>
          {showGithub ? "Hide GitHub Projects" : "Show GitHub Projects"}
        </button>

        {/* 🔴 Change the username below to your actual GitHub username */}
        {showGithub && <GitHubProjects username="your-github-username-here" />}
      </section>
    </section>
  );
};
