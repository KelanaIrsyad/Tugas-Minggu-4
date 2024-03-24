import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import GetListProduct from "./GetListProduct";

function Products() {
  const { user, logout } = useAuth();

  return (
    <div>
      <GetListProduct />
    </div>
  );
}

export default Products;
