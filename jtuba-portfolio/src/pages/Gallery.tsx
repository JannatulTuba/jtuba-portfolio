import React from "react";

import studyImg from "../images/study.jpeg";
import planningImg from "../images/planning.jpeg";
import profileImg from "../images/profile.png";
import walkImg from "../images/walk.jpeg";

export const Gallery: React.FC = () => {
  return (
    <section className="page">
      <h2>Gallery</h2>

      <div className="gallery-grid">

        <article className="gallery-card">
          <img src={studyImg} alt="Jannatul Tuba" className="gallery-image" />
          <h3>Study Time</h3>
        </article>

        <article className="gallery-card">
          <img src={planningImg} alt="Planning Board" className="gallery-image" />
          <h3>Planning Board</h3>
        </article>

        <article className="gallery-card">
          <img src={profileImg} alt="Profile Picture" className="gallery-image" />
          <h3>Profile Picture</h3>
        </article>

        <article className="gallery-card">
          <img src={walkImg} alt="Nature Walk" className="gallery-image" />
          <h3>Nature Walk</h3>
        </article>

      </div>
    </section>
  );
};
