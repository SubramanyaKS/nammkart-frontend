import Image from 'next/image';
import React from 'react'
import cart from '../../assets/cart.svg';
import Link from 'next/link';

const NoCart = () => {
  return (
    <div className='flex justify-center items-center min-h-[60vh]'>
      <div className='bg-white rounded-2xl shadow-xl p-8 text-center max-w-md mx-4'>
        <div className='mb-6'>
          <Image
            src={cart}
            alt='empty cart'
            width={120}
            height={120}
            className='mx-auto opacity-60'
          />
        </div>
        <h2 className='text-2xl font-bold text-gray-800 mb-3'>Your cart is empty</h2>
        <p className='text-gray-600 mb-6'>Looks like you haven&apos;t added any items to your cart yet. Start shopping to fill it up!</p>
        <Link
          href="/products"
          className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg'
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Start Shopping
        </Link>
      </div>
    </div>
  )
}

export default NoCart;