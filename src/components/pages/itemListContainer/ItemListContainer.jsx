import "./item.css";
const ItemListContainer = ({ saludo }) => {
  return (
    <div className="containerSaludo">
      <h3> {saludo} </h3>
    </div>
  );
};

export default ItemListContainer;
