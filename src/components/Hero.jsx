import React from "react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="heroContainer">
			<p className="titleHero">Siete Fashion Store</p>
			<ul className="CategoriesContainer">
				<li className="categorieItem">
					<Link className="categorieLink" to="/categoryid/pantalones">
						Pantalones
					</Link>
				</li>
				<li className="categorieItem">
					<Link className="categorieLink" to="/categoryid/blusas">
						Blusas
					</Link>
				</li>
				<li className="categorieItem">
					<Link className="categorieLink" to="/categoryid/sweaters">
						Sweaters
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Hero;
