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

//NEED A REFACTORIZATION HERE... :(
const DSIBlock = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p className="description">{t("project.descriptionDSI")}</p>
    </React.Fragment>
  );
};

const BewareBlock = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p className="description">{t("project.descriptionBeware")}</p>
    </React.Fragment>
  );
};

const HackstarBlock = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p className="description">{t("project.descriptionWebProjects")}</p>
    </React.Fragment>
  );
};

const projects = [
  [
    {
      title: "DSI POLE EMPLOI",
      subtitle: "JRAD V2",
      description: <DSIBlock />,
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
      description: <BewareBlock />,
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
      description: <HackstarBlock />,
      framework: "Angular",
      secondtechno: "NodeJS",
      thirdtechno: "Typescript",
      cardRenderer: <Hackstar />,
    },
  ],
];

function Wrapper() {
  const { i18n } = useTranslation();
  const [active, setActive] = useState(false);

  const toggleButton = () => {
    setActive(!active);
    console.log("clicked");
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
      {/* <Home /> */}
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
    // <React.Fragment>
    //   <ReactPageScroller>
    //     <Home />
    //     <Project projects={projects[0]} />
    //     <Project projects={projects[1]} />
    //     <Project projects={projects[2]} />
    //     <About />
    //   </ReactPageScroller>
    // </React.Fragment>
  );
}

export default App;
