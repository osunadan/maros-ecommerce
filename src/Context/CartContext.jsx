import { react, createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Estado del contexto
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (producto, cantidad) => {
    isInCart(producto.id) ? sumarCantidad(producto, cantidad) : setCart([...cart, { ...producto, cantidad }]);
  };

  // Función para ver si ya estaba en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // Función para sumar la cantidad del producto, si ya estaba en el carrito
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

  // Función para tener el numero del producto seleccionado por el usuario
  const cantidadDeProducto = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  // Función para vaciar el carrito
  const deleteCart = () => {
    setCart([]);
  };

  // Función para eliminar un solo producto del carrito
  const deleteItem = (index) => {
    const copyCart = cart;
    copyCart.splice(index, 1);
    setCart([...copyCart]);
  };

  // Función para sumar unidades totales del carrito
  const totalUnidades = () => {
    let count = 0;
    const copiaCarrito = [...cart];
    copiaCarrito.forEach((prod) => {
      count = count += prod.cantidad;
    });
    return count;
  };

  // Función para sumar el precio de los productos agregados para tener un total
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
