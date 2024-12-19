'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import img from '../app/assets/img/logo.webp';
import Google from '../components/Googlet';
import "../styles/globals.css";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="bg-gradient-to-r from-green-200 to-white text-black shadow-lg rounded-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex justify-start space-x-2" onClick={() => window.location.href = '/'}>
          <Image src={img} alt="Logo" className="h-14 w-auto" />
        </div>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 mx-6 max-w-lg">
          <input
            type="text"
            placeholder="Search for Products, Brands and more"
            className="w-full p-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Navbar for Desktop */}
        <div className="hidden lg:flex items-center space-x-6">

          {/* Login Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2">
              <span className="material-icons">account_circle</span>
              <span>Login</span>
            </button>
            {/* Show dropdown on hover */}
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ul className="py-1">
                <li>
                  <Link
                    href="/Signin"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Signup"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <span className="material-icons" aria-hidden="true">storefront</span>
            <span>Become a Seller</span>
          </button>
          {/* Cart Icon */}
          <button className="flex items-center space-x-2">
            <span className="material-icons">shopping_cart</span>
            <span>Cart</span>
          </button>

          {/* Language Option with Icon */}
          <div className="relative">
            <Google />
          </div>

          {/* 3 Vertical Dot Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2">
              <span className="material-icons">more_vert</span>
            </button>
            {/* Show dropdown on hover */}
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ul className="py-1">
                <li>
                  <Link href="/profile" className="block px-4 py-2 hover:bg-green-100">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-green-100">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="/logout" className="block px-4 py-2 hover:bg-green-100">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Navbar Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-black focus:outline-none"
        >
          <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-green-500 text-white">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link href="/" className="hover:bg-green-400 py-2 px-4 rounded-md">
              Home
            </Link>
            <Link href="/shop" className="hover:bg-green-400 py-2 px-4 rounded-md">
              Shop
            </Link>
            <Link href="/about" className="hover:bg-green-400 py-2 px-4 rounded-md">
              About Us
            </Link>
            <Link href="/contact" className="hover:bg-green-400 py-2 px-4 rounded-md">
              Contact
            </Link>
            <Link href="/login" className="hover:bg-green-400 py-2 px-4 rounded-md">
              Login
            </Link>
            <Link href="/become-seller" className="hover:bg-green-400 py-2 px-4 rounded-md">
              Become a Seller
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
