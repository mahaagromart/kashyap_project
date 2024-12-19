import Image from 'next/image';
import logo from '../app/assets/img/top_logo.webp'; // make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Logo & Company Info */}
          <div className="flex flex-col items-start">
            <Image src={logo} alt="Logo" className="mb-4" width={200} height={80} />
            <p className='text-sm text-gray-600'>MahaAgroMart has truly revolutionized the way I source agricultural products online. As a farmer, finding quality seeds, fertilizers, and equipment used to be a time-consuming task.</p>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Helpful Links</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Customer Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Shipping Information</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <span className="material-icons">facebook</span>
                </a>
                
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">Contact Information</h3>
            <p className="text-sm text-gray-600">123 Street, City, Country</p>
            <p className="text-sm text-gray-600">Email: support@example.com</p>
            <p className="text-sm text-gray-600">Phone: +123 456 7890</p>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-green-600 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white">&copy; 2025 MahaAgroMart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
