import React from "react";

export const About: React.FC = () => {
  return (
    <section className="page">
      <h2>About Me</h2>
      <div className="two-column">
        <div>
          <p>
            I am a QA engineer with experience testing web applications and
            automating tests. I am also a graduate student in Software
            Development, which helps me understand both the testing and coding
            side of software.
          </p>
          <p>
            I enjoy turning real problems into simple, clear solutions. I like
            planning, organizing, and breaking big goals into small steps that I
            can complete one by one.
          </p>
        </div>
        <div>
          <ul className="info-list">
            <li>
              <strong>Location:</strong> United States
            </li>
            <li>
              <strong>Focus Areas:</strong> QA Automation, Web Apps, Databases
            </li>
            <li>
              <strong>Languages:</strong> JavaScript, TypeScript, Java, SQL
            </li>
            <li>
              <strong>Interests:</strong> Learning new tools, building planners,
              and helping others learn.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
