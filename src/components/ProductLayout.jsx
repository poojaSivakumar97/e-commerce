import React from "react";

const ProductLayout = ({ product }) => {
  return (
    <div>
      <div class="product-card">
        <div class="product-image">
          <img src={product.images[0]} />
        </div>
        <div class="product-info">
          <h5>{product.title}</h5>
          <h6>${product.price}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
