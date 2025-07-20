import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../utils/constant";
import { Action, State } from "../utils/types";

export const productReducer = (state:State, action:Action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null,searchTerm:'' };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
          searchTerm:'',
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          products: [],
          loading: false,
          error: action.payload,
          searchTerm:'',
        };
      default:
        return state;
    }
  };