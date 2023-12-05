import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const Profile = () => {
  const email = "yopuiqwer@naver.com";

  return (
    <div className="profile">
      <p>
        Project by <b>KaengEE</b>
      </p>
      <div className="contact">
        <h5>Contact Me : </h5>{" "}
        <p>
          <a href="https://github.com/KaengEE" target="_blank">
            <FaGithub
              className="icon"
              style={{ fontSize: "24px", color: "black" }}
            />
          </a>
        </p>
        <p>
          <a
            href="https://blog.naver.com/coding_ori/223265349655"
            target="_blank"
          >
            <SiNaver
              className="icon"
              style={{ fontSize: "20px", color: "#2DB400" }}
            />
          </a>
        </p>
        <p>
          <a href={`mailto:${email}`}>
            <IoMdMail
              style={{ fontSize: "24px", color: "#000" }}
              className="icon"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
