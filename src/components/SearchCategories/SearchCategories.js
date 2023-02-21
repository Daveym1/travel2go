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

  const handleResultsFound = (results) => {
    if (results.length === 0) {
      setResultsFound(false);
    } else {
      setResultsFound(true);
    }
  };

  return (
    <div className="categories-container">
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategorySelect(category)}
            className={
              selectedCategory.name === category.name
                ? "category active"
                : "category p-3 "
            }
          >
            {category.name}
          </button>
        ))}
      </div>
      {categoryClicked && (
        <div className="types">
          {filteredTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeSelectLocal(type)}
              className="type inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              {getName(type)}
            </button>
          ))}
          {!resultsFound && <div className="no-results">No results found.</div>}
        </div>
      )}
    </div>
  );
};

export default SearchCategories;
