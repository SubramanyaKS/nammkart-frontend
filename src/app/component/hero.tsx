'use client'
import React from 'react'
import Image from "next/image";
import img from '../assets/shop.jpeg';
import { useRouter } from 'next/navigation';


const Hero = () => {

    const router = useRouter();

  return (
    <div className="relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen gap-8">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Discover Amazing Deals <br />
              <span className="text-blue-600">For Your Shopping</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-6">
              Explore our wide range of products and enjoy exclusive discounts. Shop now and elevate your lifestyle.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button onClick={()=>router.push('/products')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Image
              src={img}
              alt="Shopping"
              className="w-full rounded-lg shadow-lg"
            />
            {/* Decorative Blob */}
            <div className="absolute -top-12 -right-12 bg-blue-100 w-48 h-48 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero