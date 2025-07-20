'use client'
import Button from '@/app/component/button';
import ProductTable from '@/app/(pages)/admin/products/producttable';
import { useProductContext } from '@/app/context/productContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
    const { state } = useProductContext();
    const router = useRouter();
    const { products } = state;

  return (
    <div>
        <h3 className='text-center font-bold mt-4 mb-4 text-3xl'>Product List</h3>
        <div className='flex items-end justify-end mb-4'>
          <Button title={"Add Product"} OnClick={()=>router.push('/admin/addproduct')} classN='bg-blue-600 text-white '/>
        </div>
        <ProductTable products={products}/>
    </div>
  )
}

export default Page;