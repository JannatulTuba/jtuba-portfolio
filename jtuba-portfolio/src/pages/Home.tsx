import React from "react";
import { PortfolioTimeline } from "../components/PortfolioTimeline";

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
            automation testing in Agile-Scrum environments. My experience
            includes building automation frameworks using Java, Selenium,
            Selenide, JUnit, TestNG, Cucumber, and performing API testing with
            Postman and SQL validation.
          </p>

          <p>
            My background in Computer Science and Engineering and hands-on
            experience at SendSafely help me deliver high-quality test coverage,
            improve QA processes, and mentor other testers. This portfolio
            highlights my technical skills, academic projects, and professional
            achievements.
          </p>
        </div>
      </div>

      {/* Learning Journey Timeline (HTML5 Canvas EXTRA CREDIT) */}
      <section className="timeline-section">
        <h2>Learning Journey Timeline</h2>
        <p className="timeline-description">
          A visual representation of my major learning milestones, from 
          university research to becoming a Senior Software Tester.
        </p>
        <PortfolioTimeline />
      </section>
    </section>
  );
};
