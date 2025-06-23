'use client'
import IconButton from '@/app/component/iconbutton';
import ImageMagnifier from '@/app/component/imageMagnifier';
import Review from '@/app/component/review';
import { useCart } from '@/app/context/cartContext';
import useProducts from '@/app/hooks/useProducts';
import cartIcon from '../../../assets/cart.svg';
import backIcon from '../../../assets/left-arrow.svg';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = ({params}:{params:{slug:string}}) => {
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

    const discount = ((product.price-product.discountPrice||0)/product.price)*100;
  
    return (
        <div className="bg-white mx-auto p-4 text-black h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <ImageMagnifier
            src={product.imageUrl}
            // alt={product.productName}
            width={500}
            height={500}
            />
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 font-bold mb-4">{product.productName}</h1>
            <p className="text-gray-800 mb-2">{product.description}</p>
            <p className=" mt-4 text-lg text-black font-semibold">
              Price: ₹{product.isDiscount?product.discountPrice:product.price}{" "}
              <span className="text-sm line-through text-red-500">
                ₹{product.isDiscount?product.price:product.price}
              </span>
              <span className=' text-sm m-1 text-blue-500'>{discount.toFixed(2)}% Off</span>
            </p>
            <p className=" mt-4 text-black text-lg">Brand: {product.brand}</p>
            <p className=" mt-4 text-black text-lg">Rating: ⭐{product.rating}</p>
            <p className={`mt-4 text-lg ${product.isAvailable ? "text-green-500" : "text-red-500"}`}>
              {product.isAvailable ? "In Stock" : "Out of Stock"}
            </p>
           <div className='flex'>
           <IconButton src={backIcon}
          classN=" bg-blue-600 mt-1 mr-1 text-white hover:bg-blue-700" title='Go Back'
          OnClick={() => router.back()}
        />
        {product.isAvailable?<IconButton src={cartIcon}
          classN="bg-blue-600 mt-1 mr-1 text-white hover:bg-blue-700" title='Add to Cart'
          OnClick={() => {console.log("called");handleAddToCart(product.productID,product.productName,product.isDiscount?product.discountPrice:product.price)}}
        />:null}
           </div>
          </div>
          <Review productId={product.productID}/>
        </div>
      </div>
    );
}

export default Page