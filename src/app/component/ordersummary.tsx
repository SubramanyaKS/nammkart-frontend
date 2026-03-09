import React from 'react'
import { useCart } from '../context/cartContext';
import Link from 'next/link';

const Ordersummary = () => {
    const { state } = useCart();
    const subtotal = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

    const shipping = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
    const tax = subtotal * 0.18; // 18% GST
    const totalAmount = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Order Summary</h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Items ({state.items.length})</span>
          <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : 'text-gray-800'}`}>
            {shipping === 0 ? 'FREE' : `₹${shipping}`}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax (GST 18%)</span>
          <span className="font-semibold">₹{tax.toFixed(2)}</span>
        </div>

        {subtotal < 500 && (
          <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded-lg">
            Add ₹{(500 - subtotal).toLocaleString()} more for free shipping!
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">Total</span>
          <span className="text-2xl font-bold text-blue-600">₹{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg text-center block"
      >
        Proceed to Checkout
      </Link>

      <Link
        href="/products"
        className="w-full mt-3 bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center block"
      >
        Continue Shopping
      </Link>
    </div>
  )
}

export default Ordersummary