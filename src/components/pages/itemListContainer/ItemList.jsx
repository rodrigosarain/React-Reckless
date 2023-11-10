import ProductCard from "../../common/productCard/ProductCard";
import "./Item.css";
const ItemList = ({ items }) => {
  return (
    <section className="ProductCards">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
