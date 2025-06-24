import React from 'react'
import { FormInputProp } from '../utils/types'

const FormInput = ({id,title,type,placeholder,OnChange,value,name,hidden=false}:FormInputProp) => {
  return (
    
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
        {title}
      </label>
      <input disabled={hidden} name={name} className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id={id} type={type} placeholder={placeholder} onChange={OnChange} value={value}/>
    </>
  )
}

export default FormInput