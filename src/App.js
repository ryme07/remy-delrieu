import "./Style/App.scss";
import React from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Views/Home";
import Project from "./Views/Project";
import About from "./Views/About";
import Hackstar from "./Components/Hackstars";
import DsiPE from "./Components/DsiPE";
import Beware from "./Components/Beware";
import { useTranslation } from "react-i18next";

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
    },
  ],
  [
    {
      title: "BEWARE CYBERLABS",
      subtitle: "QUIZ APP",
      description:
        "Beware Cyberlabs is a company specialized in cybersecurity. They have lot of clients around the world and propose many solutions to secure system and how defend yourself against cyber attacks. So I made this app to learn cyber security by means of lessons and quiz. This design is not the real one.",
      framework: "VueJs",
      secondtechno: "NodeJs",
      thirdtechno: "TypeOrm",
      cardRenderer: <Beware />,
    },
  ],
  [
    {
      title: "WEB PROJECTS",
      subtitle: "HACKASTAR",
      description:
        "This part concerned differents projects realized during hackathons of 24 hours. The first one is a Netflix's clone with horror theme. And the second is about stars and NASA. This projects were made with Angular, Material Design and NodeJs.",
      framework: "Angular",
      secondtechno: "NodeJS",
      thirdtechno: "Typescript",
      cardRenderer: <Hackstar />,
    },
  ],
];

function Wrapper() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Home />
      {/* <button onClick={() => changeLanguage("fr")}>fr</button>
      <button onClick={() => changeLanguage("en")}>en</button> */}
    </div>
  );
}

function App() {
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
