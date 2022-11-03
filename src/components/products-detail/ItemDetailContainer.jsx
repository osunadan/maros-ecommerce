import React from "react";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../mock/products";

function ItemDetailContainer() {
	const [item, setItem] = useState({});
	const { detalleid } = useParams();

	useEffect(() => {
		getProductos().then((products) => {
			const prodSeleccionado = products.find((prod) => {
				return prod.id === detalleid;
			});
			setItem(prodSeleccionado);
		});
	}, []);

	return (
		<div>
			<ItemDetail productoEleguido={item} />
		</div>
	);
}

export default ItemDetailContainer;
