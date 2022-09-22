import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./nav";
import Description from "./info";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1
        style={{
          marginTop: "8rem",
          fontWeight: "900",
          fontSize: "4rem",
          letterSpacing: "-2px",
        }}
      >
        Say hello to <br />
        ReactJS
      </h1>
      <span className="paragraph">
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super ninja developer.</p>
      </span>

      <button
        style={{
          backgroundcolor: "grey",
          cursor: "pointer",
          textAlign: "center",
          textDecoration: "none",
          marginTop: "2rem",
          marginBottom: "12rem",
          padding: "1rem",
        }}
      >
        Awesome!
      </button>

      <Description />
    </div>
  );
}
export default App;
