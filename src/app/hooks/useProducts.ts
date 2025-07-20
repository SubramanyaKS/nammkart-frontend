import { useEffect, useState } from "react";
import { useProductContext } from "../context/productContext";
import React from "react";
import { Product } from "../utils/types";

const useProducts = ({params}:{params:{slug:string}})=>{
    const { slug } = React.use(params)
    const productID= slug;
    const { state }:any = useProductContext();
    const [product, setProduct] = useState<Product | null>(null);
  
    useEffect(() => {
      if (!productID) return;
  
      // Find the product from the global context
      const foundProduct = state.products.find(
        (product:Product) => product.productID === String(productID)
      );
      setProduct(foundProduct || null);
    }, [productID, state.products]);

    return {product}
}

export default useProducts;