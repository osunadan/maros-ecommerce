import React from "react";
import { Link } from "react-router-dom";

function Item({ id, title, price, img }) {
	return (
		<div className="cardContainer">
			<Link to={`/detail/${id}`}>
				<div key={id} className="contentCard">
					<img className="imgCard" src={`${img}`} alt="Foto de prueba"></img>
					<p className="cardTitle">{title}</p>
					<p className="cardPrice">USD {price}</p>
				</div>
			</Link>
		</div>
	);
}

export default Item;
