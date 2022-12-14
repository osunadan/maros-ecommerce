import Main from "./Main";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { productsList } from "../../services/firebaseConfig";

function MainContainer() {
	const [cat, setCat] = useState([]);

	useEffect(() => {
		getDocs(productsList).then((res) => {
			const productos = res.docs.map((prod) => {
				return {
					id: prod.id,
					...prod.data(),
				};
			});

			const categorias = productos.map((prod) => {
				return prod.category;
			});

			const removeDuplicates = (array) => {
				return array.filter((el, index) => array.indexOf(el) === index);
			};

			const categor√≠asSinDuplicados = removeDuplicates(categorias);
			setCat(categor√≠asSinDuplicados);
		});
	}, []);

	return <Main categorias={cat} />;
}
export default MainContainer;
