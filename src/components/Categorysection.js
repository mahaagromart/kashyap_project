// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import img from "../app/assets/img/seed.webp"; // Default image

// const CategorySection = () => {
//   const [selectedPage, setSelectedPage] = useState('');
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

//   // Categories array with multiple links per category
//   const categories = [
//     {
//       name: "Seeds",
//       image: img,
//       link: "",
//       subLinks: [
//         {
//           name: "Cereals", link: "",
//           subSubLinks: [
//             { name: "Jowar", link: "" },
//             { name: "Wheat", link: "" },
//             { name: "Bajra", link: "" },
//             { name: "Paddy", link: "" },
//           ]
//         },
//         {
//           name: "Pulses",
//           link: "",
//           subSubLinks: [
//             { name: "Tur", link: "" },
//             { name: "Moong", link: "" },
//             { name: "Udid", link: "" },
//           ]
//         },
//         {
//           name: "Oil Seeds",
//           link: "",
//           subSubLinks: [
//             { name: "Soyabean", link: "" },
//             { name: "Groundnut", link: "" },
//             { name: "Sunflower", link: "" },
//             { name: "Safflower", link: "" },
//             { name: "Seasamum", link: "" },
//           ]
//         },
//         {
//           name: "Fiber Seeds",
//           link: "",
//           subSubLinks: [
//             { name: "Cotton", link: "" },
//           ]
//         },
//         {
//           name: "Fooder Crop Seeds",
//           link: "",
//           subSubLinks: [
//             { name: "Maize", link: "" },
//             { name: "Jowar", link: "" },
//           ]
//         },
//         {
//           name: "Manure Crop Seeds.",
//           link: "",
//           subSubLinks: [
//             { name: "Dhencha", link: "" },
//             { name: "Sunhemp", link: "" },
//           ]
//         },
//       ]
//     },
// // second......>>>
// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },
// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },

// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },

// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },

// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },

// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },

// {
//   name: "Pesticides",
//   image: img,
//   link: "",
//   subLinks: [
//     {
//       name: "Insecticides", link: "",
//       subSubLinks: [
//         { name: "Systemic insecticides", link: "" },
//         { name: "Systemic and contact insecticides", link: "" },
//         { name: "Broad Spectrum insecticides", link: "" },
//         { name: "Contact insecticides", link: "" },
//         { name: "Stomach insecticides", link: "" },
//         { name: "Gaseous insecticides", link: "" },
//         { name: "Fumigants insecticides", link: "" },

//       ]
//     },
//     {
//       name: "Fungicides",
//       link: "",
//       subSubLinks: [
//         { name: "Systemic fungicides", link: "" },
//         { name: "Systemic and contact fungicides", link: "" },
//         { name: "Broad spectrum fungicides", link: "" },
//         { name: "Contact fungicides", link: "" },
//       ]
//     },
//     {
//       name: "Herbicides",
//       link: "",
//       subSubLinks: [
//         { name: "Soyabean", link: "" },
//         { name: "Groundnut", link: "" },
//         { name: "Sunflower", link: "" },
//         { name: "Safflower", link: "" },
//         { name: "Seasamum", link: "" },
//       ]
//     },
//     {
//       name: "PGR's",
//       link: "",
//       subSubLinks: [
//         { name: "Cotton", link: "" },
//       ]
//     },
//     {
//       name: "Bio-Pesticides",
//       link: "",
//       subSubLinks: [
//         { name: "Maize", link: "" },
//         { name: "Jowar", link: "" },
//       ]
//     },
//     {
//       name: "Bactericide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Nematicide",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Public Health Products",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//     {
//       name: "Specialty Product",
//       link: "",
//       subSubLinks: [
//         { name: "Dhencha", link: "" },
//         { name: "Sunhemp", link: "" },
//       ]
//     },
//   ]
// },



//     {
//       name: "Vegetables",
//       image: img,
//       link: "/category/vegetables",
//       subLinks: [
//         { name: "Carrot", link: "/category/vegetables/carrot", subSubLinks: [] },
//         { name: "Lettuce", link: "/category/vegetables/lettuce", subSubLinks: [] },
//         { name: "Tomato", link: "/category/vegetables/tomato", subSubLinks: [] },
//       ]
//     },
//     {
//       name: "Grains",
//       image: img,
//       link: "/category/grains",
//       subLinks: [
//         { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
//         { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
//         { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
//       ]
//     },
//   ];

//   // Handle page change from dropdown
//   const handlePageChange = (e) => {
//     setSelectedPage(e.target.value);
//     window.location.href = e.target.value; // Navigate to selected page
//   };

//   return (
//     <div className="p-5 text-center ">
//       <div className="flex flex-wrap justify-between gap-4">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="relative w-20 text-center group"
//             onMouseEnter={() => setHoveredCategory(index)}
//             onMouseLeave={() => setHoveredCategory(null)}
//           >
//             {/* Circular Image */}
//             <Image
//               src={category.image}
//               alt={category.name}
//               width={80}
//               height={50}
//               className="w-20 h-20 rounded-full border-2 border-green-500"
//             />
//             <h4 className="mt-2 text-sm">{category.name}</h4>

//             {/* Category Dropdown */}
//             <div
//               className={`absolute top-full left-1/3 transform -translate-x-1/3 bg-white border border-gray-300 rounded-md w-32 shadow-md ${hoveredCategory === index ? 'block' : 'hidden'
//                 } z-10`}
//             >
//               {category.subLinks.map((subLink, subIndex) => (
//                 <div
//                   key={subIndex}
//                   onMouseEnter={() => setHoveredSubCategory(subIndex)}
//                   onMouseLeave={() => setHoveredSubCategory(null)}
//                   className="relative"
//                 >
//                   <a
//                     href={subLink.link}
//                     className="block py-1 px-3 text-green-600 font-bold text-sm hover:bg-gray-100 rounded"
//                   >
//                     {subLink.name}
//                   </a>
//                   {subLink.subSubLinks.length > 0 && (
//                     <span className="text-gray-500 ml-8 absolute right-2 top-1/2 transform -translate-y-1/2">
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//                         <path d="M10 6l6 6-6 6-1.41-1.41L13.17 12H3v-2h10.17l-4.58-4.59L10 6z" />
//                       </svg>
//                     </span>
//                   )}



//                   {/* Nested Subcategory */}
//                   {subLink.subSubLinks.length > 0 && hoveredSubCategory === subIndex && (
//                     <div
//                       className="absolute top-0 left-full bg-white  border border-gray-200 rounded-lg w-28 shadow-lg z-10"
//                     // Dynamic alignment
//                     >
//                       {subLink.subSubLinks.map((subSubLink, subSubIndex) => (
//                         <a
//                           key={subSubIndex}
//                           href={subSubLink.link}
//                           className="block py-1 px-1 text-green-600 font-bold text-sm hover:bg-gray-100 rounded"
//                         >
//                           {subSubLink.name}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;

"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../app/assets/img/seed.webp"; // Default image

const CategorySection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState(0);

  const categories = [
    {
      name: "Seeds",
      image: img,
      link: "",
      subLinks: [
        {
          name: "Cereals", link: "",
          subSubLinks: [
            { name: "Jowar", link: "" },
            { name: "Wheat", link: "" },
            { name: "Bajra", link: "" },
            { name: "Paddy", link: "" },
          ]
        },
        // more subLinks here
      ]
    },
    {
      name: "Pesticides",
      image: img,
      link: "",
      subLinks: [
        {
          name: "Insecticides", link: "",
          subSubLinks: [
            { name: "Systemic insecticides", link: "" },
            { name: "Systemic and contact insecticides", link: "" },
          ]
        },
        // more subLinks here
      ]
    },
    {
      name: "Vegetables",
      image: img,
      link: "/category/vegetables",
      subLinks: [
        { name: "Carrot", link: "/category/vegetables/carrot", subSubLinks: [] },
        { name: "Lettuce", link: "/category/vegetables/lettuce", subSubLinks: [] },
        { name: "Tomato", link: "/category/vegetables/tomato", subSubLinks: [] },
      ]
    },
    {
      name: "Grains1",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },
    {
      name: "Grains2",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },
    {
      name: "Grains3",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },
    {
      name: "Grains4",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },
    {
      name: "Grains5",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },
    {
      name: "Grains6",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },
    {
      name: "Grains7",
      image: img,
      link: "/category/grains",
      subLinks: [
        { name: "Wheat", link: "/category/grains/wheat", subSubLinks: [] },
        { name: "Rice", link: "/category/grains/rice", subSubLinks: [] },
        { name: "Corn", link: "/category/grains/corn", subSubLinks: [] },
      ]
    },

    // more categories here
  ];

  const itemsPerPage = 8; // Show 12 categories at a time


  const goNext = () => {
    if (visibleCategories + itemsPerPage < categories.length) {
      setVisibleCategories(visibleCategories + itemsPerPage);
    }
  };

  const goPrevious = () => {
    if (visibleCategories > 0) {
      setVisibleCategories(visibleCategories - itemsPerPage);
    }
  };

  return (
    <div className="p-5 text-center">
      <div className="flex justify-between items-center">
        <button onClick={goPrevious} className="px-2 py-1 text-sm bg-green-500 text-white rounded-md">
          Prev
        </button>


        <div className="flex flex-wrap justify-between gap-4 w-full max-w-[1200px] mx-auto">
          {categories.slice(visibleCategories, visibleCategories + itemsPerPage).map((category, index) => (
            <div
              key={index}
              className="relative w-20 text-center group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Circular Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={50}
                className="w-20 h-20 rounded-full border-2 border-green-500"
              />
              <h4 className="mt-2 text-sm">{category.name}</h4>

              {/* Category Dropdown */}
              <div
                className={`absolute top-full left-1/3 transform -translate-x-1/3 bg-white border border-gray-300 rounded-md w-32 shadow-md ${hoveredCategory === index ? 'block' : 'hidden'} z-10`}
              >
                {category.subLinks.map((subLink, subIndex) => (
                  <div
                    key={subIndex}
                    onMouseEnter={() => setHoveredSubCategory(subIndex)}
                    onMouseLeave={() => setHoveredSubCategory(null)}
                    className="relative"
                  >
                    <a
                      href={subLink.link}
                      className="block py-1 px-3 text-green-600 font-bold text-sm hover:bg-gray-100 rounded"
                    >
                      {subLink.name}
                    </a>
                    {subLink.subSubLinks.length > 0 && (
                      <span className="text-gray-500 ml-8 absolute right-2 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M10 6l6 6-6 6-1.41-1.41L13.17 12H3v-2h10.17l-4.58-4.59L10 6z" />
                        </svg>
                      </span>
                    )}

                    {/* Nested Subcategory */}
                    {subLink.subSubLinks.length > 0 && hoveredSubCategory === subIndex && (
                      <div className="absolute top-0 left-full bg-white  border border-gray-200 rounded-lg w-28 shadow-lg z-10">
                        {subLink.subSubLinks.map((subSubLink, subSubIndex) => (
                          <a
                            key={subSubIndex}
                            href={subSubLink.link}
                            className="block py-1 px-1 text-green-600 font-bold text-sm hover:bg-gray-100 rounded"
                          >
                            {subSubLink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={goNext} className="px-2 py-1 text-sm bg-green-500 text-white rounded-md">
          Next
        </button>

      </div>
    </div>
  );
};

export default CategorySection;
