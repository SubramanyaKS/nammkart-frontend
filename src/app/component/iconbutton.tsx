import React from 'react'
import { buttonProps } from '../utils/types'
import Image from 'next/image'

const IconButton = ({classN,title,OnClick,src}:buttonProps) => {
  return (
    <button className= {`flex  flex-wrap px-2 py-2 rounded-lg shadow-lg ${classN}`} onClick={OnClick}>
        <Image src={src} alt='icon' width={20} height={20}/>
        {title}
    </button>
  )
}

export default IconButton