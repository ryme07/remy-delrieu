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
  const projects = [
    [
      {
        title: "DSI POLE EMPLOI",
        subtitle: "JRAD V2",
        description:
          "An App type of IHM (Human-Machine Interface) who presents results of differents Pôle Emploi's app in current developpment. They needed to get the metrics from Jenkins and SonarQube in the same place. This app has been realised in Test Driven Devlopment.",
        framework: "Angular",
        secondtechno: "Jenkins",
        thirdtechno: "SonarQube",
        cardRenderer: <DsiPE />,
        num: "01",
      },
    ],
    [
      {
        title: "BEWARE CYBERLABS",
        subtitle: "QUIZ APP",
        framework: "VueJs",
        secondtechno: "NodeJs",
        thirdtechno: "TypeOrm",
        cardRenderer: <Beware />,
        num: "02",
      },
    ],
    [
      {
        title: "WEB PROJECTS",
        subtitle: "HACKASTAR",
        framework: "Angular",
        secondtechno: "NodeJS",
        thirdtechno: "Typescript",
        cardRenderer: <Hackstar />,
        num: "03",
      },
    ],
  ];

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
        <Project projects={projects[0]} />
        <Project projects={projects[1]} />
        <Project projects={projects[2]} />
        <About />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
