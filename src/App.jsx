import "./App.css";
import Navbar from "./components/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Tienda en linea" />
    </div>
  );
}

export default App;