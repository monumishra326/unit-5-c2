import axios from "axios";
import { useState, useEffect } from "react";

export const AddHouse = () => {
  const [houses, sethouses] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });

  

  const InputHandler = (e) => {
    const { id, value } = e.target;
    sethouses({ ...houses, [id]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", houses).then(() => {
      alert("data submitted");

    });
  };
  

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input
          type="text"
          className="name"
          id="name"
         
          required
          onChange={InputHandler}
        />
        <br />
        <label>ownerName</label>
        <input
          //   value={input}
          type="text"
          className="ownerName"
          id="ownerName"
          required
          onChange={InputHandler}
        />
        <br />
        <label>address</label>
        <input
          //   value={input}
          type="text"
          className="address"
          id="address"
          required
          onChange={InputHandler}
        />
        <br />
        <label>areaCode</label>
        <input
          //   value={input}
          type="text"
          className="areaCode"
          id="areaCode"
          required
          onChange={InputHandler}
        />
        <br />
        <label>rent</label>
        <input
          //   value={input}
          type="text"
          className="rent"
          id="rent"
          required
          onChange={InputHandler}
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          value="bachelor"
          type="checkbox"
          className="bachelor"
          id="bachelor"
          onChange={InputHandler}
        />
        <br />
        <label>married</label>
        <input
          value="married"
          type="checkbox"
          className="married"
          id="married"
          onChange={InputHandler}
        />
        <br />
        <label>image</label>
        <input
          //   value={""}
          type="text"
          className="image"
          id="image"
          required
          onChange={InputHandler}
        />
        <br />
        <input className="submitBtn" type="submit" onClick={handlesubmit} />
      </form>
    </div>
  );
};
