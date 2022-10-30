import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock/products";
import ItemList from "./ItemList";
import { getProductos } from "../../mock/products";

function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const { categoryName } = useParams();
	const productosFiltrados = products.filter((prod) => {
		return prod.category === categoryName;
	});

	useEffect(() => {
		if (categoryName) {
			setProductos(productosFiltrados);
		} else {
			getProductos()
				.then((productosObtenidos) => {
					setProductos(productosObtenidos);
				})
				.catch(() => {
					console.log("Algo salio mal wey");
				});
		}
	}, [categoryName]);

	return (
		<div className="itemListContainer">
			<ItemList listaProductos={productos} />
		</div>
	);
}

export default ItemListContainer;
