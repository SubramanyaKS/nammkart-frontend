'use client'
import React, { useState } from 'react'
import { Product } from '../utils/types';
import { updateProduct } from '../utils/api';
import { Form } from './form';
import { useRouter } from 'next/navigation';
  interface FormProps {
    initialData: Product;
  }

const UpdateForm = ({
    initialData,
  }: FormProps)=> {
    const router = useRouter();
    const [formData, setFormData] = useState<Product>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      updateProduct(formData);
      router.push('/admin/products/')
    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <Form handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} title='Edit Product' buttonTitle='update product'/>
  )
}

export default UpdateForm;