'use client'
import React from 'react';
import FormInput from './formInput';
import { FormProps } from '../utils/types';


export const Form = ({handleSubmit,handleChange,formData,title,buttonTitle}:FormProps) => {

  return (
    <div className="mt-5">
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      
      <div className="flex flex-wrap -mx-3 mb-6">
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <FormInput OnChange={handleChange} value={formData.productName} name="productName" title='Product Name' id='grid-product-name' placeholder='ABC' type='text' /></div>
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'> <FormInput OnChange={handleChange} name='brand' value={formData.brand} title='Brand' id='grid-brand' placeholder='XYZ' type='text' /></div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <FormInput OnChange={handleChange} value={formData.category} name='category' title='Category' id='grid-category' placeholder='Electronics' type='text' /></div>
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <FormInput OnChange={handleChange} value={formData.price.toString()}name='price' title='Price' id='grid-price' placeholder='1000' type='number' /></div>
              </div>

        <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                      <FormInput OnChange={handleChange} value={formData.description} name='description' title='Description' id='grid-description' placeholder='Any xyz' type='text' />
                  </div>

                  <div className="w-full px-3">
                      <FormInput OnChange={handleChange} value={formData.imageUrl} name='imageUrl' title='Image url' id='grid-image-url' placeholder='https://' type='text' />
                  </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <FormInput hidden={!formData.isDiscount}  OnChange={handleChange} title='Discount Price' value={formData.discountPrice.toString()} name='discountPrice' id='grid-discount' placeholder='1000' type='number' />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <FormInput OnChange={handleChange} value={formData.quantity.toString()} name='quantity' title='Quantity' id='grid-quantity' placeholder='10' type='number' />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <FormInput OnChange={handleChange} value={formData.rating.toString()} name="rating" title='Rating' id='grid-rating' placeholder='4.5' type='number' />
                  </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-300"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Available</label>
          </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <input
            type="checkbox"
            name="isDiscount"
            checked={formData.isDiscount}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-300"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Discount</label>
          </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <FormInput OnChange={handleChange} value={formData.seller} name="seller" title='Seller' id='grid-rating' placeholder='DEF' type='text' />
                  </div>
        </div>
       
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {buttonTitle}
        </button>
      </form>
    </div>
    </div>   
  );
};
