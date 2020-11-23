import React from "react";
import { Zoom } from "react-awesome-reveal";
import "../Style/Beware.scss";

export default function Beware() {
  const data = [
    { name: "ANSWER 1" },
    { name: "ANSWER 2" },
    { name: "ANSWER 3" },
  ];
  const listAnswers = data.map((answer) => (
    <div key={answer.name}>{answer.name}</div>
  ));
  return (
    //https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg
    <Zoom direction="bottom" delay={1000} duration={2000}>
      <div className="beware-container">
        <div className="title-question">QUESTION ?</div>
        <div className="beware-bottom">
          <Zoom direction="bottom" delay={1200} duration={2000}>
            <div className="beware-answers">{listAnswers}</div>
          </Zoom>
          <div className="beware-validate">
            <button>VALIDATE</button>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
