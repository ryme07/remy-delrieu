import React from "react";
import "../Style/DsiPE.scss";
import { Zoom } from "react-awesome-reveal";

export default function DsiPE() {
  const getCurrentDate = () => {
    const today = new Date();
    let date = `${today.getDate()}-${
      today.getMonth() + 1
    }-${today.getFullYear()}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let dateTime = date + " " + time;
    return dateTime;
  };

  return (
    <div className="dsi">
      <Zoom direction="bottom" delay={1000} duration={2000}>
        <div className="nav">
          <ul>
            <li>PROJECT 1</li>
            <li>PROJECT 2</li>
            <li>PROJECT 3</li>
            <li>PROJECT 4</li>
            <li>PROJECT 5</li>
            <li>PROJECT 6</li>
          </ul>
        </div>
      </Zoom>
      <div className="main-container-dsi">
        <Zoom direction="bottom" delay={1500} duration={2000}>
          <div className="left">
            <div className="container-left">
              <div className="build">
                <p>THING TESTED</p>
                <button>BUILD</button>
              </div>

              <div className="release">
                <p>{getCurrentDate()}</p>
                <button>RELEASE</button>
              </div>

              <div className="tests">
                <p>N° BUILD</p>
                <div className="btn-tests">
                  <button>TU</button>
                  <button>TI</button>
                  <button>TS</button>
                </div>
              </div>
            </div>

            <div className="container-left">
              <div className="build">
                <p>THING TESTED</p>
                <button className="green">BUILD</button>
              </div>

              <div className="release">
                <p>{getCurrentDate()}</p>
                <button className="red">RELEASE</button>
              </div>

              <div className="tests">
                <p>N° BUILD</p>
                <div className="btn-tests">
                  <button className="red">TU</button>
                  <button className="orange">TI</button>
                  <button className="red">TS</button>
                </div>
              </div>
            </div>

            <div className="container-left">
              <div className="build">
                <p>THING TESTED</p>
                <button className="green">BUILD</button>
              </div>

              <div className="release">
                <p>{getCurrentDate()}</p>
                <button className="red">RELEASE</button>
              </div>
              <div className="tests">
                <p>N° BUILD</p>
                <div className="btn-tests">
                  <button className="red">TU</button>
                  <button className="orange">TI</button>
                  <button className="red">TS</button>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <Zoom direction="bottom" delay={1500} duration={2000}>
          <div className="right">
            <div className="container-right">
              <p>JOB</p>
              <p className="green">TU : TOTAL : 2 SKIP: 0 FAILED: 0</p>
              <p className="orange">TI : TOTAL: 2 SKIP: 2 FAILED: 0</p>
              <p className="red">TS: TOTAL: 2 SKIP: 0 FAILED: 1</p>
              <p>
                LAST COMMIT : {getCurrentDate()} <br />
                SOME DATA FROM GITHUB
              </p>
            </div>
            <div className="btn-sonar">
              <button>SONARQUBE</button>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
