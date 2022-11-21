import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState(undefined);

  const { cart, totalPrecioUnidad, deleteCart } = useContext(CartContext);

  const total = totalPrecioUnidad();

  const enviarDatos = (e) => {
    e.preventDefault();
    const ordenDeCompra = {
      buyer: {
        name,
        lastName,
        adress,
        email,
        telefono,
      },
      items: cart,
      total: `${total}USD`,
      date: serverTimestamp(),
      status: "Compra recibida, pronto de procesara para hacer el envio",
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
  };

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAdress = (e) => setAdress(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
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
      <form className="formulario" onSubmit={enviarDatos}>
        <input className="formItem" type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name} />
        <input className="formItem" type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={lastName} />
        <input className="formItem" type="text" placeholder="Dirección" name="adress" onChange={handleAdress} value={adress} />
        <input className="formItem" type="email" placeholder="Email" name="email" onChange={handleEmail} value={email} />
        <input className="formItem" type="tel" placeholder="Telefono" name="telefono" onChange={handleTelefono} value={telefono} />
        <button>enviar</button>
      </form>
    </div>
  );
}

export default Form;
