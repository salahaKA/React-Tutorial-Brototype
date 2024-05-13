import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function Two() {
  const { data } = useContext(AppContext);
  return (
    <div style={{ backgroundColor: "brown", width: "300px" }}>
      <h2>Layer Two{data}</h2>
    </div>
  );
}

export default Two;
