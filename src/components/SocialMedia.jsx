import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.instagram.com/ernest_yoyowah_jnr">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/Ernest-Yoyowah">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/ernestyoyowah">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
