import Image from 'next/image';
import React from 'react'
import cart from '../../assets/cart.svg';

const NoCart = () => {
  return (
    <div className='flex justify-center items-center mt-5'>
       <div>
       <Image src={cart} alt='cart' width={200} height={200}/>
        <h4 className='text-blue-500 font-bold text-2xl italic'>There is no items in your cart.</h4>
        <h6>Please add the products which you like.</h6>
       </div>
    </div>
  )
}

export default NoCart;