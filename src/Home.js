import React from "react";
import Homecards from "./cards/Homecards";
import MainImg from "./img/MainImg.jpg";
import cardimg from "./img/cardimg.jpg";
import jean from "./cards/jean.jpg";
import shoes from "./cards/shoes.jpg";
export default function Home() {
  return (
    <div className="container">
      <div className="home">
        <img src={MainImg} alt="" />
        <div id="dealtext">Deals Of The Day</div>
        <Homecards cardimg={cardimg} off={"20%"} item={"Men's Upperwear"} />
        <Homecards cardimg={jean} off={"25%"} item={"Men's Denim"} />
        <Homecards cardimg={shoes} off={"40%"} item={"Men's Footware"} />
      </div>
    </div>
  );
}
