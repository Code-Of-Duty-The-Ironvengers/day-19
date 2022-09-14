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
        backgroundColor: "white",
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
        Declarative
      </li>
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
          style={{ height: 150 }}
        />
        Components
      </li>
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
          style={{ height: 150 }}
        />
        Single-Way
      </li>
      <li>
        <img
          src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
          style={{ height: 150 }}
        />
        JSX
      </li>
    </ul>
  );
};

export default Footer;
