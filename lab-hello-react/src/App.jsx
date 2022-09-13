import "./App.css";
import Textbox from "./Textbox";

const declarative = {
  link: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
  headline: "Declarative",
  text: "React makes it painless to create interactive UIs.",
};
const components = {
  link: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
  headline: "Components",
  text: "Build encapsulated components that manage their state.",
};
const singleWay = {
  link: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
  headline: "Single-Way",
  text: "A set of immutable values are passed to the component's.",
};
const jsxtext = {
  link: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
  headline: "JSX",
  text: "Statically-typed, designed to run on modern browsers.",
};

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        padding: "20px 40px 20px 20px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ backgroundColor: "#313C48", padding: "20px 50px" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "100px",
          }}
        >
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"></img>
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
            style={{ height: "50%", alignSelf: "center" }}
          ></img>
        </nav>
        <div style={{ width: "50%", textAlign: "left" }}>
          <h1 style={{ margin: "0" }}>Say hello to ReactJS</h1>
          <p>
            You will learn how to use<br></br>the most popular frontend library,
            <br></br>
            and become a super Ninja developer.
          </p>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#313C48",
              fontWeight: "bold",
              borderRadius: "2px",
              padding: "15px 20px",
              margin: "20px 0 50px 0",
            }}
          >
            Awesome!
          </button>
        </div>
      </div>
      <main
        style={{
          color: "#313C48",
          display: "flex",
          padding: "100px 50px",
          gap: "50px",
        }}
      >
        <Textbox {...declarative} />
        <Textbox {...components} />
        <Textbox {...singleWay} />
        <Textbox {...jsxtext} />
      </main>
    </div>
  );
}

export default App;
