function Feature() {
  return (
    <div className="feature">
      <div className="row">
        <div className=" col-md-3 my-5 text-start">
          <div className="card p-5 border-light">
            <img src="./src/images/icon1.png" className="icon1" alt="icon1" />
            <div className="card-body">
              <h5 className="card-title">Declarative</h5>
              <p className="card-text">
                React make it painless to create interative UIs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mt-5 text-start">
          <div className="card p-5 border-light">
            <img src="./src/images/icon2.png" className="icon2" alt="icon2" />
            <div className="card-body">
              <h5 className="card-title">Components</h5>
              <p className="card-text">
                Build encapsulated components that manage their state.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mt-5 text-start">
          <div className="card p-5 border-light">
            <img src="./src/images/icon3.png" className="icon3" alt="icon3" />
            <div className="card-body">
              <h5 className="card-title">Single-Way</h5>
              <p className="card-text">
                A set of immutable values are passed to the components.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mt-5 text-start">
          <div className="card p-5 border-light">
            <img src="./src/images/icon4.png" className="icon4" alt="icon4" />
            <div className="card-body">
              <h5 className="card-title">JSX</h5>
              <p className="card-text">
                Statically-typed, designed to run on modern browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
