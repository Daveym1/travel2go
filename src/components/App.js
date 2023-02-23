import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import travel2gologo from "../assets/images/travel2go-logo.jpg"
import MainApp from "./MainApp";

import "../index.css";
import CarRental from "./CarRental/index.js";

function App() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [type, setType] = useState(null);

  const handlePlaceSelect = (address) => {
    // Use the Geocode API to get the latitude and longitude for the selected address
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setLocation({ lat, lng });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/CarRental/*" element={<CarRental />} />
      <Route path="/" element={<MainApp 
      travel2gologo = {travel2gologo}
      handlePlaceSelect = {handlePlaceSelect}
      setType = {setType}
      location = {location}
      type = {type}
       />} />

    
        
      </Routes>
    </Router>
  );
}

export default App;
