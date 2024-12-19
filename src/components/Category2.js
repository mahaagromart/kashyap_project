'use client';
import { useState } from 'react';
import img from "../app/assets/img/seed.webp";
import Image from "next/image";

const CategoryPage = () => {
  const categories = [
    { name: 'Apple', price: '₹2.99', image: 'img', category: 'Fruits' },
    { name: 'Carrot', price: '₹1.49', image: 'https://via.placeholder.com/150', category: 'Vegetables' },
    { name: 'Milk', price: '₹0.99', image: 'https://via.placeholder.com/150', category: 'Dairy' },
    { name: 'Rice', price: '₹10.99', image: 'https://via.placeholder.com/150', category: 'Grains' },
    { name: 'Chicken', price: '₹5.99', image: 'https://via.placeholder.com/150', category: 'Meat' },
    { name: 'Roundup', price: '₹1200', image: 'https://via.placeholder.com/150', category: 'Pesticides' },
    { name: 'Confidor', price: '₹850', image: 'https://via.placeholder.com/150', category: 'Pesticides' },
    { name: 'Curacron', price: '₹950', image: 'https://via.placeholder.com/150', category: 'Pesticides' },
    { name: 'Monocil', price: '₹700', image: 'https://via.placeholder.com/150', category: 'Pesticides' },
    { name: 'Thiodan', price: '₹650', image: 'https://via.placeholder.com/150', category: 'Pesticides' },
    { name: 'Rogor', price: '₹300', image: 'https://via.placeholder.com/150', category: 'Pesticides' },
    { name: 'Malathion', price: '₹500', image: 'https://via.placeholder.com/150', category: 'Pesticides' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % categories.length);
  };

  const prevCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + categories.length) % categories.length);
  };

  return (
    <div className="">
      {/* Category Section */}
      <div className="bg-white shadow-lg rounded-lg p-4 relative flex flex-col">
        <h2 className="text-xl font-bold text-green-700 mb-4 pb-4 text-left">Best Latest Categories</h2>

        {/* Left Arrow */}
        <button
          onClick={prevCategory}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-white p-3 rounded-full shadow-lg z-10"
        >
          &#8249;
        </button>

        {/* Display Categories */}
        <div className="flex justify-center items-center overflow-x-auto space-x-4 md:space-x-8 pb-4">
          {categories.slice(currentIndex, currentIndex + 8).map((category, index) => (
            <div
              key={index}
              className="min-w-[160px] md:min-w-[200px] bg-white text-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center border border-green-300 mb-4"
            >
              <Image
                src={img}
                alt={category.name}
                className="w-32 h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600">{category.category}</p>
              <h3 className="text-lg font-semibold text-green-700 mt-2">{category.name}</h3>
              <p className="text-md font-bold text-green-700">{category.price}</p>
              {/* Shop Now Button */}
              <button
                onClick={() => console.log(`Navigating to ${category.name} page`)} // You can replace this with a real navigation function
                className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextCategory}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-white p-3 rounded-full shadow-lg z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
