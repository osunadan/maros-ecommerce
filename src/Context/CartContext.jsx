import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    isInCart(producto.id) ? sumarCantidad(producto, cantidad) : setCart([...cart, { ...producto, cantidad }]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const sumarCantidad = (productoPorAgregar, cantidad) => {
    const cartActualizado = cart.map((prodDelCarrito) => {
      if (productoPorAgregar.id === prodDelCarrito.id) {
        const productoActualizado = {
          ...prodDelCarrito,
          cantidad,
        };
        console.log(productoActualizado);
        return productoActualizado;
      } else {
        return prodDelCarrito;
      }
    });
    setCart(cartActualizado);
  };

  const cantidadDeProducto = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  const deleteCart = () => {
    setCart([]);
  };

  const deleteItem = (index) => {
    const copyCart = cart;
    copyCart.splice(index, 1);
    setCart([...copyCart]);
  };

  const totalUnidades = () => {
    let count = 0;
    const copiaCarrito = [...cart];
    copiaCarrito.forEach((prod) => {
      count = count += prod.cantidad;
    });
    return count;
  };

  const totalPrecioUnidad = () => {
    let count = 0;
    const copiaCarrito = [...cart];
    copiaCarrito.forEach((prod) => {
      count = count += prod.price * prod.cantidad;
    });
    return count;
  };

  return <CartContext.Provider value={{ cart, addToCart, deleteItem, totalUnidades, totalPrecioUnidad, deleteCart, cantidadDeProducto }}>{children}</CartContext.Provider>;
};

export default CartProvider;
