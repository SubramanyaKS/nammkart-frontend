'use client'
import UpdateForm from '@/app/component/updateform';
import useProducts from '@/app/hooks/useProducts';
import React from 'react'

const Page = ({params}:{params:{slug:string}}) => {
    const {product} = useProducts({params});
  
    if (!product) {
      return <div>Loading product details...</div>;
    }
      return <UpdateForm initialData={product}/>
    
}

export default Page