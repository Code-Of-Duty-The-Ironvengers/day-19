import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="first-section">
        <nav className="nav-bar">
          <img src="/src/images/ironhack-logo-xs.png" className="logo" />
          <img src="/src/images/menu-top-xs.png" className="settings" />
        </nav>
        <h1>Say hello to ReactJS</h1>
        <article>
          You will learn how to use <br></br>the most popular frontend library,{" "}
          <br></br>and become a super Ninja developer.
        </article>
        <button>Awesome!</button>
      </div>
      <div className="second-section">
        <section className="section">
          <img src="/src/images/icon1.png" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </section>
        <section className="section">
          <img src="/src/images/icon2.png" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </section>
        <section className="section">
          <img src="/src/images/icon3.png" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </section>
        <section className="section">
          <img src="/src/images/icon4.png" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
