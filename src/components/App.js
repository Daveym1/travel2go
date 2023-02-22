import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchCategories from "../components/SearchCategories/SearchCategories";
import SearchResults from "../components/SearchResults/SearchResults";
import "../index.css";

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
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-700 text-3xl flex justify-center p-2">Travel2Go</h1>
      </header>
      <div className="search-container ml-10 mr-10">
        <SearchBar handleSelect={handlePlaceSelect} />
        <SearchCategories setType={setType} handleTypeSelect={setType} />
        {location.lat && location.lng && (
          <SearchResults location={location} type={type} />
        )}
      </div>
    </div>
  );
}

export default App;
