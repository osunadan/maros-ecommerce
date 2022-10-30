import React from "react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="heroContainer">
			Hero
			<p className="titleHero">Lorem ipsum dolor sit</p>
			<ul>
				<li>
					<Link to="/categoryid/pantalones">Pantalones</Link>
				</li>
				<li>
					<Link to="/categoryid/blusas">Blusas</Link>
				</li>
				<li>
					<Link to="/categoryid/sweaters">Sweaters</Link>
				</li>
			</ul>
		</div>
	);
}

export default Hero;
