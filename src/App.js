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
        <Project />
        <Project style={{ backgroundColor: "#0a192f" }} />
        <Project />
        <About />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
