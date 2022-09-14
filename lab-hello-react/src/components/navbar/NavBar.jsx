import React from "react";

const Navbar = () => {
  return (
    <nav
      className="nav"
      style={{
        margin: 50,
      }}
    >
      <ul
        className="nav-menu"
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        <li className="nav-icons">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
            alt="ironhack-logo"
            style={{
              height: 90,
            }}
          />
        </li>
        <li className="nav-icon">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
            alt="hamburger-menu"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
