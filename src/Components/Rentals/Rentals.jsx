// import "./Rentals.css";
import axios from "axios";

import { useState, useEffect } from "react";

export const Rentals = () => {
  const [getdata, setgetdata] = useState([]);

  const details = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      setgetdata(alldata);
    });
  };

  const asc = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      var ascsort = alldata.sort((a, b) => {
        return a.id - b.id;
      });
      setgetdata(ascsort);
    });
  };
  const rentasc = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      var ascsort = alldata.sort((a, b) => {
        return a.rent - b.rent;
      });
      setgetdata(ascsort);
    });
  };
  const rentdsc = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      var ascsort = alldata.sort((a, b) => {
        return b.rent - a.rent;
      });
      setgetdata(ascsort);
    });
  };

  const areadsc = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      var ascsort = alldata.sort((a, b) => {
        return b.areaCode - a.areaCode;
      });
      setgetdata(ascsort);
    });
  };
  const areaasc = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      var alldata = res.data;
      var ascsort = alldata.sort((a, b) => {
        return a.areaCode - b.areaCode;
      });
      setgetdata(ascsort);
    });
  };

  useEffect(() => {
    details();
  }, []);

  //   var pass = details();

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={asc}>
          Sort by ID
        </button>
        <button className="sortByRentAsc" onClick={rentasc}>
          Rent Low to high
        </button>
        <button className="sortByRentDesc" onClick={rentdsc}>
          Rent High to low
        </button>
        <button className="sortByAreaAsc" onClick={areaasc}>
          Area Low to high
        </button>
        <button className="sortByAreaDesc" onClick={areadsc}>
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {getdata.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
