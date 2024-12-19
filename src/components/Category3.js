import Link from 'next/link';
import Image from 'next/image';
import some from "../app/assets/img/seed.webp";
import Ads from "../app/assets/img/mahagro.png";

export default function Home() {
  return (
    <div className="flex flex-wrap h-auto bg-gray-100">
      {/* Left Side Categories */}
      <div className="w-full md:w-1/2 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold text-green-700 mb-4">Winter Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {/* Category 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="EcoCrop Solutions"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800">EcoCrop Solutions</h3>
            <p className="text-sm text-green-600 font-bold">Offer: 30% Off</p>
          </div>

          {/* Category 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="CropMate"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">CropMate</h3>
            <p className="text-sm text-green-600 font-bold">Offer: Buy 1 Get 1</p>
          </div>

          {/* Category 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="FarmPure"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">FarmPure</h3>
            <p className="text-sm text-green-600 font-bold">Offer: 20% Off</p>
          </div>

          {/* Category 4 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="AgroBloom"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">AgroBloom</h3>
            <p className="text-sm text-green-600 font-bold">Offer: Free Shipping</p>
          </div>

          {/* Additional Categories 5 to 8 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="AgroTech"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">AgroTech</h3>
            <p className="text-sm text-green-600 font-bold">Offer: 15% Off</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="PlantHealth"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">PlantHealth</h3>
            <p className="text-sm text-green-600 font-bold">Offer: 25% Off</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="FarmGrow"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">FarmGrow</h3>
            <p className="text-sm text-green-600 font-bold">Offer: Buy 2 Get 1</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Image
              src={some}
              alt="AgroCare"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">AgroCare</h3>
            <p className="text-sm text-green-600 font-bold">Offer: Free Samples</p>
          </div>
        </div>
      </div>

      {/* Right Side Banner */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Top Right Arrow Link */}
        <div className="flex justify-end p-3">
          <Link href="/next-page">
            <span className="inline-flex items-center text-green-700 font-bold hover:underline">
              Next Page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Small Banner */}
        <div className="flex-1 flex items-center justify-center bg-green-500 text-white text-lg font-bold rounded-lg mx-4 my-2 p-4 min-h-[270px] md:min-h-[200px] lg:min-h-[250px]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Ads.src})` }}
          >
            {/* You can add other elements inside here if needed */}
          </div>
        </div>


      </div>
    </div>
  );
}
