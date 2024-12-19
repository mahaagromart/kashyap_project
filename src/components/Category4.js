import React from 'react';
import Image from 'next/image'; // Next.js Image component
import img from "../app/assets/img/seed.webp";
import { FaArrowUp } from 'react-icons/fa'; // Up arrow icon

const categories = [
  { name: 'Fruits', offer: '20% Off', imgSrc: img },
  { name: 'Vegetables', offer: '15% Off', imgSrc: img },
  { name: 'Dairy', offer: 'Buy 1 Get 1 Free', imgSrc: img },
  { name: 'Grains', offer: '10% Off', imgSrc: img },
  { name: 'Pesticides', offer: '5% Off', imgSrc: img },
  { name: 'Fertilizers', offer: '20% Off', imgSrc: img },
  { name: 'Animal Equipment', offer: '15% Off', imgSrc: img },
  { name: 'Seeds', offer: '10% Off', imgSrc: img },
  { name: 'Herbs', offer: '25% Off', imgSrc: img },
  { name: 'Soil', offer: '10% Off', imgSrc: img },
  { name: 'Tools', offer: '15% Off', imgSrc: img },
  { name: 'Compost', offer: '20% Off', imgSrc: img },
  { name: 'Herbs', offer: '25% Off', imgSrc: img },
  { name: 'Soil', offer: '10% Off', imgSrc: img },
  { name: 'Tools', offer: '15% Off', imgSrc: img },
  { name: 'Compost', offer: '20% Off', imgSrc: img },
];

const CategoryPage = () => {
  // Helper function to chunk categories into groups of 4
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    chunkedCategories.push(categories.slice(i, i + 4));
  }

  return (
    <div className="p-6 bg-green-100">
      {/* Top Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">MahilaBachat  Category</h1>
        <p className="text-sm text-gray-500 mt-2">Explore our diverse range of agricultural products with amazing offers</p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chunkedCategories.map((group, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Box Container */}
            <div className="w-full p-6 bg-white rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
              {/* Up Arrow at the top right, rotated slightly upwards */}
              <a href="#top" className="absolute top-2 right-2 text-green-600 cursor-pointer hover:text-green-800 transition-all duration-200">
                <FaArrowUp
                  size={20}
                  className="rotate-45"
                />
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Categories inside each box */}
                {group.map((category, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <Image
                      src={category.imgSrc}
                      alt={category.name}
                      width={100}
                      height={100}
                      className="w-full h-40 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-sm font-semibold text-gray-800">{category.name}</h3>
                    <p className="text-xs text-green-600 font-bold">{category.offer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
