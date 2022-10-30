import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/product-cards/ItemListContainer";
import ItemDetailContainer from "./components/products-detail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="containerPadre">
			<Navbar />
			<Hero />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/categoryid/:categoryName" element={<ItemListContainer />} />
				<Route path="/detail/:detalleid" element={<ItemDetailContainer />} />
			</Routes>
		</div>
	);
}

export default App;
