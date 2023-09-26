import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="containerNavbar">
      <h4 className="logo">Reckless Love</h4>
      <ul className="categories">
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
