import { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="products" element={<ProductDetails />} />
      </Routes>
    </Fragment>
  );
};

export default App;
