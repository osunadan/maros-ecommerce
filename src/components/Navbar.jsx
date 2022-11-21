import React from "react";
import CartWidget from "./Checkout/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <Link className="nav-item--Enlace" to="/">
        <img className="navbar-brand" src="./images/logo.png" alt="Logo de la tienda" />
      </Link>
      <ul className="navBar">
        <li className="nav-item">
          <Link className="nav-item--Enlace" to="/">
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/status" className="nav-item--Enlace" href="#">
            Status
          </Link>
        </li>
      </ul>
      <Link to={"/carrito"}>
        <CartWidget />
      </Link>
    </div>
  );
};
export default Navbar;
