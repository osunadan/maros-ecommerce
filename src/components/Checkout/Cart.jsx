import { React, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, deleteItem, totalPrecioUnidad, deleteCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <h1>
        Aun no has agregado productos al carrito, te invitamos a <Link to="/">volver al catalogo</Link> para que selecciones alguno
      </h1>
    );

  return (
    <>
      <div className="cartContainer">
        {cart.map((itemInCart, index) => {
          return (
            <div key={index} className="containerInternoCart">
              <div className="containerImg">
                <img className="imgProductCart" src={`${itemInCart.img}`} alt="" />
              </div>
              <div className="titleAndRemove">
                <p>{itemInCart.title}</p>
                <p
                  onClick={() => {
                    deleteItem(index);
                  }}>
                  Remove Item
                </p>
              </div>
              <p>{itemInCart.cantidad}</p>
            </div>
          );
        })}
      </div>
      <h3>Total:${totalPrecioUnidad()}</h3>
      <button onClick={deleteCart}>Vaciar carrito</button>
      <Link to="/checkout">Ir a pagar</Link>
    </>
  );
}

export default Cart;
