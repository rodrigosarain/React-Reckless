import { Navbar } from "./components/layout/navbar/Navbar";
// import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import FetchingData from "./components/pages/fetchingData/FetchingData";
function App() {
  // let saludo = "Hola Coder! Bienvenido";

  return (
    <div className="ItemListContainer">
      <Navbar />
      {/* <ItemListContainer saludo={saludo} /> */}
      <FetchingData />
    </div>
  );
}

export default App;
