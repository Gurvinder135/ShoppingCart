import React from "react";
import cart from "../cards/cart.png";
import { Link } from "react-router-dom";
export default function Homecards({ cardimg, off, item }) {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={cardimg}></img>
      </div>
      <div className="cardboldtext"> Min {off} Off</div>
      <div className="cardtext"> On {item}</div>
      <Link to="/shop">
        <button id="button">
          <img src={cart}></img> Shop-Now
        </button>
      </Link>
    </div>
  );
}
