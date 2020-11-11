import React from "react";
import "../Style/About.scss";

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
        <p className="image">IMAGE</p>
      </div>
      <div className="contact-container">
        <div>
          <p>icon</p>
          <div className="line">
            <hr />
          </div>
        </div>
        <p>Designed & Built by Remy Delrieu - {getCurrentYear()}</p>
        <div>
          <p>adresse@mail.com</p>
          <div className="line">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
