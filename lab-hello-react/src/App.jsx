import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#1f2535",
          height: 500,
          width: 700,
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 10,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" />
          </div>
          <div>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
          </div>
        </div>
        <div
          style={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <h1 style={{ color: "white", margin: 0, marginTop: 75 }}>
            Say hello to ReactJS
          </h1>
          <p className="paragraph" style={{ color: "white", marginBottom: 50 }}>
            You will learn how to use <br /> the most popular frontend library,{" "}
            <br />
            and become a super Ninja developer.
          </p>
          <button
            style={{
              width: 120,
              height: 50,
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            Awesome!
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: 75,
          width: 700,
          display: "flex",
          alignContent: "space-around",
        }}
      >
        <div style={{ margin: 10 }}>
          <img
            style={{ height: 150 }}
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
          ></img>
          <p style={{ textAlign: "left", color: "#959595" }}>
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div style={{ margin: 10, color: "#959595" }}>
          <img
            style={{ height: 150 }}
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
          ></img>
          <p style={{ textAlign: "left" }}>
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div style={{ margin: 10, color: "#959595" }}>
          <img
            style={{ height: 150 }}
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
          ></img>
          <p style={{ textAlign: "left" }}>
            A set of immutable values ate passed to the components.
          </p>
        </div>
        <div style={{ margin: 10, color: "#959595" }}>
          <img
            style={{ height: 150 }}
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
          ></img>
          <p style={{ textAlign: "left" }}>
            Statically-typed, designed to run on modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
