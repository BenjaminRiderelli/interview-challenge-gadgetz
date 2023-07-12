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
        <Route exact path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/404" element={<NotFound/>}/>
        <Route exact path="" element={<Navigate to="/products" />} />
        <Route path="*" element={<Navigate to="/404"/>} />
      </Routes>
    </main>
  );
}

export default App;
