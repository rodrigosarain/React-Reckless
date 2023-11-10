import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const { cart, deleteProductById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <h3>cantidad: {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteForeverIcon color="primary" />
          </IconButton>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es : {total}</h2>

          <Link to="/checkout">
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
