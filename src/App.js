import "./Style/App.scss";
import React, { Suspense, useState } from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Views/Home";
import Project from "./Views/Project";
import About from "./Views/About";
import Hackstar from "./Components/Hackstars";
import DsiPE from "./Components/DsiPE";
import Beware from "./Components/Beware";
import { useTranslation } from "react-i18next";
import dsiImage from "./Assets/Screenshot.png";
import bewareImage from "./Assets/Screenshot2.png";
import hackstarImage from "./Assets/Screenshot3.png";
import { FaAngular, FaVuejs, FaJenkins, FaNodeJs } from "react-icons/fa";
import { SiSonarqube, SiTypescript } from "react-icons/si";
import DescriptionBlock from "./Components/DescriptionBlock";

const projects = [
  [
    {
      title: "DSI POLE EMPLOI",
      subtitle: "JRAD V2",
      description: <DescriptionBlock translate={"project.descriptionDSI"} />,
      framework: <FaAngular size={23} />,
      secondtechno: <FaJenkins size={23} />,
      thirdtechno: <SiSonarqube size={23} />,
      cardRenderer: <DsiPE />,
      imageProject: dsiImage,
    },
  ],
  [
    {
      title: "BEWARE CYBERLABS",
      subtitle: "QUIZ APP",
      description: <DescriptionBlock translate={"project.descriptionBeware"} />,
      framework: <FaVuejs size={23} />,
      secondtechno: <FaNodeJs size={23} />,
      thirdtechno: <SiTypescript size={23} />,
      cardRenderer: <Beware />,
      imageProject: bewareImage,
    },
  ],
  [
    {
      title: "WEB PROJECTS",
      subtitle: "HACKASTAR",
      description: (
        <DescriptionBlock translate={"project.descriptionWebProjects"} />
      ),
      framework: <FaAngular size={23} />,
      secondtechno: <FaNodeJs size={23} />,
      thirdtechno: <SiTypescript size={23} />,
      cardRenderer: <Hackstar />,
      imageProject: hackstarImage,
    },
  ],
];

function Wrapper() {
  const { i18n } = useTranslation();
  const [active, setActive] = useState(false);

  const toggleButton = () => {
    setActive(!active);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng) && setActive(false);
  };
  return (
    <div className="wrapper-home">
      <Home />
      <div className="container-corner">
        <div className={active ? "circle-menu circle-anim" : "circle-menu"}>
          <button className="items-circle" onClick={() => changeLanguage("fr")}>
            Fr
          </button>
          <button className="items-circle" onClick={() => changeLanguage("en")}>
            En
          </button>
        </div>
        <div
          onClick={toggleButton}
          className={active ? "btn-circle menu-anim" : "btn-circle"}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <ReactPageScroller>
      <Wrapper />
      <Project projects={projects[0]} />
      <Project projects={projects[1]} />
      <Project projects={projects[2]} />
      <About />
    </ReactPageScroller>
  );
}

const Loader = () => (
  <div className="App">
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
