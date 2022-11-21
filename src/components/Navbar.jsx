import React from "react";
import logo from "../media/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <Link className="nav-item--Enlace" to="/">
        <img className="navbar-brand" src={logo} alt="" />
      </Link>
      <ul className="navBar">
        <li className="nav-item">
          <Link className="nav-item--Enlace" to="/">
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-item--Enlace" href="#">
            Contacto
          </a>
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
