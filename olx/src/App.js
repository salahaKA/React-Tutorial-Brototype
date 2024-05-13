import { useState } from "react";
import "./App.css";
import About from "./container/About";
import Profile from "./container/Profile";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";

function App() {
  const [state, setState] = useState(50);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/about">About page</Link>
        <br></br>
        <Link to="/profile">Profile page</Link>
        <AppContext.Provider value={{ data: state }}>
          <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
