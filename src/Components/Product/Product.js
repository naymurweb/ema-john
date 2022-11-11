import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { id, name, img, price, ratings, seller } = props.product;
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
        <button className="product-btn">
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
