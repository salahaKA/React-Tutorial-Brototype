import { useState } from "react";
import "./App.css";
import About from "./container/About";
import Profile from "./container/Profile";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const [state, setState] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/about">About page</Link>
        <br></br>
        <Link to="/profile">Profile page</Link>
        <Routes>
          <Route Component={About} path="/about"></Route>
          <Route Component={Profile} path="/profile"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
