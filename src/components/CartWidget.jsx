import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cart, totalUnidades } = useContext(CartContext);

  return (
    <div className="cartIconContainer">
      <span className="material-symbols-outlined">shopping_cart</span>
      <p>{cart.length === 0 ? "" : totalUnidades()}</p>
    </div>
  );
};

export default CartWidget;
