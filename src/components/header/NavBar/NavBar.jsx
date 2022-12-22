import React from "react";
import CartWidget from "../CartWidget.jsx/CartWidget";
import Brand from "../Brand/Brand";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="brand-container">
        <Brand />
      </div>

      <div className="categories-container">
        <li className="categorie">Home</li>
        <li className="categorie">All</li>
        <li className="categorie">Galaxy A</li>
        <li className="categorie">Galaxy Z</li>
        <li className="categorie">Galaxy S</li>
        <li className="categorie">Contact</li>
      </div>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
