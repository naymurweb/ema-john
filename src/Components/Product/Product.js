import React from "react";
import "./Product.css";

const Product = ({ product, btnClick }) => {
  const { id, name, img, price, ratings, seller } = product;
  return (
    <div>
      <div className="product">
        <div className="product-info">
          <img src={img} alt="" />
          <h3>{name}</h3>
          <p className="price">price ${price}</p>

          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>rating: {ratings} start</small>
          </p>
        </div>
        <button onClick={() => btnClick(product)} className="product-btn">
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
