import React from "react";

export const Home: React.FC = () => {
  return (
    <section className="page home-page">
      <div className="hero">
        <div>
          <h1>
            Hello, I’m <span className="accent">Jannatul Tuba</span>
          </h1>
          <p className="hero-subtitle">
            Senior Software Tester · Automation Engineer · CS Graduate
          </p>
          <p>
            I work as a Senior Software Tester, focusing on web, API, and
            automation testing in Agile teams. My background in Computer
            Science and Engineering and hands-on experience with Java,
            Selenium/Selenide, and BDD frameworks help me build reliable,
            testable software and guide QA improvements.
          </p>
          <p>
            This portfolio highlights my skills, key projects, and the journey
            that took me from university projects to leading QA efforts in
            production systems.
          </p>
        </div>
      </div>
    </section>
  );
};
