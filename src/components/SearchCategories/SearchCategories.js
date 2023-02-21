import React, { useState } from "react";
import "./SearchCategories.css";

// Arrays of categories

const categories = [
  {
    name: "Day Out",
    types: [
      "amusement_park",
      "aquarium",
      "art_gallery",
      "bowling_alley",
      "museum",
      "tourist_attraction",
      "zoo",
      "stadium",
    ],
  },
  { name: "Night Out", types: ["night_club"] },
  {
    name: "Help",
    types: [
      "atm",
      "bank",
      "embassy",
      "hospital",
      "pharmacy",
      "police",
      "post_office",
      "veterinary_care",
    ],
  },
  { name: "Food & Drink", types: ["bakery", "bar", "cafe", "restaurant"] },
  {
    name: "Leisure",
    types: [
      "beauty_salon",
      "casino",
      "movie_theater",
      "gym",
      "hair_care",
      "library",
      "park",
      "spa",
    ],
  },
  {
    name: "Travel",
    types: [
      "bus_station",
      "car_rental",
      "gas_station",
      "parking",
      "subway_station",
      "taxi_stand",
      "train_station",
      "travel_agency",
    ],
  },
  {
    name: "Religious",
    types: ["church", "hindu_temple", "mosque", "synagogue"],
  },
  {
    name: "Shopping",
    types: [
      "clothing_store",
      "convenience_store",
      "department_store",
      "florist",
      "store",
      "liquor_store",
      "shopping_mall",
      "supermarket",
    ],
  },
];

// useState hooks for checking the selected category and whether a category button has been clicked

const SearchCategories = ({ handleTypeSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [resultsFound, setResultsFound] = useState(true);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCategoryClicked(true);
    setResultsFound(true);
  };

  const handleTypeSelectLocal = (type) => {
    handleTypeSelect(type);
  };

  function getName(type) {
    const newName = type.replace("_", " ");

    return newName;
  }

  const filteredTypes = categories.filter(
    (category) => category.name === selectedCategory.name
  )[0].types;

  /*   const handleResultsFound = (results) => {
      if (results.length === 0) {
        setResultsFound(false);
      } else {
        setResultsFound(true);
      }
    }; */

  return (
    <div id="alignItems">
      <div id="SearchCategories">
        <div className="categories" id="alignItems">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategorySelect(category)}
              className={
                selectedCategory.name === category.name
                  ? "category active text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                  : "category p-3 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
              }
              type="button">
              {category.name}
            </button>
          ))}
        </div>
        {categoryClicked && (

          <div className="types" id="alignItems">
            {filteredTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeSelectLocal(type)}
                type="button"
                className="type text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
              >
                {getName(type)}
              </button>
            ))}
            {!resultsFound && <div className="no-results">No results found.</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCategories;