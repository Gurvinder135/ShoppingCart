import React from "react";
import Cartcard from "./cards/Cartcard";
export default function Cart({ cartarr, qtyChanged, final }) {
  const pricecal = (cartarr) => {
    let price = 0;
    cartarr.map((a) => {
      let c = a.price.slice(2);
      let b = parseInt(a.quantity);
      price = price + c * b;
    });
    return price.toFixed(2);
  };
  return (
    <div className="container">
      <div className="cart">
        <div id="dealtext"> Your Cart</div>
        <hr></hr>
        {cartarr.length > 0 ? (
          <div id="divide">
            {cartarr.map((a) => (
              <Cartcard
                cardimg={a.img}
                brand={a.brand}
                desc={a.desc}
                price={a.price}
                quantity={a.quantity}
                qtyChanged={qtyChanged}
              />
            ))}
            <div id="price">
              <div>Price</div>
              <div>${pricecal(cartarr)}</div>
              <div>Tax: ${(pricecal(cartarr) * 0.13).toFixed(2)}</div>
              <hr></hr>
              <div>
                Total: $
                {(
                  parseFloat(pricecal(cartarr)) +
                  parseFloat(pricecal(cartarr) * 0.13)
                ).toFixed(2)}
              </div>
              <button onClick={final}>Pay</button>
            </div>
          </div>
        ) : (
          <div className="empty">Cart is Empty</div>
        )}
      </div>
    </div>
  );
}
