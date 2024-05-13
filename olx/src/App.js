import { useState } from "react";
import "./App.css";
import About from "./container/About";
import Profile from "./container/Profile";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const [state, setState] = useState(10);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/about">About page</Link>
        <br></br>
        <Link to="/profile">Profile page</Link>
        <Routes>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/profile"
            element={<Profile data={state}></Profile>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
