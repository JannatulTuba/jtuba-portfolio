import React from "react";

export const About: React.FC = () => {
  return (
    <section className="page">
      <h2>About Me</h2>
      <div className="two-column">
        <div>
          <p>
            I am a Senior Software Tester with experience in both manual and
            automation testing. I currently work on web and API testing using
            Java-based automation frameworks, BDD with Cucumber, and tools like
            Postman, SQL, and Jira in Agile-Scrum environments. I am curretly doing 
            MS in Software Development at BU.
          </p>
          <p>
            I completed my Bachelor of Science in Computer Science and
            Engineering from North South University, where I also took part in
            research and project work related to OCR, remote sensing, and web
            development. Over time, I moved from student projects to
            professional QA roles where I focus on building maintainable
            regression suites, improving QA processes, and mentoring other
            testers.
          </p>
        </div>
        <div>
          <ul className="info-list">
            <li>
              <strong>Current Role:</strong> Senior Software Tester
            </li>
            <li>
              <strong>Field of Expertise:</strong> Manual & Automation Testing,
              Web & API testing
            </li>
            <li>
              <strong>Education:</strong> BSc in CSE, North South University
            </li>
            <li>
              <strong>Tools I Use Daily:</strong> Java, Selenide/Selenium,
              JUnit/TestNG, Cucumber, Maven, Postman, SQL, Jira, Zephyr
            </li>
            <li>
              <strong>Languages:</strong> English, Bangla
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
