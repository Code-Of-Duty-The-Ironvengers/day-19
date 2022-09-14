function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3.5rem",
      }}
    >
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
        alt=""
        className=""
        style={{
          height: "100%",
        }}
      />
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
        alt=""
        style={{
          height: "30%",
        }}
      />
    </nav>
  );
}

export default Navbar;
