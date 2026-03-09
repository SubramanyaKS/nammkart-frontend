'use client'
import QuantityButton from '@/app/component/quantityButton';
import { useCart } from '@/app/context/cartContext';
import React from 'react';
import NoCart from './noCart';
// import IconButton from '@/app/component/iconbutton';
// import del from '../../assets/delete.svg';
import Ordersummary from '@/app/component/ordersummary';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🛒 Your Shopping Cart</h1>
          <p className="text-gray-600">Review and manage your selected items</p>
        </div>

        {state.items.length === 0 ? (
          <NoCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-4">
                  Cart Items ({state.items.length})
                </h2>

                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.productId} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">₹{item.price.toLocaleString()}</span>
                          <span>×</span>
                          <QuantityButton productid={item.productId} quantity={item.quantity} />
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-lg font-bold text-blue-600">
                            ₹{(item.quantity * item.price).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">Subtotal</p>
                        </div>

                        <button
                          onClick={() => handleRemove(item.productId)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 group"
                          title="Remove item"
                        >
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Ordersummary />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
