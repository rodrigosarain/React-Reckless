// import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
// import FetchingData from "./components/pages/fetchingData/FetchingData";

import { BrowseRouter, Routes, Route } from "react-router-dom";
function App() {
  // let saludo = "Hola Coder! Bienvenido";

  return (
    // <div className="ItemListContainer">
    // {/* <Navbar /> */}
    // {/* <ItemListContainer saludo={saludo} /> */}
    // {/* <FetchingData /> */}
    // </div>
    <BrowseRouter>
      <Routes>
        <Route path="\" element={<ItemListContainer />}>
          {" "}
        </Route>
      </Routes>
    </BrowseRouter>
  );
}

export default App;
