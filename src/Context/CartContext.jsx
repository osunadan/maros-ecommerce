import { react, createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Estado del contexto
  const [cart, setCart] = useState([]);

  console.log(cart);

  // Función para agregar al carrito
  const addToCart = (producto, cantidad) => {
    if (isInCart(producto.id)) {
      alert("Este producto ya esta en el carrito");
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  // Función para ver si ya estaba en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // Función para vaciar el carrito
  const deleteCart = () => {
    setCart([]);
  };

  // Función para eliminar un solo producto del carrito
  const deleteItem = (index) => {
    alert(index);
    const copyCart = cart;
    copyCart.splice(index, 1);
    setCart([...copyCart]);
  };

  return <CartContext.Provider value={{ cart, addToCart, deleteItem }}>{children}</CartContext.Provider>;
};

export default CartProvider;
