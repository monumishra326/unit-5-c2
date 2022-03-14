// import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  // const [toogle, settoogle] = useState("form");

  // const toggler = () => {};

  return (
    <div className="App">
      <AddHouse></AddHouse>
      <Rentals></Rentals>
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */} Toggle
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
