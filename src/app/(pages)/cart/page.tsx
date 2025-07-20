'use client'
import QuantityButton from '@/app/component/quantityButton';
import { useCart } from '@/app/context/cartContext';
import React from 'react';
import NoCart from './noCart';
import IconButton from '@/app/component/iconbutton';
import del from '../../assets/delete.svg';
import Ordersummary from '@/app/component/ordersummary';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  return (
    <div className="bg-white h-screen text-black p-4">
      <h2 className="text-2xl font-bold text-center">Your Cart</h2>
      {state.items.length === 0 ? (
        <NoCart/>
      ) : (
        <>
        <ul>
          {state.items.map((item) => (
            <li key={item.productId} className="flex justify-between items-center my-2">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                
              </div>
              <div><p>₹{item.price}</p></div>
              <QuantityButton productid={item.productId} quantity={item.quantity} />
              <div className="flex items-center">
               
                <span className="mr-4">Total: ₹{item.quantity*item.price}</span>
                <IconButton
                src={del}
                title='Remove'
                  OnClick={() => handleRemove(item.productId)}
                  classN="bg-red-500 text-white"
                />
                  
              </div>

            </li>
          ))}
        </ul>
        <Ordersummary/>
        </>
      )}
    </div>
  );
};

export default Cart;
