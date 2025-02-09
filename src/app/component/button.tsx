import React from 'react'
import { buttonProps } from '../utils/types';


const Button = ({classN,title,OnClick}:buttonProps) => {

  return (
        <button className= {`px-5 py-2 rounded-lg shadow-lg ${classN}`} onClick={OnClick}>{title}</button>
    
  )
}

export default Button;
