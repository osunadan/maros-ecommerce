import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
  const onAdd = (seleccion) => {
    console.log(seleccion);
  };

  return (
    <>
      <div className="containerPadreTitle">
        <div className="itemListContainer">
          <div className="itemListTitle">{greeting}</div>
        </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </>
  );
}

export default ItemListContainer;
