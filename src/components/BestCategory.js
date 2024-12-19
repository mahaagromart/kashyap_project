'use client';
import { useState } from 'react';
import img from "../app/assets/img/seed.webp";
import Image from "next/image";

const CategoryPage = () => {
  const categories = [
    { name: 'Apple', price: '₹2.99', image: img, category: 'Fruits' },
    { name: 'Carrot', price: '₹1.49', image: img, category: 'Vegetables' },
    { name: 'Milk', price: '₹0.99', image: img, category: 'Dairy' },
    { name: 'Rice', price: '₹10.99', image: img, category: 'Grains' },
    { name: 'Chicken', price: '₹5.99', image: img, category: 'Meat' },
    { name: 'Bringle', price: '₹5.99', image: img, category: 'Bringle' },
    { name: 'Soyabean', price: '₹5.99', image: img, category: 'Soyabean' },
    { name: 'Coriander', price: '₹5.99', image: img, category: 'Coriander' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 7) % categories.length);
  };

  const prevCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Category Section */}
      <div className="md:w-3/4 bg-white shadow-lg rounded-lg p-4 relative flex flex-col">
        <h2 className="text-xl font-bold text-green-700 mb-4 pb-4 text-left"> Special Categories</h2>

        {/* Left Arrow */}
        <button
          onClick={prevCategory}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-white p-3 rounded-full shadow-lg z-10"
        >
          &#8249;
        </button>

        {/* Display 5 categories */}
        <div className="flex justify-center items-center overflow-x-auto space-x-4 md:space-x-8 pb-4">
          {categories.slice(currentIndex, currentIndex + 5).map((category, index) => (
            <div
              key={index}
              className="min-w-[160px] md:min-w-[200px] bg-white text-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center border border-green-300 mb-4"
            >
              <Image
                src={category.image}
                alt={category.name}
                className="w-32 h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600">{category.category}</p>
              <h3 className="text-lg font-semibold text-green-700 mt-2">{category.name}</h3>
              <p className="text-md font-bold text-green-700">{category.price}</p>
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

      {/* Advertising Section */}
      <div className="w-full md:w-1/4 bg-green-50 shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 text-green-700">Sponsored</h2>
        <div className="space-y-4">
          <div className="bg-green-100 text-green-900 font-semibold rounded-lg shadow-md p-4 text-center">
            <Image
              src={img}
              alt="Sponsored Ad"
              className="w-full h-[17rem] rounded-lg"  // Set height to 17rem
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
