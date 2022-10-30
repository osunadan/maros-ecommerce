import React from "react";
import logo from "../media/logo.png";
import CartWidget from "./CartWidget";
import { Link, Routes, Route } from "react-router-dom";

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
			</ul>
			<CartWidget />
		</div>
	);
};
export default Navbar;
