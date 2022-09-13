function Textbox(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "150px",
      }}
    >
      <img
        style={{
          height: "100px",
          width: "100px",
          padding: "0",
        }}
        src={props.link}
      ></img>
      <h2 style={{ margin: "20px 0 5px 0" }}>{props.headline}</h2>
      <p style={{ margin: "0", textAlign: "start" }}>{props.text}</p>
    </div>
  );
}

export default Textbox;
