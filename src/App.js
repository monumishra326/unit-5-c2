// import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        {show ? "Show Rentals" : "Add House"}
      </button>
      {show ? <AddHouse /> : <Rentals />}
      <br />
    </div>
  );
}

export default App;
