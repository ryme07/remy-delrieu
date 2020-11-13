import "./Style/App.scss";
import React from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Views/Home";
import Project from "./Views/Project";
import About from "./Views/About";
import Hackstar from "./Components/Hackstars";

function App() {
  const ComponentOne = () => <div>Hello world!</div>;
  const ComponentTwo = () => (
    <div>
      <div>Hola el mundo!</div>
      <ComponentThree foo={<ComponentOne />} />
    </div>
  );
  const ComponentThree = ({ foo }) => <div>{foo}</div>;

  let titletest = "DSI POLE EMPLOI";
  // const WrapperPE = () => {
  //   return (
  //     <div className="wrapper">
  //       <Project
  //         title="DSI POLE EMPLOI"
  //         subtitle="JRAD V2"
  //         framework="Angular"
  //         secondtechno="Jenkins"
  //         thirdtechno="SonarQube"
  //       />
  //       <Zoom direction="bottom" delay={1000} duration={2000}>
  //         <Card hello="PE PROJECT" />
  //       </Zoom>
  //     </div>
  //   );
  // };

  // const WrapperBC = () => {
  //   return (
  //     <div className="wrapper">
  //       <Project
  //         title="BEWARE CYBERLABS"
  //         subtitle="QUIZ APP"
  //         framework="VueJs"
  //         secondtechno="NodeJs"
  //         thirdtechno="TypeOrm"
  //       />
  //       <Zoom direction="bottom" delay={1000} duration={2000}>
  //         <Card hello="BEWARE PROJECT" />
  //       </Zoom>
  //     </div>
  //   );
  // };

  // const WrapperWP = () => {
  //   return (
  //     <div className="wrapper">
  //       <Project
  //         title="WEB PROJECTS"
  //         subtitle="HACKASTAR"
  //         framework="Angular"
  //         secondtechno="NodeJS"
  //         thirdtechno="Typescript"
  //       />
  //       <Zoom direction="bottom" delay={1000} duration={2000}>
  //         <Card hello="web project" />
  //       </Zoom>
  //     </div>
  //   );
  // };

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
          hello={<ComponentTwo />}
        />
        <Project
          title="BEWARE CYBERLABS"
          subtitle="QUIZ APP"
          framework="VueJs"
          secondtechno="NodeJs"
          thirdtechno="TypeOrm"
          hello="BEWARE"
        />

        <Project
          title="WEB PROJECTS"
          subtitle="HACKASTAR"
          framework="Angular"
          secondtechno="NodeJS"
          thirdtechno="Typescript"
          stars={<Hackstar />}
        />
        {/* <WrapperPE className="wrapper" />
        <WrapperBC className="wrapper" />
        <WrapperWP className="wrapper" /> */}
        <About />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
