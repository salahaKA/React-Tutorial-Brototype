import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
