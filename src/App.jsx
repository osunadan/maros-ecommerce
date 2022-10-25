import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/product-cards/ItemListContainer";

function App() {
  return (
    <div className="containerPadre">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
