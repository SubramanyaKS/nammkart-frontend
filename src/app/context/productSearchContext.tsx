'use client'

import { createContext, ReactNode, useReducer } from 'react';
import { productSearchReducer } from '../reducer/search';
import { ProductSearchContextType, SearchState } from '../utils/types';

export const ProductSearchContext = createContext<ProductSearchContextType|null>(null);

const initialState:SearchState = {
  products: [],
  searchTerm: '',
  searchCategory:'',
};

export const ProductSearchProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchState, searchDispatch] = useReducer(productSearchReducer, initialState);

  return (
    <ProductSearchContext.Provider value={{ searchState, searchDispatch }}>
      {children}
    </ProductSearchContext.Provider>
  );
};