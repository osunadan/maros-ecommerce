import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

function Form() {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [adress, setAdress] = useState("");
	const [email1, setEmail1] = useState("");
	const [email2, setEmail2] = useState("");
	const [telefono, setTelefono] = useState("");
	const [orderId, setOrderId] = useState(undefined);
	const [err, setErr] = useState("");

	const { cart, totalPrecioUnidad, deleteCart } = useContext(CartContext);

	const total = totalPrecioUnidad();

	const enviarDatos = (e) => {
		e.preventDefault();
		if (email1 === email2) {
			const ordenDeCompra = {
				buyer: {
					name,
					lastName,
					adress,
					email1,
					telefono,
				},
				items: cart,
				total: `${total}USD`,
				date: serverTimestamp(),
				status: "Compra recibida, pronto se procesara para hacer el envio",
			};

			const orderList = collection(database, "orders");

			addDoc(orderList, ordenDeCompra)
				.then((res) => {
					deleteCart();
					setOrderId(res.id);
				})
				.catch((err) => {
					console.log("Algo salio mal wey", err);
				});
		} else {
			setErr("Los emails no coinciden");
		}
	};

	const handleName = (e) => setName(e.target.value);
	const handleLastName = (e) => setLastName(e.target.value);
	const handleAdress = (e) => setAdress(e.target.value);
	const handleEmail1 = (e) => setEmail1(e.target.value);
	const handleEmail2 = (e) => setEmail2(e.target.value);
	const handleTelefono = (e) => setTelefono(e.target.value);

	if (orderId) {
		return (
			<>
				<h3>Gracias por tu compra</h3>
				<p>Te proporcionamos el id de tu compra con el cual podras verificar el estatus de tu orden: {`${orderId}`}</p>
				<Link to="/">Volver al catalogo</Link>
			</>
		);
	}

	return (
		<div className="formularioContainer">
			<div>
				<h3>Tus productos</h3>
				{cart.map((itemInCart, index) => {
					return (
						<div key={index} className="containerInternoCart">
							<div className="containerImg">
								<img
									className="imgProductCart"
									src={`${itemInCart.img}`}
									alt=""
								/>
							</div>
							<div>
								<p>{itemInCart.title}</p>
							</div>
							<p>{itemInCart.cantidad}</p>
							<p>${totalPrecioUnidad()}</p>
						</div>
					);
				})}
			</div>
			<Link to="/carrito">Volver al carrito</Link>
			<form className="formulario" onSubmit={enviarDatos}>
				<h3>Llena tus datos para completar tu compra</h3>
				<input className="formItem" type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name} />
				<input className="formItem" type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={lastName} />
				<input className="formItem" type="text" placeholder="Dirección" name="adress" onChange={handleAdress} value={adress} />
				<input className="formItem" type="email" placeholder="Email" name="email1" onChange={handleEmail1} value={email1} />
				<input className="formItem" type="email" placeholder="Ingresa de nuevo tu email" name="email2" onChange={handleEmail2} value={email2} />
				<p>{err}</p>
				<input className="formItem" type="tel" placeholder="Telefono" name="telefono" onChange={handleTelefono} value={telefono} />
				<button>enviar</button>
			</form>
		</div>
	);
}

export default Form;
