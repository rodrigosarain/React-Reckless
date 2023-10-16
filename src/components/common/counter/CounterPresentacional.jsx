import "./counter.css";
const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className="counterButtons">
      <div className="input">
        <button className="sumrest" onClick={sumar}>
          +
        </button>
        <h4 className="number"> {contador} </h4>
        <button className="sumrest" onClick={restar}>
          -
        </button>
      </div>
      <div>
        <button className="cart" onClick={() => onAdd(contador)}>
          Add to cart 🛒
        </button>
      </div>
    </div>
  );
};

export default CounterPresentacional;
