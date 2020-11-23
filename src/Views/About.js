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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
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
