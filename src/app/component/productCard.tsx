import React from 'react'
import StarRating from './starRating'
import Image from 'next/image'
import { ProductCardProps } from '../utils/types'
import { useRouter } from 'next/navigation'
// import Button from './button'
import { useCart } from '../context/cartContext'
import cart from '../assets/cart.svg';
import eye from '../assets/eye.svg';
import IconButton from './iconbutton'
import cartIcon from '../assets/cart.svg';
import eyeIcon from '../assets/eye.svg';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { dispatch } = useCart();
  const router = useRouter();

  const handleAddToCart = (productId, name, price) => {
    console.log(name);
    dispatch({
      type: 'ADD_ITEM',
      payload: { productId, name, price, quantity: 1 },
    });
    alert('Added to cart')
  };

  return (
    <div className="product-card group relative w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className='flex justify-end'>
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">{product.category}</span>
      </div>
      <div className=' flex items-center justify-center'>
        <Image className='product-image items-center justify-center hover:w-32 ' alt='image' src={product.imageUrl} height={100} width={100} />
      </div>
      <h2 className='text-cursive text-black text-bold'>{product.productName}</h2>
      {product.isDiscount ? <div className='flex items-center justify-center'><h4 className='text-red-500'><s>₹{product.price}</s></h4><h4 className='m-1 text-green-500'>₹{product.discountPrice}</h4></div> : <h4 className='text-green-500'>₹{product.price}</h4>}
      <StarRating rating={product.rating} numReview={1} />
      <h4 className='hidden hover:flex'>{product.category}</h4>
      <div className='flex'>
        <IconButton src={eye} title='View Details' classN='bg-blue-600 mt-1 mr-1 text-white hover:bg-blue-700' OnClick={() => { router.push(`/products/${product.productID}`) }} />
        {product.isAvailable ? <IconButton src={cart} title='Add to Cart' classN='bg-gray-200 ml-1 mt-1 text-gray-800 hover:bg-gray-300' OnClick={() => { handleAddToCart(product.productID, product.productName, product.isDiscount ? product.discountPrice : product.price) }} />
          : null}</div>
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={() => { handleAddToCart(product.productID, product.productName, product.isDiscount ? product.discountPrice : product.price) }} className="bg-white text-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <Image src={cartIcon} alt='cart' width={20} height={20} />
        </button>
        <button onClick={() => { router.push(`/products/${product.productID}`) }} className="bg-white text-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <Image src={eyeIcon} alt='eye' width={20} height={20} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard