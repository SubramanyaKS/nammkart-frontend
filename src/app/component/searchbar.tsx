import Image from 'next/image'
import React from 'react'
import icon from '../assets/search.svg';
import { useRouter } from 'next/navigation';
import { useProductSearch } from '../hooks/useProductSearch';

const SearchBar = () => {
  const { searchState, searchDispatch } = useProductSearch();
  const router = useRouter();

  const handleSearch = (e:any) => {
    // console.log("click",e.target.value);
    searchDispatch({ type: 'UPDATE_SEARCH_TERM', payload: e.target.value });
    // router.push("/search");
  };
  
  return (
    
    <div className="max-w-[480px] w-full px-4 pb-4">
        <div className="relative">
            <input  value={searchState.searchTerm}
        onChange={(e) => handleSearch(e)} type="text" name="q" className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200" placeholder="search"/>
            <button type="submit">
               <div className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-300"> <Image src={icon} alt='search' /></div>
            </button>
        </div>
    </div>
  )
}

export default SearchBar