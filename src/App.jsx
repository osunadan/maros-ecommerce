import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/Cards/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Tienda en linea" />
    </div>
  );
}

export default App;
