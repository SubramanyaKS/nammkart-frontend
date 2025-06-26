'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendurl } from '../utils/constant'
import { useProductSearch } from '../hooks/useProductSearch'
import { Category } from '../utils/types'

const CategorySidebar = () => {
    const [data, setData] = useState([]);
    const {searchDispatch} = useProductSearch();

    useEffect(() => {
      axios.get(`${backendurl}/api/category/`).then((res)=>{setData(res.data)}).catch(()=>console.log("Error"))
    }, [])

    
    const handleSearch=(category:string)=>{
        searchDispatch({ type: 'UPDATE_SEARCH_CATEGORY', payload: category });
    }

  return (
    <div>
      <aside className="w-64 bg-white shadow-md h-screen p-4 hidden md:block">
      <h2 className="p-4 text-center text-black text-lg border-b font-bold mb-4">Categories</h2>
      <nav className="mt-4">
      <ul className="space-y-2">
        <li className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer hover:text-blue-500">
        <a href="#" onClick={()=>handleSearch('')}>All</a>
      </li>
    {data.map((d:Category,i)=>(
        <li key={i} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer hover:text-blue-500">
        <a href="#" onClick={()=>handleSearch(d.name)}>{d.name}</a>
      </li>
    ))}
    </ul>
        
      </nav>
    </aside>
    </div>
  )
}

export default CategorySidebar