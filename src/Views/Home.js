import React from "react";
import Card from "../Components/Card";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="component first-component">
      <Fade direction="left">
        <h2>First Component</h2>
        <Card />
      </Fade>
    </div>
  );
}
