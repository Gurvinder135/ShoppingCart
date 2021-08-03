import React from "react";
import cart from "../cards/cart.png";
import { Link } from "react-router-dom";
export default function Shopcards({ cardimg, brand, desc, price, addToCart }) {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={cardimg}></img>
      </div>
      <div className="cardboldtext"> {brand}</div>
      <div className="cardtext desc"> {desc}</div>
      <div className="cardtext"> {price}</div>

      <button id="button" onClick={addToCart}>
        <img src={cart}></img> Add-to-Cart
      </button>
    </div>
  );
}
