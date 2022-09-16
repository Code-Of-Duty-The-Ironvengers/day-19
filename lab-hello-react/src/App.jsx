import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ background: "#16213E" }}>
        <Navbar />
        <Header />
      </div>
      <Feature />
    </div>
  );
}

export default App;
