import React from "react";
import p1 from "./assets/p1.png";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        <a
          href="./assets/birthday.png"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={p1} alt="birthday buddy" className="img" />
          <h5>birthday buddy</h5>
        </a>
        <a
          href="./assets/birthday.png"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={p1} alt="birthday buddy" className="img" />
          <h5>birthday buddy</h5>
        </a>
        <a
          href="./assets/birthday.png"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={p1} alt="birthday buddy" className="img" />
          <h5>birthday buddy</h5>
        </a>
        <a
          href="./assets/birthday.png"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={p1} alt="birthday buddy" className="img" />
          <h5>birthday buddy</h5>
        </a>
      </div>
    </section>
  );
};
