import React from 'react'
import StarRating from './starRating'
import Image from 'next/image'
import { ProductCardProps } from '../utils/types'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/cartContext'

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const router = useRouter();

  const handleAddToCart = (productId: string, name: string, price: number) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { productId, name, price, quantity: 1 },
    });
    // Show success toast instead of alert
    const event = new CustomEvent('cartUpdate', { detail: { message: 'Added to cart successfully!' } });
    window.dispatchEvent(event);
  };

  return (
    <div className="product-card group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Category Badge */}
      <div className='flex justify-end p-3'>
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-xs font-semibold text-blue-800 border border-blue-200">
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <div className='flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white'>
        <Image
          className='object-contain transition-transform duration-300 group-hover:scale-105'
          alt={product.productName}
          src={product.imageUrl}
          height={120}
          width={120}
        />
      </div>

      {/* Product Details */}
      <div className='p-4'>
        <h2 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors'>
          {product.productName}
        </h2>

        {/* Price Section */}
        <div className='flex items-center justify-center mb-3'>
          {product.isDiscount ? (
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-gray-500 line-through'>₹{product.price}</span>
              <span className='text-xl font-bold text-green-600'>₹{product.discountPrice}</span>
              <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium'>
                {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
              </span>
            </div>
          ) : (
            <span className='text-xl font-bold text-green-600'>₹{product.price}</span>
          )}
        </div>

        {/* Rating */}
        <div className='flex justify-center mb-4'>
          <StarRating rating={product.rating} numReview={1} />
        </div>

        {/* Action Buttons */}
        <div className='flex space-x-2'>
          <button
            onClick={() => router.push(`/products/${product.productID}`)}
            className='flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2'
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View</span>
          </button>

          {product.isAvailable ? (
            <button
              onClick={() => handleAddToCart(product.productID || '', product.productName, product.isDiscount ? product.discountPrice : product.price)}
              className='flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg'
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
              </svg>
              <span>Add to Cart</span>
            </button>
          ) : (
            <button
              disabled
              className='flex-1 bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2'
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>Out of Stock</span>
            </button>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none rounded-xl"></div>
    </div>
  )
}

export default ProductCard