'use client'
import Button from '@/app/component/button';
import Review from '@/app/component/review';
import { useCart } from '@/app/context/cartContext';
import useProducts from '@/app/hooks/useProducts';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = ({params}:{params:{slug:string}}) => {
    const router = useRouter();
    const { dispatch } = useCart();
    const {product} = useProducts({params});
  
    if (!product) {
      return <div>Loading product details...</div>;
    }
    
    const handleAddToCart = (productId,name,price) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: { productId, name, price, quantity: 1 },
      });
      alert('Added to cart')
    };
  
    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="rounded"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className=" mt-4 text-lg font-semibold">
              Price: ₹{product.price}{" "}
              <span className="text-sm line-through text-gray-500">
                ₹{product.discount}
              </span>
            </p>
            <p className=" mt-4 text-lg">Brand: {product.brand}</p>
            <p className=" mt-4 text-lg">Rating: ⭐{product.rating}</p>
            <p className={`mt-4 text-lg ${product.available ? "text-green-500" : "text-red-500"}`}>
              {product.available ? "In Stock" : "Out of Stock"}
            </p>
            <Button
          classN=" mt-4 bg-blue-500 text-white" title='Go Back'
          OnClick={() => router.back()}
        />
        {product.available?<Button
          classN="bg-blue-500 text-white" title='Add to Cart'
          OnClick={() => {console.log("called");handleAddToCart(product.productId,product.name,product.discount)}}
        />:null}
          </div>
          <Review productId={product.productId}/>
        </div>
      </div>
    );
}

export default page