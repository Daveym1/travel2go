import { useState } from "react";
import { useNavigate } from "react-router-dom";
import carAPI from "../carApi";
import "./style.css";

const SearchFormSection = (props) => {
  const navigate = useNavigate();
  const [values, setValue] = useState({
    location: "",
    pickup: "",
    dropoff: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setValue({
      ...values,
      [name]: value,
    });
  };

  const fetchCarData = () => {
    carAPI
      .get("locations", { params: { name: values.location } })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // const cityOfInterest = data.find(city => city.countryCode === "UK")
        const cityOfInterest = data[0];
        console.log("at city filter", cityOfInterest);
        return cityOfInterest.cityID;
      })
      .then((cityID) => {
        console.log("at city id", cityID);
        const data = {
          date_time_pickup: values.pickup,
          location_pickup: cityID,
          location_return: cityID,
          date_time_return: values.dropoff,
        };

        carAPI
          .get("search", { params: data })
          .then(function (response) {
            console.log(response.data);
            props.setCarData(response.data);
            navigate("/cars");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchCarData();
    setValue({
      location: "",
      pickup: "",
      dropoff: "",
    });
  };

  return (
    <section
      id="search-form"
      className="search-form d-flex align-items-center flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>
            Search for a <span>City</span> to visit
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <form
          action=""
          role="form"
          className="car-form w-50 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-lg-12 col-md-12 form-group">
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="City Name"
                value={values.location}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6 col-md-6 form-group mt-3">
              <input
                type="datetime-local"
                name="pickup"
                className="form-control"
                placeholder="Delivery Date and Time"
                min={new Date()
                  .toISOString()
                  .slice(0, new Date().toISOString().lastIndexOf(":"))}
                value={values.pickup}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-md-6 form-group mt-3 mb-3">
              <input
                type="datetime-local"
                name="dropoff"
                className="form-control"
                placeholder="Return Date and Time"
                min={new Date()
                  .toISOString()
                  .slice(0, new Date().toISOString().lastIndexOf(":"))}
                value={values.dropoff}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchFormSection;
