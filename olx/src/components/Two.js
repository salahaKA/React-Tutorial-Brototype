import React from "react";

function Two(props) {
  return (
    <div style={{ backgroundColor: "brown", width: "300px" }}>
      <h2>Layer Two {props.data}</h2>
    </div>
  );
}

export default Two;
