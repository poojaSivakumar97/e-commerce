import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchallproducts } from "../dux/products/action";
import ProductLayout from "./ProductLayout";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallproducts());
  }, []);
  return (
    <div className="products">
      {products?.map((prod) => (
        <ProductLayout key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Products;
