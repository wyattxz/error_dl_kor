import { GiCharcuterie } from "react-icons/gi";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="px-5 bg-black flex flex-col md:flex-row">
        {/* Logo Section */}
        <div className="md:w-[30%] lg:w-[25%] xl:m-auto">
          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-col py-10 md:py-16">
            <div className="flex items-center gap-3">
              <span className="text-5xl md:text-4xl lg:text-5xl text-red-600 bg-green-500 rounded-full p-2">
                <GiCharcuterie />
              </span>
              <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-red-600">
                LOVEYOU
              </h1>
            </div>
            <p className="w-full py-5 text-white text-sm md:text-base lg:text-lg">
              Classic looks for Men, Women & Kids.
            </p>
            <div className="flex text-2xl gap-5 text-white">
              <span><FaInstagram /></span>
              <span><FaTelegram /></span>
              <span><FaLinkedin /></span>
              <span><FaPhone /></span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-10 md:flex md:gap-6 lg:gap-20 md:px-10 md:mt-16 xl:mr-40">
          <div className="text-white">
            <h1 className="text-xl font-bold md:text-lg">Quick Links</h1>
            <ul className="py-6">
              <li className="py-1 hover:text-red-500">Home</li>
              <li className="py-1 hover:text-red-500">Shop</li>
              <li className="py-1 hover:text-red-500">About</li>
              <li className="py-1 hover:text-red-500">Content</li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-xl font-bold md:text-lg">Shop</h1>
            <ul className="py-6">
              <li className="py-1 hover:text-red-500">Mens Wear</li>
              <li className="py-1 hover:text-red-500">Womens Wear</li>
              <li className="py-1 hover:text-red-500">Kids Wear</li>
              <li className="py-1 hover:text-red-500">Accessories</li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-xl font-bold md:text-lg">Help</h1>
            <ul className="py-6">
              <li className="py-1 hover:text-red-500">FAQ'S</li>
              <li className="py-1 hover:text-red-500">Return Policy</li>
              <li className="py-1 hover:text-red-500">Order Status</li>
              <li className="py-1 hover:text-red-500">Shipping & Delivery</li>
            </ul>
          </div>

          <div className="text-white">
            <h1 className="text-xl font-bold md:text-lg">My Profile</h1>
            <ul className="py-6">
              <li className="py-1 hover:text-red-500">My Account</li>
              <li className="py-1 hover:text-red-500">Track Order</li>
              <li className="py-1 hover:text-red-500">My Cart</li>
              <li className="py-1 hover:text-red-500">Order History</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black">
        <div className="border-b border-white md:w-[90%] md:m-auto hidden md:block"></div>
        <div className="text-white py-6 flex items-center justify-center">
          <p className="text-sm md:text-base">
            © 2025 Clothing Store. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
