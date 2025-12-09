import React from "react";

type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Automation" | "API Testing" | "Programming" | "Tools" | "Other";
};

const skills: Skill[] = [
  // Automation
  {
    name: "Java (Core, test automation)",
    level: "Advanced",
    category: "Automation"
  },
  { name: "Selenium WebDriver / Selenide", level: "Advanced", category: "Automation" },
  { name: "JUnit / TestNG", level: "Advanced", category: "Automation" },
  { name: "Cucumber (BDD)", level: "Intermediate", category: "Automation" },
  { name: "Maven", level: "Intermediate", category: "Automation" },

  // API
  { name: "Postman (REST API testing)", level: "Intermediate", category: "API Testing" },
  { name: "SQL for test validation", level: "Intermediate", category: "API Testing" },

  // Programming
  { name: "Python", level: "Intermediate", category: "Programming" },
  { name: "PHP", level: "Beginner", category: "Programming" },
  { name: "HTML & CSS", level: "Intermediate", category: "Programming" },

  // Tools
  { name: "Jira & Zephyr Squad", level: "Advanced", category: "Tools" },
  { name: "Git / GitHub", level: "Intermediate", category: "Tools" },
  { name: "Jenkins, AWS CloudWatch, Splunk", level: "Beginner", category: "Tools" },

  // Other
  { name: "Manual Testing & Test Design", level: "Advanced", category: "Other" },
  { name: "Agile-Scrum QA Practices", level: "Advanced", category: "Other" }
];

export const Skills: React.FC = () => {
  return (
    <section className="page">
      <h2>Skills</h2>
      <p>
        My work combines manual testing, automation, and API testing. Below is a
        quick snapshot of the tools and technologies I use most often.
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
