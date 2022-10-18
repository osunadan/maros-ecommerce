import React from "react";
import logo from "../media/logo.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <a href="../public/index.html">
        <img className="navbar-brand" src={logo} alt="" />
      </a>
      <ul className="navBar">
        <li className="nav-item">
          <a href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
