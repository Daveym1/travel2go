import "./style.css";

function Car(props) {

  const image = props.info.vehicleInfo.images.SIZE268X144;
  const name = props.info.vehicleInfo.vehicleExample;
  const description = props.info.vehicleInfo.description;
  const price = props.info.rates.USD.basePrices.DAILY;
  const seats = props.info.vehicleInfo.peopleCapacity;
  const bags = props.info.vehicleInfo.bagCapacity;
  const trans = props.info.vehicleInfo.transmissionTypeCode;


  const getCarType = (description) => {
    let desc = description.toLowerCase()
    if (desc.includes("suv")) return "filter-suv";
    if (desc.includes("van")) return "filter-van";
    if (desc.includes("truck")) return "filter-truck";
    return "filter-sedan";
  }

  const carType = getCarType(description)

  return (
    <div className={"car col-md-3 my-3 " + carType}>
      <div className="card car-card">
        <div className="card-img-block">
          <img className="card-img-top" src={image} alt="Card image cap" />
        </div>
        <div className="card-body pt-0">
          <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{description}</h6>
            </div>
            <div>
              <h6 class="car-price">${price}</h6>
            </div>
          </div>
          <p className="card-text">
            Seats: {seats ? seats : "NA"} Bags: {bags ? bags : "NA"} - {trans === "M" ? "Manual" : "Auto"}
          </p>

          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={() =>
              props.addItem({
                name: name,
                image: image,
                description: description,
                price: parseFloat(price),
                id: name + String(props.index),
              })
            }
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car;
