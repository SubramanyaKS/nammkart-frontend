'use client'
import React from 'react';
import { Form } from '../../../component/form';
import { Product } from '@/app/utils/types';
import { updateProduct } from '@/app/utils/api';

const EditProduct = () => {
  const initialProduct = {
    id: '1',
    name: 'Sample Product',
    description: 'This is a sample product',
    price: 100,
    stock: 10,
  };

  const fields = [
    { name: 'name', label: 'Product Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'brand', label: 'brand', type: 'text' },
    { name: 'discount', label: 'Discount', type: 'number' },
    { name: 'quantity', label: 'Quantity', type: 'number' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'imageUrl', label: 'Image Url', type: 'text' },
    { name: 'rating', label: 'Rating', type: 'number' },
  ];

  const handleSubmit = (data: Product) => {
    console.log('Updated Product:', data);
    // Send to API
    updateProduct(data);
    
  };

  return <Form initialData={initialProduct} fields={fields} onSubmit={handleSubmit} />;
};

export default EditProduct;
