import { React, useState, useContext } from "react";
import Contador from "./Contador";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ productoEleguido }) => {
  // Estado del componente
  const [cantidad, setCantidad] = useState(0);

  // Constante para usar el contexto
  const { addToCart } = useContext(CartContext);

  // Función con la cantidad del producto seleccionado
  const onAdd = (qty) => {
    setCantidad(qty);
    addToCart(productoEleguido, qty);
  };

  return (
    <div>
      <img src={`${productoEleguido.img}`} alt="" />
      <div>
        <h2>{productoEleguido.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio, necessitatibus iusto odit cupiditate a quae tempora dolor earum laboriosam hic distinctio. Nemo odit laboriosam quasi! Temporibus fugit omnis deleniti?</p>
        <h3>${productoEleguido.price}</h3>
        <Contador stock={productoEleguido.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
