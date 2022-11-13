import { useState, useContext } from "react";
import Contador from "./Contador";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ productoEleguido }) => {
  // Estado para mostrar el contador o el boton de ir a carrito
  const [show, setShow] = useState(true);

  // Constante para usar el contexto
  const { addToCart, cantidadDeProducto } = useContext(CartContext);

  // Función con la cantidad del producto seleccionado
  const onAdd = (qty) => {
    setShow(false);
    addToCart(productoEleguido, qty);
  };

  // Obteniendo la cantidad del producto seleccionado
  const cantidadSeleccionada = cantidadDeProducto(productoEleguido.id);

  return (
    <div>
      <img src={`${productoEleguido.img}`} alt={productoEleguido.title} />
      <div>
        <h2>{productoEleguido.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio, necessitatibus iusto odit cupiditate a quae tempora dolor earum laboriosam hic distinctio. Nemo odit laboriosam quasi! Temporibus fugit omnis deleniti?</p>
        <h3>${productoEleguido.price}</h3>
        {show ? <Contador stock={productoEleguido.stock} initial={cantidadSeleccionada} onAdd={onAdd} /> : <Link to="/carrito">Ir al carrito</Link>}
      </div>
    </div>
  );
};

export default ItemDetail;
