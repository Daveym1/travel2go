import React, { useState, useEffect } from "react";
import "./SearchResults.css";

const SearchResults = ({ location, type }) => {
  const [places, setPlaces] = useState([]);
  console.log(places);
  useEffect(() => {
    // Create a new PlacesService object
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    // Define the search parameters
    const request = {
      location,
      radius: "1000",
      type: type === "" ? undefined : type, // Only add the type parameter if it is not empty
    };

    // Call the PlacesService object to retrieve the list of places
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
      }
    });
  }, [location, type]);

  // currently using css grid to display the search results

  return (
    <div className="grid-container">
      {places.map((place) => (
        <div key={place.place_id} className="grid-item">
          <img
            src={
              place.photos && place.photos.length > 0
                ? place.photos[0].getUrl()
                : ""
            }
            alt={place.name}
          />

          <h3>{place.name}</h3>
          <p>{place.formatted_address}</p>
          <p>{place.formatted_phone_number}</p>
          <a href={place.website} target="_blank" rel="noreferrer">
            {place.website}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
