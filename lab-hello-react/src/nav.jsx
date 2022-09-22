function Logo() {
  return (
    <div>
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
        style={{ height: "40px", width: "40px" }}
      />
    </div>
  );
}

function Menu() {
  return (
    <div>
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
        style={{ height: "20px", width: "20px" }}
      />
    </div>
  );
}

function Navbar() {
  return (
    <div className="nav">
      <Logo /> <Menu />
    </div>
  );
}

export default Navbar;
