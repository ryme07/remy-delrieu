import React from "react";
import Card from "../Components/Card";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import "../Style/Project.scss";

export default function Project(props) {
  return (
    <div {...props} className="componentProject firstProject">
      <div className="project">
        <Fade direction="left">
          <h2>{props.title}</h2>
        </Fade>

        <Fade direction="top" delay={1500} duration={2500}>
          <h5 className="subtitle">{props.subtitle}</h5>
        </Fade>
        <Fade direction="left" delay={1000}>
          <div className="block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
              pulvinar lorem felis nec erat
            </p>
          </div>
        </Fade>
        <Flip direction="vertical" delay={1600} duration={1000}>
          <ul className="techno">
            <li>{props.framework}</li>
            <li>{props.secondTechno}</li>
            <li>{props.thirdTechno}</li>
          </ul>
        </Flip>
      </div>
      <Zoom direction="bottom" delay={1000} duration={2000}>
        <Card />
      </Zoom>
    </div>
  );
}
