import { useState, useContext } from "react";
import Contador from "./Contador";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ productoEleguido }) => {
	const [show, setShow] = useState(true);

	const { addToCart, cantidadDeProducto } = useContext(CartContext);

	const onAdd = (qty) => {
		setShow(false);
		addToCart(productoEleguido, qty);
	};

	const cantidadSeleccionada = cantidadDeProducto(productoEleguido.id);

	return (
		<div className="containerDetail">
			<img className="imagenDetalle" src={`${productoEleguido.img}`} alt={productoEleguido.title} />
			<div className="infoProducto">
				<h2>{productoEleguido.title}</h2>
				<p>{productoEleguido.detail}</p>
				<h3>${productoEleguido.price}</h3>
				{show ? <Contador stock={productoEleguido.stock} initial={cantidadSeleccionada} onAdd={onAdd} /> : <Link to="/carrito">Ir al carrito</Link>}
			</div>
		</div>
	);
};

export default ItemDetail;
