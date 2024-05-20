import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import FirebaseProvider from "./store/FirebaseContex";
function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </Router>
      </div>
    </FirebaseProvider>
  );
}

export default App;
