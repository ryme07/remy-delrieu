import "./Style/App.scss";
import React from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Views/Home";
import Project from "./Views/Project";
import About from "./Views/About";
import Hackstar from "./Components/Hackstars";
import DsiPE from "./Components/DsiPE";
import Beware from "./Components/Beware";

function App() {
  let titletest = "DSI POLE EMPLOI";

  /*
it doesn't work :(
  {projectsdata.map((data) => (
          <Project
            title={data.title}
            subtitle={data.subtitle}
            framework={data.framework}
            secondtechno={data.secondtechno}
            thirdtechno={data.thirdtechno}
          />
        ))}

        */
  return (
    <React.Fragment>
      <ReactPageScroller>
        <Home />
        <Project
          title={titletest}
          subtitle="JRAD V2"
          framework="Angular"
          secondtechno="Jenkins"
          thirdtechno="SonarQube"
          dsi={<DsiPE />}
        />
        <Project
          title="BEWARE CYBERLABS"
          subtitle="QUIZ APP"
          framework="VueJs"
          secondtechno="NodeJs"
          thirdtechno="TypeOrm"
          hello="Beware"
        />
        <Project
          title="WEB PROJECTS"
          subtitle="HACKASTAR"
          framework="Angular"
          secondtechno="NodeJS"
          thirdtechno="Typescript"
          stars={<Hackstar />}
        />
        <About />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
