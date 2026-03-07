'use client'
// import IconButton from '@/app/component/iconbutton';
import ImageMagnifier from '@/app/component/imageMagnifier';
import Review from '@/app/component/review';
import { useCart } from '@/app/context/cartContext';
import useProducts from '@/app/hooks/useProducts';
// import cartIcon from '../../../assets/cart.svg';
// import backIcon from '../../../assets/left-arrow.svg';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = ({params}:{params:{slug:string}}) => {
    const router = useRouter();
    const { dispatch } = useCart();
    const {product} = useProducts({params});

    if (!product) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      );
    }

    const handleAddToCart = (productId: string, name: string, price: number) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: { productId, name, price, quantity: 1 },
      });
      // Show success message
      const event = new CustomEvent('cartUpdate', { detail: { message: 'Added to cart successfully!' } });
      window.dispatchEvent(event);
    };

    const discount = product.isDiscount ? ((product.price - product.discountPrice) / product.price) * 100 : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
                  <div className="rounded-lg overflow-hidden">
                    <ImageMagnifier
                      src={product.imageUrl}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.productName}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">⭐</span>
                    <span className="font-semibold text-gray-800">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Price Section */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  {product.isDiscount ? (
                    <>
                      <span className="text-3xl font-bold text-green-600">
                        ₹{product.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                        {discount.toFixed(0)}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-green-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Brand:</span>
                    <span className="ml-2 text-gray-800">{product.brand}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Rating:</span>
                    <span className="ml-2 text-gray-800">⭐ {product.rating}/5</span>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.isAvailable
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      product.isAvailable ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    {product.isAvailable ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => router.back()}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Go Back</span>
                </button>

                {product.isAvailable ? (
                  <button
                    onClick={() => handleAddToCart(product.productID||'', product.productName, product.isDiscount ? product.discountPrice : product.price)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="flex-1 bg-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Out of Stock</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <Review productId={product.productID} />
          </div>
        </div>
      </div>
    );
}

export default Page