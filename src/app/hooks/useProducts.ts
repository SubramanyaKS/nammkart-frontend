import { useEffect, useState } from "react";
import { useProductContext } from "../context/productContext";
import React from "react";
import { Product } from "../utils/types";

const useProducts = ({params}:{params:{slug:string}})=>{
    const { slug } = React.use(params)
    const productId= slug;
    const { state }:any = useProductContext();
    const [product, setProduct] = useState<Product | null>(null);
  
    useEffect(() => {
      if (!productId) return;
  
      // Find the product from the global context
      const foundProduct = state.products.find(
        (product:Product) => product.productId === String(productId)
      );
      setProduct(foundProduct || null);
    }, [productId, state.products]);

    return {product}
}

export default useProducts;