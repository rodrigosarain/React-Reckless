import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import { serverTimestamp } from "firebase/firestore";

import { db } from "../../../firebaseConfig";

import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./ofi.css";
const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div className="id-container">
          <h2>Gracias por su compra, su N° de comprobante es {orderId}</h2>
          <div className="kep">
            <Link to="/Shop">Seguir comprando</Link>
          </div>
        </div>
      ) : (
        <form className="formik" onSubmit={handleSubmit}>
          <input
            className="formik"
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            className="formik"
            type="text"
            placeholder="Ingresa tu telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            className="formik"
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={handleChange}
          />
          <button className="button" type="submit">
            Comprar
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
