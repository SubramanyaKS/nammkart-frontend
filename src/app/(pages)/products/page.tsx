'use client'

import React from 'react'
import ProductCard from '../../component/productCard';
import { useProductContext } from '../../context/productContext';
import { Product } from '../../utils/types';
import SearchBar from '../../component/searchbar';
import { useProductSearch } from '@/app/hooks/useProductSearch';
import CategorySidebar from '@/app/component/categorysidebar';

const Page = () => {
  const { searchState } = useProductSearch();
  const { state } = useProductContext();
  const { products } = state;

  if (state.loading) {
    return <div>Loading...</div>;
  }
  if (state.error) {
    return <div>{state.error}</div>;
  }


  return (
    <div className="flex bg-gray-200 text-black">
    {/* Aside Navbar */}
   <CategorySidebar/>
  
    {/* Main Content */}
    <main className="flex-1 p-4">
      <h3 className="text-center mt-2 font-xl font-bold">Search for Products</h3>
      <div className="justify-center items-center flex mt-2">
        <SearchBar />
      </div>
      <div className="mt-4 items-center justify-center flex">
        {searchState.searchTerm ? (
          <div className="flex flex-wrap justify-center">
            {searchState.products.map((product: Product, i: number) => (
              <div
                className="flex lg:justify-between mb-3 md:justify-center"
                key={i}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) :
        (searchState.searchCategory?(<div className="flex flex-wrap justify-center">{searchState.products.map((product: Product, i: number) => (
          <div
            className="flex lg:justify-between mb-3 md:justify-center"
            key={i}
          >
            <ProductCard product={product} />
          </div>
        ))}</div>):
        
        (
          <div className="flex flex-wrap justify-center">
            {products.map((p: Product, i: number) => (
              <div
                className="flex lg:justify-between mb-3 md:justify-center"
                key={i}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  </div>
  )
}

export default Page;
