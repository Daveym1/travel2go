import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner'
import carAPI from "../carApi";
import "./style.css";

const SearchFormSection = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    location: "",
    pickup: "",
    dropoff: "",
  });

  const minDateTime = new Date().toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"))

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const fetchCarData = () => {
    setIsLoading(true)
    carAPI
      .get("locations", { params: { name: values.location } })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const cityOfInterest = data[0];
        return cityOfInterest.cityID;
      })
      .then((cityID) => {
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
            navigate("/CarRental/cars");
            setIsLoading(false)
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false)
          });
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false)
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchCarData();
    setValues({
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
      {isLoading === true ?
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="orange"
          innerCircleColor="#800000"
          middleCircleColor="teal"
        />
        :

        <div className="container">
          <div className="section-title">
            <h2>
              Search for a <span>Car</span> to rent
            </h2>
            <p>
              We promise to get you the best deals on the market
            </p>
          </div>
          
          <form
            action=""
            role="form"
            className="car-form w-50 mx-auto"
            onSubmit={handleSubmit}
            data-aos="fade-up"
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
                  min={minDateTime}
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
                  min={minDateTime}
                  value={values.dropoff}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Search</button>
            </div>
 <br />       
<div className = "text-center">
<p>
Please select hire car times between 09:00 and 17:00
</p>
</div>

          </form>
        </div>
      }
    </section>
  );
};

export default SearchFormSection;
