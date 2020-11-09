import React from "react";
import Card from "../Components/Card";
import { Fade } from "react-awesome-reveal";

export default function Project() {
  return (
    <div className="component first-component">
      <Fade direction="left" duration={2000}>
        <h2>First Component</h2>
      </Fade>
      <Fade direction="right" duration={1000}>
        <Card />
      </Fade>
    </div>
  );
}
