import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCT_DETAIL,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  CLEAN_PRODUCTS,
  GET_FILTER_TAGS,
  MODIFY_PRODUCTS,
  CLEAN_PRODUCT_DETAIL,
  RETURN_PAGE,
} from "../actions/actions";

const initialState = {
  allProducts: [],
  products: [],
  filterTags: [],
  productDetail: {},
  error: null,
  prevPage: 1,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };

    case GET_PRODUCT_BY_NAME:
      if (!action.payload) {
        return {
          ...state,
          error: "Product doesn't exist",
        };
      } else {
        return {
          ...state,
          products: action.payload,
        };
      }

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
      };

    case CLEAN_PRODUCTS:
      return {
        ...state,
        allProducts: [],
        products: [],
      };

    case GET_FILTER_TAGS:
      return {
        ...state,
        filterTags: action.payload,
      };

    case MODIFY_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case CLEAN_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: {},
      };

    case RETURN_PAGE:
      return {
        ...state,
        prevPage: action.payload,
      };

    default:
      return state;
  }
}
