import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Landing from "./Landing";
import Info from "./Info";

function Something() {
  return <a></a>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="App"
      style={{
        width: "100%",
      }}
    >
      <Something />
      <Landing />
      <Info />
    </div>
  );
}

export default App;
