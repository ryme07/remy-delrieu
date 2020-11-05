import "./App.css";
import React from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <React.Fragment>
      <ReactPageScroller>
        <Home />
        <About />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
