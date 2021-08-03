import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import logo from "./img/logo.png";
import cart from "./img/cart.png";
import React, { useState } from "react";

function App() {
  const [cartqty, setCartqty] = useState(0);
  const [cartarr, setCartarr] = useState([]);
  // const [cartnum, setCartnum] = useState([
  //   {
  //     img="",
  //     quanity: 1,
  //   },
  // ]);
  const addToCart = (e) => {
    let check = 0;
    setCartqty((cartqty) => cartqty + 1);
    for (let index in cartarr) {
      if (
        cartarr[index].img ===
        e.target.parentElement.childNodes[0].firstChild.src
      ) {
        let tempar = [...cartarr];
        tempar[index].quantity = tempar[index].quantity + 1;
        setCartarr(tempar);
        check = 1;
        break;
      }
    }
    if (check === 0) {
      let tempobj = {
        img: e.target.parentElement.childNodes[0].firstChild.src,
        brand: e.target.parentElement.childNodes[1].textContent,
        desc: e.target.parentElement.childNodes[2].textContent,
        price: e.target.parentElement.childNodes[3].textContent,
        quantity: 1,
      };
      let tempar = [...cartarr];
      setCartarr([...tempar, tempobj]);
    }
  };
  const qtyChanged = (e) => {
    console.log(e.target.parentElement.parentElement.firstChild.lastChild.src);
    for (let index in cartarr) {
      if (
        cartarr[index].img ===
        e.target.parentElement.parentElement.firstChild.lastChild.src
      ) {
        if (e.target.value !== "0") {
          let tempar = [...cartarr];
          if (tempar[index].quantity > e.target.value) {
            setCartqty((cartqty) => cartqty - 1);
          } else if (tempar[index].quantity < e.target.value) {
            setCartqty((cartqty) => cartqty + 1);
          }

          tempar[index].quantity = e.target.value;
          setCartarr(tempar);
          break;
        } else {
          let tempar = [...cartarr];
          setCartqty((cartqty) => cartqty - 1);
          tempar.splice(index, 1);
          setCartarr(tempar);
          break;
        }
      }
    }
  };
  const final = () => {
    setCartqty(0);
    setCartarr([]);
    alert("Thank you for shopping with Us!");
  };
  return (
    <div>
      <Router>
        <ul className="navbar">
          <li>
            <NavLink id="home" activeStyle={{ color: "gray" }} exact to="/">
              <div>
                <img src={logo}></img>
              </div>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "gray" }} to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink id="cart" to="/cart">
              <div>
                <img src={cart}></img>
                <div>{cartqty}</div>
              </div>
            </NavLink>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cartarr={cartarr} qtyChanged={qtyChanged} final={final} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
