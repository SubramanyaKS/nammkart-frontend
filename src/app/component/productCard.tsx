  import React from 'react'
import StarRating from './starRating'
import Image from 'next/image'
import { Product } from '../utils/types'
import { useRouter } from 'next/navigation'
// import Button from './button'
import { useCart } from '../context/cartContext'
import cart from '../assets/cart.svg';
import eye from '../assets/eye.svg';
import IconButton from './iconbutton'

const ProductCard:React.FC<{product:Product}> = ({product}) => {

  const {dispatch} = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    const productId=product.productId;
    const name=product.name;
    const price=product.price;

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
      <div className=' flex items-center justify-center hover:w-full'>
      <Image className='product-image items-center justify-center' alt='image' src={product.imageUrl} height={100} width={100} />
      </div>
      <h2 className='text-cursive text-bold'>{product.name}</h2>
      <h4 className='text-success'>₹{product.price}</h4>
      <StarRating rating={product.rating} numReview={1}/>  
      <h4 className='hidden hover:flex'>{product.category}</h4>
      <div className='flex'>
      {/* <Button title='View Details' classN='bg-blue-600 text-white hover:bg-blue-700' OnClick={()=>{router.push(`/products/${product.productId}`)}}/> */}
      {/* <Button title='Add to Cart' classN='bg-gray-200 ml-2 text-gray-800 hover:bg-gray-300' OnClick={()=>{handleAddToCart()}}/> */}
      <IconButton src={eye}  title='View Details' classN='bg-blue-600 mt-1 mr-1 text-white hover:bg-blue-700' OnClick={()=>{router.push(`/products/${product.productId}`)}}/>
      {product.available?<IconButton src={cart} title='Add to Cart' classN='bg-gray-200 ml-1 mt-1 text-gray-800 hover:bg-gray-300' OnClick={()=>{handleAddToCart()}}/>
:null}</div>
<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
  <i className="fas fa-shopping-cart"></i>
</button>
<button className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
  <i className="fas fa-eye"></i>
</button>
</div>
    </div>
//  <div className="group relative w-72 bg-white shadow-lg rounded-lg overflow-hidden">
    //   <div className="overflow-hidden">
    //     <img
    //       src={product.imageUrl}
    //       alt="Product"
    //       className="w-56 h-56 object-cover transition-transform duration-300 group-hover:scale-110"
    //     />
    //   </div>
    //   <div className="p-4">
    //     <h3 className="text-lg font-semibold">{product.name}</h3>
    //     <p className="text-gray-500">$99.99</p>
    //   </div>
    //   <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     <button className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
    //       <i className="fas fa-shopping-cart"></i>
    //     </button>
    //     <button className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
    //       <i className="fas fa-eye"></i>
    //     </button>
    //   </div>
    // </div>
  )
}

export default ProductCard