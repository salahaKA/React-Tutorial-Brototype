import React from "react";
import One from "../components/One";

function Profile(props) {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Profile</h1>
      <One data={props.data}></One>
    </div>
  );
}

export default Profile;
