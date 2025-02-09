import Image from 'next/image'
import React from 'react'
import icon from '../assets/cart.svg';

const CartIcon = ({itemcount}) => {
  return (
    <div>
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{itemcount}</span>
        <Image src={icon} alt='shopping' width={25} height={25}/>    
    </div>
  )
}

export default CartIcon