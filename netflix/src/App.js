import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals } from "./urls";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <NavBar></NavBar>
      <RowPost url={originals} title="Netflix Origials"></RowPost>
      <RowPost url={action} title="Action" isSmall></RowPost>
    </div>
  );
}

export default App;
