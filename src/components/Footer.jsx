import { GiCharcuterie } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
  return (
    <>
    <div className="px-5 bg-black md:flex ">
      <div className="md:w-[20%]">
        <div className="flex py-16 flex-wrap">
          <span className="md:text-3xl text-5xl text-red-600 p-2 bg-green-500 rounded-full md:h-[50px] md:w-[30%] md:mt-2 lg:h-[75px] lg:text-6xl"><GiCharcuterie /></span>
          <h1 className="md:text-2xl text-red-600 text-3xl font-bold py-3 px-1 md:w-[70%] md:px-4 lg:mt-3 lg:text-3xl">LOVEYOU</h1>
          <p className="w-full py-10 text-white md:py-5">Classic looks for Men, Women & Kids. </p>
          <div className="flex text-2xl gap-5 text-white">
            <span className=""><FaInstagram /></span>
            <span className=""><FaTelegram /></span>
            <span className=""><FaLinkedin /></span>
            <span className=""><FaPhone /></span>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:gap-10 md:px-10 md:mt-16 lg:gap-28">
        <div className="text-white">
          <h1 className="text-xl font-bold w-full md:text-lg">Quick Links</h1>
          <ul className="py-6 w-full">
            <li className="w-full py-1 hover:text-red-500">Home</li>
            <li className="w-full py-1 hover:text-red-500">Shop</li>
            <li className="w-full py-1 hover:text-red-500">About</li>
            <li className="w-full py-1 hover:text-red-500">Content</li>
          </ul>
        </div>
        <div className="text-white  ">
          <h1 className="text-xl font-bold w-full md:text-lg">Shop</h1>
          <ul className="py-6 w-full">
            <li className="w-full py-1 hover:text-red-500">Mens Wear</li>
            <li className="w-full py-1 hover:text-red-500">Womens Wear</li>
            <li className="w-full py-1 hover:text-red-500">Kidsa Wear</li>
            <li className="w-full py-1 hover:text-red-500">Accessories</li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-bold w-full md:text-lg">Help</h1>
          <ul className="py-6 w-full">
            <li className="w-full py-1 hover:text-red-500">FAQ'S</li>
            <li className="w-full py-1 hover:text-red-500">Return Policy</li>
            <li className="w-full py-1 hover:text-red-500">Order Status</li>
            <li className="w-full py-1 hover:text-red-500">Shipping & Dilivery</li>
          </ul>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-bold w-full md:text-lg">My Profile</h1>
          <ul className="py-6 w-full">
            <li className="w-full py-1 hover:text-red-500">My Account</li>
            <li className="w-full py-1 hover:text-red-500">Trac Order</li>
            <li className="w-full py-1 hover:text-red-500">My Cart</li>
            <li className="w-full py-1 hover:text-red-500">Order History</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-black">
      <div className="border-b-2 border-white md:w-[90%] md:m-auto hidden md:flex lg:hidden"></div>
      <div className="text-white py-10 md:w-full flex items-center justify-center">
        <p className="">Copyright 2025 Closthing Store All right reserved</p>
      </div>
    </div>
    </>
  )
}