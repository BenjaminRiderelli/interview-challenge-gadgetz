import style from "./App.module.css";
import HEADER from "./components/header/header";
import ProductList from "./components/productlist/productlist";
import ProductDetails from "./components/productdetails/productdetails";
import NotFound from "./components/notfound/notfound";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <main className={style.app}>
      <HEADER />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route exact path="" element={<Navigate to="/products" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
