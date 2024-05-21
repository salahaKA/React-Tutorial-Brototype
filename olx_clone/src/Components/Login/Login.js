import React, { useContext, useState } from "react";
import Logo from "../../olx-logo.png";
import "./Login.css";
import { FirebaseContext } from "../../store/FirebaseContex";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const { Firebase, auth } = useContext(FirebaseContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    //   Firebase.auth()
    //     .signInWithEmailAndPassword(Email, Password)
    //     .then(() => {
    //       alert("Logged In");
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });
    //
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      // alert("Logged In");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            id="lname"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
