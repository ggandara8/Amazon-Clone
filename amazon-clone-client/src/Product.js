import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Art of Resilience by Ross Edgley</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/51eK5eCWRyL.jpg"
        alt="The Art of Resilience"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
