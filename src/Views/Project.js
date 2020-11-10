import React from "react";
import Card from "../Components/Card";
import { Fade } from "react-awesome-reveal";
import "../Style/Project.scss";

export default function Project(props) {
  return (
    <div {...props} className="componentProject firstProject">
      <Fade direction="left" duration={2000}>
        <div className="project">
          <h2>DSI POLE EMPLOI</h2>
          <h5 className="subtitle">JRAD V2</h5>
          <div className="block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
              pulvinar lorem felis nec erat
            </p>
          </div>
          <ul className="techno">
            <li>Angular</li>
            <li>Jenkins</li>
            <li>SonarQube</li>
          </ul>
        </div>
      </Fade>
      <Fade direction="right" duration={1000}>
        <Card />
      </Fade>
    </div>
  );
}
