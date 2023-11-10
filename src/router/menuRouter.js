import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import Home from "../components/pages/home/Home.jsx";
import CheckoutOficial from "../components/pages/checkoutOfi/CheckoutOfi.jsx";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
  {
    id: "shop",
    path: "/Shop",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutOficial,
  },
];
