import React from "react";

type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Frontend" | "Backend" | "Testing" | "Other";
};

const skills: Skill[] = [
  { name: "HTML5", level: "Advanced", category: "Frontend" },
  { name: "CSS3 / Flexbox / Grid", level: "Advanced", category: "Frontend" },
  { name: "JavaScript (ES6+)", level: "Intermediate", category: "Frontend" },
  { name: "TypeScript", level: "Intermediate", category: "Frontend" },
  { name: "React", level: "Intermediate", category: "Frontend" },
  { name: "Java", level: "Intermediate", category: "Backend" },
  { name: "SQL", level: "Intermediate", category: "Backend" },
  { name: "Selenium / Playwright", level: "Advanced", category: "Testing" },
  { name: "Jest / React Testing", level: "Beginner", category: "Testing" },
  { name: "Git / GitHub", level: "Intermediate", category: "Other" },
];

export const Skills: React.FC = () => {
  return (
    <section className="page">
      <h2>Skills</h2>
      <p>
        These are some of the tools and technologies I use in my work and
        studies. They come from both QA projects and university assignments.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name} className="skill-card">
            <h3>{skill.name}</h3>
            <p className="skill-category">{skill.category}</p>
            <p className={`skill-level level-${skill.level.toLowerCase()}`}>
              {skill.level}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
