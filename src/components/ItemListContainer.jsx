import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="containerPadreTitle">
      <div className="itemListContainer">
        <div className="itemListTitle">{greeting}</div>
      </div>
    </div>
  );
};

export default ItemListContainer;
