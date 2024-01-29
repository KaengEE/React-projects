import React from "react";
import { projects, fullProject, mainProjects } from "./data";

export const Projects = () => {
  return (
    <>
      <section className="projects">
        <div className="title">
          <h2>Main Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
          {/* 특정 프로젝트 */}
          {mainProjects.map((data) => {
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
      <section className="projects">
        <div className="title">
          <h2>React Projects</h2>
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
      <section className="projects">
        <div className="title">
          <h2>Full Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
          {/* fullstack data */}
          {fullProject.map((data) => {
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
    </>
  );
};
