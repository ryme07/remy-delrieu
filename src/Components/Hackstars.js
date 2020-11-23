import React from "react";
import { Zoom } from "react-awesome-reveal";
import "../Style/Hackstars.scss";

export default function Hackstars() {
  return (
    <Zoom direction="bottom" delay={1100} duration={2000}>
      <div className="solar-system">
        <div className="planet planet1">
          <div className="planet planet2">
            <div className="planet planet3">
              <div className="planet planet4">
                <div className="sun"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
