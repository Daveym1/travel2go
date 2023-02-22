const CreditCardDetails = ({ computeTotalAmount }) => {
  const serviceCharge = computeTotalAmount() > 0 ? 50 : 0;
  const totalCost = Number(serviceCharge + computeTotalAmount()).toFixed(2);

  return (
    <div className="col-md-4">
      <div className="payment-info">
        <div className="d-flex justify-content-between align-items-center">
          <span>Card details</span>
        </div>
        <span className="type d-block mt-3 mb-1">Card type</span>
        <label className="radio">
          <input type="radio" name="card" value="payment" checked readOnly />
          <span>
            <img
              width="30"
              src="https://img.icons8.com/color/48/000000/mastercard.png"
            />
          </span>
        </label>

        <label className="radio">
          <input type="radio" name="card" value="payment" />
          <span>
            <img
              width="30"
              src="https://img.icons8.com/officel/48/000000/visa.png"
            />
          </span>
        </label>

        <label className="radio">
          <input type="radio" name="card" value="payment" />
          <span>
            <img
              width="30"
              src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
            />
          </span>
        </label>

        <label className="radio">
          <input type="radio" name="card" value="payment" />
          <span>
            <img
              width="30"
              src="https://img.icons8.com/officel/48/000000/paypal.png"
            />
          </span>
        </label>
        <div>
          <label className="credit-card-label">Name on card</label>
          <input
            type="text"
            className="form-control credit-inputs"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="credit-card-label">Card number</label>
          <input
            type="text"
            className="form-control credit-inputs"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="credit-card-label">Date</label>
            <input
              type="text"
              className="form-control credit-inputs"
              placeholder="12/24"
            />
          </div>
          <div className="col-md-6">
            <label className="credit-card-label">CVV</label>
            <input
              type="text"
              className="form-control credit-inputs"
              placeholder="342"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="d-flex justify-content-between information">
          <span>Subtotal</span>
          <span>${Number(computeTotalAmount()).toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between information">
          <span>Service Charge</span>
          <span>${serviceCharge}</span>
        </div>
        <div className="d-flex justify-content-between information">
          <span>Total(Incl. taxes)</span>
          <span>${totalCost}</span>
        </div>
        <button
          className={
            parseFloat(totalCost) > 0
              ? "btn btn-primary btn-block d-flex justify-content-between mt-3 align-items-center w-100"
              : "btn btn-primary btn-block d-flex justify-content-between mt-3 align-items-center disabled w-100"
          }
          type="button"
        >
          <span>${totalCost}</span>

          <span className="d-flex align-items-center">
            Checkout<i className="bx bx-right-arrow-alt ms-1"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreditCardDetails;
