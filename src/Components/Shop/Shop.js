import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const [cart, setCart] = useState([]);
  const cartClick = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  let price = 0;
  let shipping = 0;
  cart.forEach((item) => {
    console.log(item);
    price = price + item.price;
    shipping = shipping + item.shipping;
  });
  const tax = (price * 10) / 100;
  const total = price + shipping + tax;

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            btnClick={cartClick}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <div className="cart-content">
        <h1>Order Summary</h1>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Shop;
