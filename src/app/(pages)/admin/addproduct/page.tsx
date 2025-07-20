'use client'
import { Form } from '@/app/component/form';
import useProductData from '@/app/hooks/useProductData';
import React from 'react'

const Page = () => {
    const {formData,handleChange,handleSubmit} = useProductData();

  return (
    
    <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} title='Add Product' buttonTitle='Add Product'/>
  )
}

export default Page