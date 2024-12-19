"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import andriod from "../app/assets/img/playstore.png";
import Apple from "../app/assets/img/apple..png";

const TopBar = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-900 text-white flex justify-between items-center py-2 px-6 md:px-12">
      {/* Left Side: Download App Text and Icons */}
      <div className="flex items-center space-x-0"> {/* Removed space-x */}
        <span className="text-sm md:text-base">Download App:</span>
        <a
          href="#"
          className="hover:opacity-80 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={Apple}
              alt="Download on the App Store"
              layout="intrinsic"
              width={48}
              height={48}
              objectFit="cover"
            />
          </div>
        </a>
        <a
          href="#"
          className="hover:opacity-80 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={andriod}
              alt="Get it on Google Play"
              layout="intrinsic"
              width={48}
              height={55}
              objectFit="cover"
            />
          </div>
        </a>
      </div>

      {/* Right Side: About Us and Contact Us */}
      <div className="flex space-x-4 md:space-x-8">
        <button
          onClick={() => router.push('/about-us')}
          className="text-sm md:text-base hover:text-gray-400 transition duration-300"
        >
          About Us
        </button>
        <button
          onClick={() => router.push('/contact-us')}
          className="text-sm md:text-base hover:text-gray-400 transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TopBar;
