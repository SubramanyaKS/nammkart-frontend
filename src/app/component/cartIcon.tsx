'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import icon from '../assets/cart.svg';
import { CartIconProps } from '../utils/types';


const CartIcon = ({itemcount}:CartIconProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div>
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{itemcount}</span>
        <Image src={icon} alt='shopping' width={25} height={25}/>    
    </div>
  )
}

export default CartIcon