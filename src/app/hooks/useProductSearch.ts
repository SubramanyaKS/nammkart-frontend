import { useContext, useEffect } from "react";
import { ProductSearchContext } from "../context/productSearchContext";
import { searchProduct, searchProductByCategory } from "../utils/api";
import { Product } from "../utils/types";
export const useProductSearch = () => {
  const { searchState, searchDispatch } = useContext<any>(ProductSearchContext);

  const searchProducts = async () => {
    if (searchState.searchTerm) {
      const searchTerm = searchState.searchTerm
      const data= await searchProduct(searchTerm)
      const filteredData = data.filter((item:Product) => {
        return Object.values(item).join('').toLowerCase().includes(searchState.searchTerm.toLowerCase());
      });
      searchDispatch({ type: 'SET_SEARCH_RESULTS', payload: filteredData });
    }
    if (searchState.searchCategory) {
      const searchCategory = searchState.searchCategory;
      const data = await searchProductByCategory(searchCategory);
      const filteredData = data.filter((item:Product) => {
        return Object.values(item).join('').toLowerCase().includes(searchState.searchTerm.toLowerCase());
      });
      searchDispatch({ type: 'SET_SEARCH_RESULTS', payload: filteredData });
    }
    
  };
  

  useEffect(() => {
    if (searchState.searchTerm|| searchState.searchCategory) {
      searchProducts();
    }
  }, [searchState.searchTerm,searchState.searchCategory]);

  return { searchState, searchDispatch, searchProducts };
};