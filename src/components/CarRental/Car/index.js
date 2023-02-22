import "./style.css";

function Car(props) {
  const image = props.info.vehicleInfo.images.SIZE268X144;
  const name = props.info.vehicleInfo.vehicleExample;
  const description = props.info.vehicleInfo.description;
  const price = props.info.rates.USD.basePrices.DAILY;
  const seats = props.info.vehicleInfo.peopleCapacity;
  const bags = props.info.vehicleInfo.bagCapacity;
  const trans = props.info.vehicleInfo.transmissionTypeCode;

  return (
    <div className="col-md-3 mb-3">
      <div className="car card card-blog">
        <div className="card-image">
          <a href="#">
            <img className="img" src={image} />
          </a>
          {/* <div className="ripple-cont"></div> */}
        </div>
        <div className="table">
          <div className="d-flex justify-content-between mb-2">
              <div className="d-flex align-items-center">
                <i className='bx bx-user'></i>
                <span>{seats}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bx bx-briefcase-alt"></i>
                <span>{bags}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bx bx-briefcase-alt"></i>
                <span>{bags}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bx bxs-color"></i>
                <span>{trans}</span>
              </div>
          </div>

          <div className="d-flex justify-content-between mb-1">
            <div className="d-flex-col">
              <h6 className="category text-info p-0 mb-1" id="car-name">
                {name}
              </h6>
              <div className="p-0" id="car-model">
                {description}
              </div>
            </div>

            <h5 className="justify-content-end" id="car-price">
              ${price}
            </h5>
          </div>
          {/* <p className="card-description mb-1">{description}</p> */}

          <button
            type="button"
            className="btn"
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
