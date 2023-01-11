import React from "react";
import "./Card.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export const Card = ({ name, price, memory, image }) => {
  return (
    <div>
      <div className="card-container">
        <h3>{name}</h3>
        <img alt={`{Samsung ${name}}`} src={image} className="img" />
        <p>{`U$D ${price}`}</p>
        <p>{`${memory} GB`}</p>

        <Link to="/ItemDetail">
          <li href="#" className="ver-mas">
            Ver Mas
          </li>
        </Link>

        <button>+</button>
      </div>
    </div>
  );
};

export default Card;
