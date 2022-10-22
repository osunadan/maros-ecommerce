import React from "react";
import logo from "../media/logo.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <a className="nav-item--Enlace" href="../public/index.html">
        <img className="navbar-brand" src={logo} alt="" />
      </a>
      <ul className="navBar">
        <li className="nav-item">
          <a className="nav-item--Enlace" href="#">
            Productos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item--Enlace" href="#">
            Nosotros
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item--Enlace" href="#">
            Contacto
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
