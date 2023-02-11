import axios from "axios";
import { PRODUCTS_ACTION } from "../action-Types";

export const fetchallproducts = () => async (dispatch) => {
  dispatch(fetchproducts());
  const response = await axios.get(" https://api.escuelajs.co/api/v1/products");
  dispatch(updateProducts(response.data));
};
export const fetchproducts = () => {
  return { type: PRODUCTS_ACTION.FETCH };
};
export const updateProducts = (products) => {
  return {
    type: PRODUCTS_ACTION.UPDATE,
    payload: products,
  };
};
