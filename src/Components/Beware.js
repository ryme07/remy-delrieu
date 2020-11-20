import React from "react";
import "../Style/Beware.scss";

export default function Beware() {
  return (
    //https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg
    <div className="beware-container">
      <div className="title-question">QUESTION ?</div>
      <div className="beware-bottom">
        <div className="beware-answers">
          <div>ANSWER 1</div>
          <div>ANSWER 2</div>
          <div>ANSWER 3</div>
        </div>
        <div className="beware-validate">
          <button>VALIDATE</button>
        </div>
      </div>
    </div>
  );
}
