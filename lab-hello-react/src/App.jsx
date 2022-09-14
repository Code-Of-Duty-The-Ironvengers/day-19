import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header" style={{ backgroundColor: "#1E2333" }}>
        <div
          className="nav-bar"
          style={{
            paddingTop: 20,
            paddingLeft: 40,
            paddingRight: 40,
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="/src/images/ironhack-logo-xs.png" />
          <img src="/src/images/menu-top-xs.png" />
        </div>
        <div
          className="apresentation"
          style={{
            color: "white",
            width: 300,
            paddingTop: 50,
            paddingLeft: 40,
            paddingBottom: 70,
            textAlign: "left",
          }}
        >
          <h1
            style={{
              marginBottom: 10,
            }}
          >
            Say hello to ReactJS
          </h1>
          <p
            style={{
              marginBottom: 50,
            }}
          >
            You will learn how to use <br />
            the most popular frontend libary, <br />
            and become a super Ninja developer.
          </p>
          <button
            style={{
              padding: 20,
              borderRadius: 5,
              fontWeight: 600,
            }}
          >
            Awesome!
          </button>
        </div>
      </div>
      <div
        className="information"
        style={{
          display: "flex",
          padding: 30,
          paddingTop: 90,
        }}
      >
        <div
          className="box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <img
            src="/src/images/icon1.png"
            style={{
              width: 110,
              textAlign: "left",
              marginLeft: -10,
              paddingLeft: 0,
            }}
          />
          <h2> Declarative</h2>
          <p
            style={{
              textAlign: "left",
              marginTop: 0,
            }}
          >
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div
          className="box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <img
            src="/src/images/icon2.png"
            style={{
              width: 110,
              textAlign: "left",
              marginLeft: -10,
              paddingLeft: 0,
            }}
          />
          <h2>Components</h2>
          <p
            style={{
              textAlign: "left",
              marginTop: 0,
            }}
          >
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div
          className="box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <img
            src="/src/images/icon3.png"
            style={{
              width: 110,
              textAlign: "left",
              marginLeft: -10,
              paddingLeft: 0,
            }}
          />
          <h2>Single-Way</h2>
          <p
            style={{
              textAlign: "left",
              marginTop: 0,
            }}
          >
            A set of immutable values are passed to the component's.
          </p>
        </div>
        <div
          className="box"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <img
            src="/src/images/icon4.png"
            style={{
              width: 110,
              textAlign: "left",
              marginLeft: -10,
              paddingLeft: 0,
            }}
          />
          <h2>JSX</h2>
          <p
            style={{
              textAlign: "left",
              marginTop: 0,
            }}
          >
            Statically-typed, designed to run on moderm browsers.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

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
//       <h1>louca + Reactxxxxxxx</h1>
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
//   );
// }

// export default App;
