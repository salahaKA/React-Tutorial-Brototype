import { useState } from "react";
import "./App.css";
import About from "./container/About";
import Profile from "./container/Profile";

function App() {
  const [state, setState] = useState("");

  let component;
  if (state === "about") {
    component = <About></About>;
  }
  if (state === "profile") {
    component = <Profile></Profile>;
  }
  return (
    <div className="App">
      <button onClick={() => setState("about")}>About</button>
      <button onClick={() => setState("profile")}>Profile</button>
      {component}
    </div>
  );
}

export default App;
