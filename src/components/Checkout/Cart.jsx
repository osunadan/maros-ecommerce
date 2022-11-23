import { React, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
	const { cart, deleteItem, totalPrecioUnidad, deleteCart } = useContext(CartContext);

	if (cart.length === 0)
		return (
			<h3 className="mensajeCarritoVacio">
				Aun no has agregado productos al carrito, te invitamos a <Link to="/"> volver al catalogo </Link> para que selecciones alguno
			</h3>
		);

	return (
		<div className="cartContainer">
			{cart.map((itemInCart, index) => {
				return (
					<div key={index} className="containerInternoCart">
						<div className="containerImg">
							<img className="imgProductCart" src={`${itemInCart.img}`} alt="" />
						</div>
						<div className="titleAndRemove">
							<p>{itemInCart.title}</p>
							<p
								className="botonAgregar"
								onClick={() => {
									deleteItem(
										index
									);
								}}>
								Remove Item
							</p>
						</div>
						<p>{itemInCart.cantidad}</p>
					</div>
				);
			})}
			<h3>Total:${totalPrecioUnidad()}</h3>
			<p className="botonGenerico" onClick={deleteCart}>
				Vaciar carrito
			</p>
			<Link className="botonGenerico" to="/checkout">
				Ir a pagar
			</Link>
		</div>
	);
}

export default Cart;
