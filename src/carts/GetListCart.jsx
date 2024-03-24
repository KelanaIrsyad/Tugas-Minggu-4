import React, { useState, useEffect } from "react"
import { Card, CardText, Col, Row, Button } from "react-bootstrap"

function GetListCart() {
  const [cart, setCart] = useState([])
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const getCart = () => {
      const existingCart = localStorage.getItem("cart")

      if (existingCart) {
        const cartItems = JSON.parse(existingCart)
        const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
        setTotalCartPrice(total.toFixed(2));
        setCart(cartItems)
      }
    };
    getCart()
  }, [])

  const handleRemoveItem = (productId) => {
    const updatedCart = [...cart]

    const productIndex = updatedCart.findIndex((item) => item.id === productId)

    updatedCart.splice(productIndex, 1)

    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCart(updatedCart);
    
    const totalUpdate = totalCartPrice.reduce((acc, item) => acc + item.price * item.qty, 0);
        setTotalCartPrice(totalUpdate.toFixed(2));
  };

  return (
    <div>
        <h3>Total Price: ${totalCartPrice}</h3>
        {cart.length > 0 ? 
      <Row className="mt-5">
        {cart.map((product) => (
            <Card className="mb-3 w-25" key={product.id}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Body>
                <Card.Img variant="top" className="mb-3 w-50" src={product.image} />
                <CardText>Quantity: {product.qty}</CardText>
                <CardText>Price: ${product.price * product.qty}</CardText>
                <Button variant="danger" onClick={() => handleRemoveItem(product.id)}>
                  Remove Item
                </Button>
              </Card.Body>
            </Card>
        ))}
      </Row> :
      <Row>
        <h1>Anda Belum memasukan barang</h1>

      </Row>
    }
    </div>
  );
}

export default GetListCart;
