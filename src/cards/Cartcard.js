import React from "react";

export default function Cartcard({
  cardimg,
  brand,
  desc,
  price,
  quantity,
  qtyChanged,
}) {
  return (
    <div className="cartcard">
      <div className="cartcardimg">
        <img src={cardimg}></img>
      </div>
      <div className="cartcardboldtext"> {brand}</div>
      <div className="cartcardtext"> {desc}</div>
      <div className="cartcardtext"> {price}</div>
      <form>
        <input
          onChange={qtyChanged}
          type="number"
          id="quantity"
          min="0"
          value={quantity}
        />
        <label htmlFor="quantity">Quantity</label>
      </form>
      <hr></hr>
    </div>
  );
}
