import Car from "../Car";
import { CircularNav } from "../CircularNav";

function CarList(props) {
  const carDetails = props.rentals.vehicleRates;
  return (
    <div className="container">
      <CircularNav></CircularNav>
      <h1>Rental cars</h1>
      <div className="row gy-4">
        {Object.keys(carDetails)
          .slice(0, 20)
          .map((carInfo, index) => (
            <Car
              info={carDetails[carInfo]}
              addItem={props.addItem}
              index={index}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

export default CarList;
