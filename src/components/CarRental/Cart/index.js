import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem";
import CreditCardDetails from "../CreditCardDetails";
import "./style.css";

const Cart = (props) => {
  const navigate = useNavigate();

  const computeTotalAmount = () => {
    return props.cart.reduce((sum, item) => sum + item.count * item.price, 0);
  };

  return (
    <div className="container mt-5 p-3 rounded cart">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="product-details mr-2">
            <div
              className="d-flex flex-row align-items-center go-back"
              onClick={() => navigate("/CarRental/cars")}
            >
              <i className="bx bx-arrow-back"></i>
              <span className="ms-2">Continue Exploring</span>
            </div>
            <hr />
            <h6 className="mb-0">Shopping cart</h6>
            <div className="d-flex justify-content-between">
              <span>
                You have {props.cart.length} unique items in your cart
              </span>
            </div>

            {props.cart.map((item, index) => (
              <CartItem
                item={item}
                addItem={props.addItem}
                removeItem={props.removeItem}
                clearItem={props.clearItem}
                key={index}
              />
            ))}
            {props.cart.vehicleExample}
          </div>
        </div>

        <CreditCardDetails computeTotalAmount={computeTotalAmount} />
      </div>
    </div>
  );
};

export default Cart;
