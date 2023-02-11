import { PRODUCTS_ACTION } from "../action-Types";

const DEFAULT_STATE = {
  isLoading: false,
  products: [],
  hasError: null,
};

const productReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case PRODUCTS_ACTION.FETCH: {
      return { ...state, isLoading: true };
    }
    case PRODUCTS_ACTION.UPDATE: {
      return { ...state, isLoading: false, products: payload };
    }
    case PRODUCTS_ACTION.ERROR: {
      return { ...state, hasError: true };
    }

    default:
      return state;
  }
};
export default productReducer;
