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
            QA Engineer • Software Developer • Graduate Student
          </p>
          <p>
            I work as a QA engineer and I am also studying Software Development.
            I like finding bugs, improving quality, and building useful tools
            with code. This portfolio shows my projects, skills, and learning
            journey.
          </p>
        </div>
      </div>
    </section>
  );
};
