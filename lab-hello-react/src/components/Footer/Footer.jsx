import React from "react";

const Footer = () => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyle: "none",
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        padding: "1rem",
        backgroundColor: "#fff",
        color: "black",
        margin: 0,
        height: 250,
      }}
    >
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
          style={{ height: 150 }}
        />
        <div
          style={{
            maxWidth: 250,
            display: "flex",
            flexDirection: "column",
            margin: 0,
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            Declarative
          </h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </li>
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
          style={{ height: 150 }}
        />
        <div
          style={{
            maxWidth: 250,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            Components
          </h2>
          <p>Build to encapsulated components that manage their state.</p>
        </div>
      </li>
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
          style={{ height: 150 }}
        />
        <div
          style={{
            maxWidth: 250,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            Single-Way
          </h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
      </li>
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
          style={{ height: 150 }}
        />
        <div
          style={{
            maxWidth: 250,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            JSX
          </h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </li>
    </ul>
  );
};

export default Footer;
