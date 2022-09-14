import React from "react";

const Herotxt = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: 400,
        position: "absolute",
        top: 200,
        left: 80,
      }}
    >
      <div>
        <h1>Say hello to ReactJS</h1>
        <p style={{ maxWidth: 244, fontSize: 18 }}>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button
          style={{
            backgroundColor: "#fff",
            color: "black",
          }}
        >
          Awesome!
        </button>
      </div>
    </div>
  );
};

export default Herotxt;
