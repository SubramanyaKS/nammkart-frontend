'use client'
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./cartIcon";
import { useCart } from "../context/cartContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {state}= useCart();
  const itemc=state.items?.length;

  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-6 py-2.5 shadow-md">
      
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">Nammkart</span>
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:hover:text-blue-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={'/products'}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:hover:text-blue-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent  md:hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 pl-4 pr-4 text-blue rounded-full lg:bg-blue-500 lg:text-white  lg:hover:text-white"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/cart">
              <CartIcon itemcount={itemc?itemc:0}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
