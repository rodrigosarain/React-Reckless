import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  let saludo = "Hola Coder! Bienvenido";

  return (
    <div className="ItemListContainer">
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
