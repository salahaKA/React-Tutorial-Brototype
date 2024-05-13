import React from "react";
import Two from "./Two";

function One(props) {
  return (
    <div style={{ backgroundColor: "blue", width: "500px" }}>
      <h1>Layer One</h1>
      <Two data={props.data}></Two>
    </div>
  );
}

export default One;
