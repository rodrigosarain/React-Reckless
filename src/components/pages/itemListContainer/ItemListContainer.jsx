import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log("Estoy en el shop");

  useEffect(() => {
    if (!categoryName) {
      let productsCollection = collection(db, "products");
      getDocs(productsCollection).then((res) => {
        let newArray = res.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setItems(newArray);
      });
    } else {
      let productsCollection = collection(db, "products");
    }
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
