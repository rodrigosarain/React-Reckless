import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <nav className="containerNavbar">
      <Link to="/">
        <h4 className="logo">Reckless Love</h4>
      </Link>
      <ul className="categories">
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <Link to="/category/Top">
          <li>Tops</li>
        </Link>
        <Link to="/category/Pants">
          <li>Pants</li>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} to={category.path}>
            <li>{category.name}</li>
          </Link>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};
