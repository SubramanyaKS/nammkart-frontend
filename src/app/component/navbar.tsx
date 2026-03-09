'use client'
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./cartIcon";
import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { logout } from "../utils/api";


const Navbar: React.FC = () => {
  const {authState,dispatch}=useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const {state}= useCart();
  const router = useRouter();
  const itemc=state.items?.length||0;
  
  const handleLogout = async() => {
    dispatch({ type: "LOGOUT" });
    await logout();
    localStorage.removeItem("user");
    router.push("/login");
  };
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50 px-4 sm:px-6 py-3">
      
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          <span className="self-center text-xl font-bold whitespace-nowrap">Nammkart</span>
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
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
          <ul className="flex flex-col mt-4 border border-white/20 rounded-lg bg-white/10 backdrop-blur-md md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L2 12.414V19a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-9-9z"/>
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                href={'/products'}
                className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                </svg>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Contact</span>
              </Link>
            </li>
            {authState.isAuthenticated ? (
              <li>
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                  <span>Profile</span>
                </Link>
              </li>
            ) : null}
            {!authState.isAuthenticated ? (
              <li>
                <Link
                  href="/login"
                  className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h1zM14 2H6a1 1 0 00-1 1v1H4a1 1 0 00-1 1v10a1 1 0 001 1h1v1a1 1 0 001 1h8a1 1 0 001-1v-1h1a1 1 0 001-1V6a1 1 0 00-1-1h-1V3a1 1 0 00-1-1zM9 5a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                  <span>Login</span>
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 w-full text-left"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
                  </svg>
                  <span>Logout</span>
                </button>
              </li>
            )}
            <li>
              <Link
                href="/cart"
                className="flex items-center py-2 pl-3 pr-4 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <CartIcon itemcount={itemc}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
