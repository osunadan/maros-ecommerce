import { React } from "react";
import CartWidget from "./Checkout/CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ isInNav }) => {
	if (isInNav) {
		return (
			<div className="containerNavbar">
				<Link className="nav-item--Enlace" to="/">
					<img className="navbar-brand" src="https://res.cloudinary.com/druw9azmh/image/upload/v1669158279/ecommerce-rect-coderhouse/logo_cpe0vj.png" alt="Logo de la tienda" />
				</Link>
				<ul className="navBar">
					<li className="nav-item">
						<Link className="nav-item--Enlace" to="/">
							Productos
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/status" className="nav-item--Enlace">
							Status
						</Link>
					</li>
				</ul>
				<Link className="enlaceCarrito" to={"/carrito"}>
					<CartWidget />
				</Link>
			</div>
		);
	} else {
		return (
			<div className="containerFooter">
				<ul className="navBar">
					<li>
						<a target="_blank" href="https://www.instagram.com/sietecreative/" className="foot-item">
							Instagram
						</a>
					</li>
					<li>
						<a className="foot-item" href="https://www.linkedin.com/company/siete-creative/">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		);
	}
};
export default Navbar;
