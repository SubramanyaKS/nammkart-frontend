import { SET_SEARCH_RESULTS, UPDATE_SEARCH_CATEGORY, UPDATE_SEARCH_TERM } from "../utils/constant";
import { Action, SearchState} from "../utils/types";

export const productSearchReducer = (state:SearchState, action:Action) => {
    switch (action.type) {
      case UPDATE_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      case SET_SEARCH_RESULTS:
        return { ...state, products: action.payload };
      case UPDATE_SEARCH_CATEGORY:
        return {...state, searchCategory:action.payload};
      default:
        return state;
    }
  };