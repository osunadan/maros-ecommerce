import React from "react";
import ItemCount from "../product-cards/ItemCount";

const ItemDetail = ({ productoEleguido }) => {
  const onAdd = (qty) => {
    const cantidadEscogida = qty;
  };
  return (
    <div>
      <img src={`${productoEleguido.img}`} alt="" />
      <div>
        <h2>{productoEleguido.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio, necessitatibus iusto odit cupiditate a quae tempora dolor earum laboriosam hic distinctio. Nemo odit laboriosam quasi! Temporibus fugit omnis deleniti?</p>
        <h3>${productoEleguido.price}</h3>
        <ItemCount stock={productoEleguido.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
