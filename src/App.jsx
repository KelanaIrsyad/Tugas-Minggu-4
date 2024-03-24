import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import Products from "./products/Products";
import DetailProduct from "./products/DetailProduct";
import Carts from "./carts/Carts";
import Layout from "./component/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="products" element={<Products />} />
        <Route path="/products/:productId" element={<DetailProduct />} />
        <Route path="carts" element={<Carts />} />
      </Route>
    </Routes>
  );
}

export default App;
