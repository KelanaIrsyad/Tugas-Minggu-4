import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GetListProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Daftar produk: ", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Gagal mengambil data produk: ", error.response.data);
      }
    };
    fetchProduct();
  }, []);

  const handleProductClick = (products) => {
    navigate(`/products/${products.id}`);
  };

  return (
    <div>
      <Row className="mt-5">
        {products.map((products) => (
          <Card
            key={products.id}
            className="mb-3 w-25"
            onClick={() => handleProductClick(products)}
          >
              <CardTitle>{products.title}</CardTitle>
              <Card.Body>
              <Card.Img
                variant="top"
                className="mb-3 w-50"
                src={products.image}
              />
                  <CardText>Price: ${products.price}</CardText>
              </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}
export default GetListProduct;
