import React from "react";
import heroImg from "./assets/hero.svg";
import { FaReact } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1 className="title-icon">
            <FaReact className="icon" style={{ color: "#61DAFB" }} />
            React Projects
          </h1>
          <p>
            React + Vite를 활용한 프로젝트 모음입니다! <br></br>API를 활용하여
            진행한 프로젝트, firebase를 사용하여 DB연결, 다양한 React의 기능을
            학습하기위해 제작된 프로젝트입니다. 대부분의 프로젝트는 라이브러리를
            활용해서 수업내용에서 여러 기능을 추가하여 만들었습니다. 각
            프로젝트의 상세설명은{" "}
            <a href="https://github.com/KaengEE/React-projects" target="_blank">
              깃허브
            </a>
            를 참고해주면 감사하겠습니다. 😃
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
