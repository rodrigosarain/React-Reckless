import CounterContainer from "../../common/counter/CounterContainer";
import "./details.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <section className="content">
      <img className="gallery" src={productSelected.img} alt="" />
      <article className="details">
        <div className="texts">
          <h2 className="details__company"> Reckless Love </h2>
          <h2 className="details__title"> {productSelected.title}</h2>
          <p className="details__description"> {productSelected.description}</p>
          <div className="details__prices">
            <p className="details__now">
              {productSelected.discount}
              <span className="details__discount">20%</span>{" "}
            </p>
            <p className="details__before"> {productSelected.price}</p>

            <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
          </div>
        </div>
      </article>
    </section>
  );
};
