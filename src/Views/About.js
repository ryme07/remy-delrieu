import React from "react";
import "../Style/About.scss";
import bobby from "../Assets/bonhomme.svg";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";

export default function About() {
  const getCurrentYear = () => new Date().getFullYear();
  return (
    <div className="about about-component">
      <h2>ABOUT ME</h2>
      <div className="about-container">
        <p className="describeMe">
          I am a web developer freelance specialized in Javascript and I use the
          main frameworks like <span>React</span> (this portfolio for example),
          <span> Angular</span> or <span>VueJs</span> for the App developpment.
          But I can to made mobile app too with <span>React Native</span>, and
          recently <span>Flutter</span>. Side Backend, I use <span>NodeJs</span>{" "}
          or <span>Java Spring</span>.
        </p>
        <img className="image" src={bobby} alt="little-man-logo" />
      </div>
      <div className="contact-container">
        <div className="icons">
          <p>
            <i>
              <ImLinkedin size={25} />
            </i>
            <i>
              <ImGithub size={25} />
            </i>
          </p>
          {/* <div className="line">
            <hr />
          </div> */}
        </div>
        <p>Designed & Built by Remy Delrieu - {getCurrentYear()}</p>
        <div>
          <p>remydelrieupro@gmail.com</p>
          {/* <div className="line">
            <hr />
          </div> */}
        </div>
      </div>
    </div>
  );
}
