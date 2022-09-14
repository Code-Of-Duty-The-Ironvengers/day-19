import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          background: "#1F2434",
          color: "white",
          paddingBottom: "150px",
        }}
      >
        <header className="background" id="root">
          <nav
            style={{
              display: "flex",
              alignItems: "space-evenly",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <img className="logo" src="/src/images/ironhack-logo-xs.png" />
            <img
              className="logo"
              src="/src/images/menu-top-xs.png"
              style={{ height: 20 }}
            />
          </nav>
        </header>
        <div>
          <h1 style={{ width: "300px", paddingLeft: "80px" }}>
            Say Hello to ReactJS
          </h1>
          <p style={{ width: "300px", paddingLeft: "80px" }}>
            You will learn how to use the most popular frontend library and
            become a super ninja developer
          </p>
          <button className="button" href="">
            Awesome!
          </button>
        </div>
      </div>
      <div className="card">
        <div>
          <img src="/src/images/icon1.png" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UI's</p>
        </div>
        <div>
          <img src="/src/images/icon2.png" />
          <h3>Components</h3>
          <p>Build encapsulated Components that manage their state</p>
        </div>
        <div>
          <img src="/src/images/icon3.png" />
          <h3>Single-Way</h3>
          <p>A set of inmutable values are passed to the components</p>
        </div>
        <div>
          <img src="/src/images/icon4.png" />
          <h3>JSX</h3>
          <p>Statistically typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}
export default App;
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
