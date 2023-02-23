import React, { useState, useEffect } from "react";
import "./SearchResults.css";

const SearchResults = ({ location, type }) => {
  const [places, setPlaces] = useState([]);

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
        // Save the list of places
        setPlaces(results);

        // For each place, retrieve the place details and update the places state with the full details
        results.forEach((place) => {
          service.getDetails(
            { placeId: place.place_id },
            (placeDetails, detailsStatus) => {
              if (
                detailsStatus ===
                window.google.maps.places.PlacesServiceStatus.OK
              ) {
                // Replace the incomplete place data with the complete place details
                setPlaces((prevState) =>
                  prevState.map((prevStatePlace) =>
                    prevStatePlace.place_id === place.place_id
                      ? placeDetails
                      : prevStatePlace
                  )
                );
              }
            }
          );
        });
      }
    });
  }, [location, type]);

  // Filter the places to show only the ones with images
  const placesWithImages = places.filter((place) => {
    return place.photos && place.photos.length > 0;
  });

  // Currently using css grid to display the search results
  return (
    <div id="alignItems">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5" id="SearchResults">
        {placesWithImages.slice(0, 9).map((place) => (
          <div
            key={place.place_id}
            className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
          >
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <div className="flex flex-column">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={
                    place.photos && place.photos.length > 0
                      ? place.photos[0].getUrl()
                      : ""
                  }
                  alt={place.name}
                />
              </div>
            </a>
            <div className="p-6">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {place.name}
              </h5>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-40">
                {place.formatted_address}
              </p>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-40">
                {place.formatted_phone_number}
              </p>
              <a
                href={place.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <span className="w-full">website</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
