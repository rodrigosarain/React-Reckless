import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./cart.css";

const Cart = () => {
  const { cart, deleteProductById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <h1 className="title">Your Products </h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div key={product.id}>
            <h2 className="title">{product.title}</h2>
            <h3 className="title">{product.price}</h3>
            <h3 className="title">cantidad: {product.quantity}</h3>
            <div className="title">
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteForeverIcon color="primary" />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="total">
          <h2> El total a pagar es : {total}</h2>

          <Link to="/checkout">
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
