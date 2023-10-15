import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="containerNavbar">
      <Link to="/">
        <h4 className="logo">Reckless Love</h4>
      </Link>
      <ul className="categories">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Shop</li>
        </Link>
        <Link to="/">
          <li>Contact</li>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
