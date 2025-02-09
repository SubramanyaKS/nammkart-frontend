import React from 'react'
import { ButtonProps } from '../utils/types'


const Submitbutton = ({title}:ButtonProps) => {
  return (
    <div className='flex justify-center'>
      <button
        type="submit"
        className="w-full px-5 text-center inline-flex items-center justify-center bg-black hover:tracking-widest font-semibold text-white py-2 rounded-3xl hover:text-white hover:bg-blue-400 transition duration-300"
      >
        {title}
      </button>
      
    </div>
  )
}

export default Submitbutton