'use client'
import { productReducer } from "../reducer/product";
import { createContext, useReducer, useContext, useEffect, ReactNode} from "react";
import axios from "axios";
import { ProductContextType, State } from "../utils/types";
import { backendurl } from "../utils/constant";

const initialState: State = {
    products: [],
    error: null,
    loading: false,
  };

const ProductContext = createContext<ProductContextType | undefined>(
    undefined
  );

export const ProductProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  
  useEffect(() => {
    axios
      .get(`${backendurl}/api/products/`)
      .then((response) => {
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
      });
  }, []);

  return (
    <ProductContext.Provider value={{ state}}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};