import React from "react";
import shopmainimg from "./img/shopmainimg.jpg";
import Shopcards from "./cards/Shopcards.js";
import levis from "./cards/levis.webp";
import levit from "./cards/levit.jpg";
import pes from "./cards/pes.webp";
import fmj from "./cards/fmj.webp";
import levig from "./cards/levig.jpg";
import highg from "./cards/highg.webp";
import hms from "./cards/hms.webp";
import ps from "./cards/ps.webp";
import uss from "./cards/uss.webp";
export default function Shop({ addToCart }) {
  return (
    <div className="container">
      <div className="shop">
        <img src={shopmainimg} alt="" />
        <div id="dealtext">Featured Products</div>
        <Shopcards
          cardimg={levit}
          brand={"Levis"}
          desc={"Men's Round Neck T-shirt"}
          price={"$15.00"}
          addToCart={addToCart}
        />
        <Shopcards
          cardimg={levis}
          brand={"Levis"}
          desc={"Men Navy Slim Fit Solid Casual Shirt"}
          price={"$24.99"}
          addToCart={addToCart}
        />
        <Shopcards
          cardimg={pes}
          brand={"Peter England"}
          desc={"Men Blue Super Slim Fit Solid Casual Shirt"}
          price={"$29.99"}
          addToCart={addToCart}
        />

        <Shopcards
          cardimg={fmj}
          brand={"Flying Machine"}
          desc={
            "Men Blue Slim Tapered Michael Fit Mid-Rise Clean Look Stretchable Jeans"
          }
          price={"$34.99"}
          addToCart={addToCart}
        />
        <Shopcards
          cardimg={levig}
          brand={"Levis"}
          desc={
            "Men Blue 513 Straight Fit Mid-Rise Clean Look Stretchable Jeans"
          }
          price={"$39.99"}
          addToCart={addToCart}
        />
        <Shopcards
          cardimg={highg}
          brand={"Highlander"}
          desc={"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans"}
          price={"$34.99"}
          addToCart={addToCart}
        />

        <Shopcards
          cardimg={hms}
          brand={"H & M"}
          desc={"Men White Solid Trainers"}
          price={"$54.99"}
          addToCart={addToCart}
        />
        <Shopcards
          cardimg={ps}
          brand={"Puma"}
          desc={"Men Navy Blue & White Leather Sneakers"}
          price={"$49.99"}
          addToCart={addToCart}
        />
        <Shopcards
          cardimg={uss}
          brand={"U.S. Polo Assn."}
          desc={"Men Off-White GAIMAN Sneakers"}
          price={"$59.99"}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
