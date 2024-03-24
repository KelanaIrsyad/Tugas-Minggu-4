import React, { useState, useEffect } from "react"
import { Card, CardText, Col, Row, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import AddToCart from "../carts/AddToCart"

function DetailProduct() {
  const { productId } = useParams()
  const [products, setProducts] = useState({})
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      <Row className="mt-2">
        <Col xs={7}>
          <Card className="mb-3 w-90">
            <Card.Title>{products.title}</Card.Title>
            <Card.Body>
              <Card.Img variant="top" className="mb-3 w-50" src={products.image} />
              <CardText>Price: ${products.price}</CardText>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5}>
          <CardText>Des: <br />{products.description}</CardText>
          <AddToCart product={products} cart={cart} setCart={setCart} />

        </Col>
      </Row>
    </div>
  );
}

export default DetailProduct;
