import {useState} from 'react';
// import './App.css';
import { AddHouse } from './components/AddHouse/AddHouse';
import { Rentals } from './components/Rentals/Rentals';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="App">
      
      <button className="toggleForm" onClick={()=>{
        show?setShow(false):setShow(true)
      }}>
        {show?"Show Rentals":"Add House"}
      </button>
      {show?<AddHouse/>:<Rentals/>}
      <br />
    </div>
  );
}

export default App;
