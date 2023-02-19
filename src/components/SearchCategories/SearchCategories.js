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

// useState hooks for checking the selected category

const SearchCategories = ({ handleTypeSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTypeSelectLocal = (type) => {
    handleTypeSelect(type);
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
                : "category"
            }
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="types">
        {selectedCategory.types.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeSelectLocal(type)}
            className="type"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchCategories;
