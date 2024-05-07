import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  return (
    <div>
      <h1>Kadeejath Salaha</h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
              console.log(res.data);
              setState(res.data);
            });
        }}
      >
        Click me
      </button>
      {state.map((obj, index) => {
        return (
          <div key={index}>
            <h1>{index}</h1>
            <h1>{obj.title}</h1>
            <h4>{obj.body}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
