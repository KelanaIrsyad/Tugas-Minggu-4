import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function AddToCart({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(1); // State for product quantity

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = async () => {
    const productToAdd = { ...product, qty: quantity };
    
    const existingCart = localStorage.getItem("cart");
    let cartItems = [];

    try {
      const response = await axios.post('/cart', {
        body: JSON.stringify(productToAdd),
      });
  
      if (response.ok) {
        alert(`"${product.title}" successfully added to cart!`);
        // Update cart in the component's state
        const updatedCart = await response.json();
        setCart(updatedCart);
      } else {
        // Handle potential errors
      }
    } catch (error) {
      // Handle network or server errors
    }

    if (existingCart) {
      cartItems = JSON.parse(existingCart);
    }

    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].qty += quantity;
    } else {
      cartItems.push(productToAdd);
      alert(`"${product.title}" successfully added to cart!`);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));

    setCart(cartItems);
  };

  return (
    <div>
      <div className="d-flex">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          className="mx-2"
          value={quantity}
          onChange={handleQuantityChange}
        />
      <Button variant="primary" onClick={addToCart}>
        Add to Cart
      </Button>
      </div>
    </div>
  );
}

export default AddToCart;
