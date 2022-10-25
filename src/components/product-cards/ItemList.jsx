import React from "react";
import Item from "./Item";

function ItemList({ listaProductos }) {
  return (
    <div>
      {listaProductos.map((listaItems) => {
        return (
          <Item
            key={listaItems.id}
            title={listaItems.title}
            price={listaItems.price}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
