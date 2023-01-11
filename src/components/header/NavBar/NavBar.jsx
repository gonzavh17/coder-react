import React from "react";
import CartWidget from "../CartWidget.jsx/CartWidget";
import Brand from "../Brand/Brand";
import "./NavBar.css";
import Cart from "../../Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="brand-container">
        <Brand />
      </div>

      <div className="categories-container">
        <Link to="/">
          <li className="categorie">Home</li>
        </Link>
        <Link to="/All">
          <li className="categorie">All</li>
        </Link>
        <Link to="/GalaxyA">
          <li className="categorie">Galaxy A</li>
        </Link>
        <Link to="/GalaxyZ">
          <li className="categorie">Galaxy Z</li>
        </Link>
        <Link to="/GalaxyS">
          <li className="categorie">Galaxy S</li>
        </Link>
        <Link to="/Contact">
          <li className="categorie">Contact</li>
        </Link>
      </div>

      <div className="cart-widget">
        <Link to="Cart">
          <CartWidget />
        </Link>
        
      </div>
    </div>
  );
}

export default NavBar;
