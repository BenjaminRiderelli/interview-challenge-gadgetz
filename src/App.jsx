import style from "./App.module.css";
import NavBar from "./components/navbar/navbar";
import ProductList from "./components/productlist/productlist";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <main className={style.app}>
      <NavBar/>
      <Routes>
        <Route path="/products" element={<ProductList/>} />
      </Routes>
    </main>
  );
}

export default App;
