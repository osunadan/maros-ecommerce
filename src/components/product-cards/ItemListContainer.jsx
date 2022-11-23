import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import MainContainer from "../main/MainContainer";
import FadeLoader from "react-spinners/FadeLoader";
import { getDocs, query, where } from "firebase/firestore";
import { productsList } from "../../services/firebaseConfig";

function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoryName } = useParams();

	useEffect(() => {
		const ref = categoryName ? query(productsList, where("category", "==", categoryName)) : productsList;

		getDocs(ref)
			.then((res) => {
				const productos = res.docs.map((prod) => {
					return {
						id: prod.id,
						...prod.data(),
					};
				});
				setProductos(productos);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryName]);

	if (loading) {
		return <FadeLoader />;
	}

	return (
		<div className="itemListContainer">
			<MainContainer />
			<ItemList listaProductos={productos} />
		</div>
	);
}

export default ItemListContainer;
