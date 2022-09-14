import Navbar from "./Navbar";

function Landing() {
  return (
    <section
      style={{
        padding: "2rem 3rem",
        color: "white",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#202534",
      }}
    >
      <Navbar />
      <div>
        <h1
          style={{
            fontSize: "5rem",
            padding: ".5rem 0",
          }}
        >
          Say hello to
          <br />
          ReactJS
        </h1>
        <p
          style={{
            padding: ".5rem 0",
          }}
        >
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <button
          style={{
            marginTop: "2rem",
            padding: "1em",
            backgroundColor: "white",
            color: "#202534",
            fontSize: "1.25rem",
            fontWeight: "800",
          }}
        >
          Awesome!
        </button>
      </div>
    </section>
  );
}

export default Landing;
