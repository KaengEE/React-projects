import React from "react";
import { projects } from "./data";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {/* data 반복문 */}
        {projects.map((data) => {
          return (
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="project"
              key={data.id}
            >
              <img src={data.image} alt={data.title} className="img" />
              <h5>{data.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
