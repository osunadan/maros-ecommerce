import Item from "./Item";

function ItemList({ listaProductos }) {
  return (
    <div className="itemListInterno">
      {listaProductos.map((listaItems) => {
        return <Item key={listaItems.id} id={listaItems.id} title={listaItems.title} price={listaItems.price} img={listaItems.img} />;
      })}
    </div>
  );
}

export default ItemList;
