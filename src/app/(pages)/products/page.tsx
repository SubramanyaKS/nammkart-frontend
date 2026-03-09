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
  const context = useProductContext();
  
  if (!context) {
    return <div>Context not available</div>;
  }
  
  const { state } = context;
  const { products } = state;

  if (state.loading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <CategorySidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </main>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <CategorySidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error loading products</h3>
                  <div className="mt-2 text-sm text-red-700">{state.error}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const displayProducts = searchState.searchTerm || searchState.searchCategory ? searchState.products : products;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Sidebar */}
      <CategorySidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header Section */}
        <div className="mb-8">
          {/* <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">Discover Our Products</h1>
          <p className="text-gray-600 text-center mb-6">Find the perfect items for your needs</p> */}

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
              {searchState.searchTerm && `Search results for "${searchState.searchTerm}"`}
              {searchState.searchCategory && `Products in ${searchState.searchCategory}`}
              {!searchState.searchTerm && !searchState.searchCategory && 'All Products'}
              <span className="ml-2 text-sm text-gray-500">({displayProducts.length} items)</span>
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayProducts.map((product: Product, i: number) => (
              <ProductCard key={product.productID || i} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-5v2m0 0v2m0-2h2m-2 0h-2" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 text-center">Try adjusting your search or browse all categories.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Page;
