import { React, useContext } from "react";
import { CartContext, deleteItem } from "../Context/CartContext";

function Cart() {
  const { cart, deleteItem } = useContext(CartContext);

  return (
    <div className="cartContainer">
      {cart.map((itemInCart, index) => {
        return (
          <div className="containerInternoCart">
            <div className="containerImg">
              <img className="imgProductCart" src={`${itemInCart.img}`} alt="" />
            </div>
            <div className="titleAndRemove">
              <p>{itemInCart.title}</p>
              <a
                onClick={() => {
                  deleteItem(index);
                }}>
                Remove Item
              </a>
            </div>
            <p>{itemInCart.cantidad}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
