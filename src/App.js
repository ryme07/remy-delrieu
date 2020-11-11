import "./Style/App.scss";
import React from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Views/Home";
import Project from "./Views/Project";
import About from "./Views/About";

function App() {
  return (
    <React.Fragment>
      <ReactPageScroller>
        <Home />
        <Project
          title="DSI POLE EMPLOI"
          subtitle="JRAD V2"
          framework="Angular"
          secondTechno="Jenkins"
          thirdTechno="SonarQube"
        />
        <Project
          title="BEWARE CYBERLABS"
          subtitle="QUIZ APP"
          framework="VueJs"
          secondTechno="NodeJs"
          thirdTechno="TypeOrm"
        />
        <Project
          title="WEB PROJECTS"
          subtitle="HACKASTAR"
          framework="Angular"
          secondTechno="NodeJS"
          thirdTechno="Typescript"
        />
        <About />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
