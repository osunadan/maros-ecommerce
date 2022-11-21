import Navbar from "./components/Navbar";
import MainContainer from "./components/main/MainContainer";
import Cart from "./components/Checkout/Cart";
import ItemListContainer from "./components/product-cards/ItemListContainer";
import ItemDetailContainer from "./components/products-detail/ItemDetailContainer";
import CartProvider from "./Context/CartContext";
import Form from "./components/Checkout/Form";
import Status from "./components/Checkout/Status";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="containerPadre">
      <CartProvider>
        <Navbar />
        <MainContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoryid/:categoryName" element={<ItemListContainer />} />
          <Route path="/detail/:detalleid" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
