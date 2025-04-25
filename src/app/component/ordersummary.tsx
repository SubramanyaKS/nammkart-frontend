import React from 'react'
import { useCart } from '../context/cartContext';

const Ordersummary = () => {
    const { state} = useCart();
    const totalAmount = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

  return (
    <div className="pb-4 pt-2">
    <div className="card w-25 p-5 shadow-lg m-2">
      <h3 className="text-center text-xl text-cursive font-bold text-bluepurple">Order Summary</h3>
      <h6 className="mb-4">Items: <span className="m-2">{state.items.length}</span></h6>
      <h6 className="mb-4">Total Cost :<span className="m-2">${totalAmount}</span></h6>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 pl-4 pr-4 rounded-full">Proceed</button>
    </div>
    </div>
  )
}

export default Ordersummary