'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendurl } from '../utils/constant'
import { useProductSearch } from '../hooks/useProductSearch'
import { Category } from '../utils/types'

const CategorySidebar = () => {
    const [data, setData] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const {searchDispatch} = useProductSearch();

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await axios.get(`${backendurl}/api/category/`);
          setData(res.data);
        } catch (error) {
          console.log("Error fetching categories:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCategories();
    }, []);

    const handleSearch = (category: string) => {
        setSelectedCategory(category);
        searchDispatch({ type: 'UPDATE_SEARCH_CATEGORY', payload: category });
    };

    const categoryIcons: Record<string, string> = {
      'All': '🛍️',
      'Electronics': '📱',
      'Clothing': '👕',
      'Books': '📚',
      'Home': '🏠',
      'Sports': '⚽',
      'Beauty': '💄',
      'Toys': '🧸',
      'Food': '🍕',
      'Automotive': '🚗',
    };

    const getCategoryIcon = (categoryName: string) => {
      return categoryIcons[categoryName] || '📦';
    };

  return (
    <div>
      <aside className="w-64 bg-white shadow-xl h-screen p-6 hidden md:block border-r border-gray-200">
        <div className="sticky top-0">
          <h2 className="text-center text-gray-800 text-xl font-bold mb-6 pb-4 border-b-2 border-blue-100">
            🏷️ Categories
          </h2>

          {loading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-10 bg-gray-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : (
            <nav className="space-y-2">
              <div
                onClick={() => handleSearch('')}
                className={`group flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedCategory === ''
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <span className="text-lg mr-3">{getCategoryIcon('All')}</span>
                <span className="font-medium">All Products</span>
                {selectedCategory === '' && (
                  <svg className="w-4 h-4 ml-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

              {data.map((category: Category, i) => (
                <div
                  key={i}
                  onClick={() => handleSearch(category.name)}
                  className={`group flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <span className="text-lg mr-3">{getCategoryIcon(category.name)}</span>
                  <span className="font-medium">{category.name}</span>
                  {selectedCategory === category.name && (
                    <svg className="w-4 h-4 ml-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Quick Stats</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Categories:</span>
                <span className="font-medium">{data.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected:</span>
                <span className="font-medium text-blue-600">
                  {selectedCategory || 'All'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default CategorySidebar