import React from "react";
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
    <div className="beware-container">
      <div className="title-question">QUESTION ?</div>
      <div className="beware-bottom">
        <div className="beware-answers">{listAnswers}</div>
        <div className="beware-validate">
          <button>VALIDATE</button>
        </div>
      </div>
    </div>
  );
}
