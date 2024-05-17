import React, { useContext, useState } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/FirebaseContex";

function Signup() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");

  const { auth } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firebase);
    // console.log("Username", Username);
    // console.log("Email", Email);
    // console.log("Phone", phone);
    // console.log("Password", Password);
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((result) => {
        result.user.updateProfile({ displayName: Username });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            // defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            // defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            // defaultValue="Doe"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}

export default Signup;
