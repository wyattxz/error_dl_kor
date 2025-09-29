import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
                  AOS.init({
                    duration: 1800,  // animation speed
                    once: false,     // animate every time
                    mirror: true,    // animate on scroll up
                  });
              
                  // refresh AOS when components update
                  AOS.refresh();
                }, []);
  return (
    <div>
      <div className='w-full h-[900px] px-5 py-5 '>
        <div className='w-full h-[30%] border-2 border-black/90 shadow-2xl shadow-black/80 rounded-3xl
                        md:w-[60%] m-auto
                        xl:w-[30%]'
                        data-aos="zoom-in-down" data-aos-delay="300">
            <div className='w-full h-[50%] overflow-hidden relative' 
                  data-aos="zoom-in-down" data-aos-delay="300">
              <div className='profile1 border-4 border-white'></div>
              <div className=' w-[80px] h-[80px] m-auto absolute  top-2 left-[39%]
                              md:left-[42%]
                              xl:left-[44%]'>
                <img src="/Logo/Logo.png" alt="" className='w-full h-full'/>
              </div>
            </div>
            <div className='w-full h-[50%] text-center text-black/70'>
                <p className="py-2"
                  data-aos="zoom-in-down" data-aos-delay="300">Optimize your design process</p>
                <div className="flex justify-center text-4xl gap-4 py-2">
                  <p className="text-blue-500 hover:animate-bounce transition duration-300 ease-in-out hover:border-b-4 hover:border-pink-500" data-aos="zoom-in-down" data-aos-delay="300"><FaFacebook /></p>
                  <p className="text-pink-600 hover:animate-bounce transition duration-300 ease-in-out hover:border-b-4 hover:border-pink-500" data-aos="zoom-in-down" data-aos-delay="500"><FaInstagram /></p>
                  <p className="text-black hover:animate-bounce transition duration-300 ease-in-out hover:border-b-4 hover:border-pink-500" data-aos="zoom-in-down" data-aos-delay="700"><FaXTwitter /></p>
                  <p className="text-blue-500 hover:animate-bounce transition duration-300 ease-in-out hover:border-b-4 hover:border-pink-500" data-aos="zoom-in-down" data-aos-delay="900"><FaTelegram /></p>
                </div>
            </div>
        </div>
        <div className='w-full h-[70%] grid grid-cols-2 gap-5 py-5
                        md:py-10 md:gap-10
                        xl:px-96'>
            <div className=" px-5 py-5 border-2 border-black/90 shadow-2xl shadow-black/80 rounded-3xl" data-aos="zoom-in-down" data-aos-delay="300">
                <h1 className="text-xl font-bold text-center text-pink-500 border-b-2 border-black/50" data-aos="zoom-in-down" data-aos-delay="300">PRODUCT</h1>
                <ul className="text-center py-5 text-[16px] text-black/70 font-medium space-y-2">
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="300" >Overview</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="500">Pricing</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="700">Customer Stories</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="900">Integrations</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="1100">Security</li>
                </ul>
            </div>
            <div className=" px-5 py-5 border-2 border-black/90 shadow-2xl shadow-black/80 rounded-3xl" data-aos="zoom-in-down" data-aos-delay="300">
                <h1 className="text-xl font-bold text-center text-pink-500 border-b-2 border-black/50" data-aos="zoom-in-down" data-aos-delay="300">RESOURCES</h1>
                <ul className="text-center py-5 text-[16px] text-black/70 font-medium space-y-2">
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="300">Blog</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="500">Guides & tutorials</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="700">Help center</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="900">What's new</li>
                </ul>
            </div>
            <div className=" px-5 py-5 border-2 border-black/90 shadow-2xl shadow-black/80 rounded-3xl" data-aos="zoom-in-down" data-aos-delay="300">
                <h1 className="text-xl font-bold text-center text-pink-500 border-b-2 border-black/50" data-aos="zoom-in-down" data-aos-delay="300">TEMPLATES</h1>
                <ul className="text-center py-5 text-[16px] text-black/70 font-medium space-y-2">
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="300">Landing</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="500">Dashboard</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="700">Log In and Sign Up</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="900">Payment</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="1100">Dataviz Blocks</li>
                </ul>
            </div>
            <div className=" px-5 py-5 border-2 border-black/90 shadow-2xl shadow-black/80 rounded-3xl" data-aos="zoom-in-down" data-aos-delay="300">
                <h1 className="text-xl font-bold text-center text-pink-500 border-b-2 border-black/50" data-aos="zoom-in-down" data-aos-delay="300">COMPANY</h1>
                <ul className="text-center py-5 text-[16px] text-black/70 font-medium space-y-2">
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="300">About us</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="500">Media Kit</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="700">Contact support</li>
                  <li className="w-[50%] m-auto hover:text-pink-500 hover:border-b-2 border-pink-500" data-aos="zoom-in-down" data-aos-delay="900">I love You.</li>
                </ul>
            </div>
           
        </div>
      </div>
      <div className=" mt-32 md:mt-10" data-aos="zoom-in-down" data-aos-delay="300">
        <p className="border-t-2 border-black/70 text-black/70 text-lg text-center font-medium py-5" data-aos="zoom-in-down" data-aos-delay="500">Copy right @2025 / Setember / 24</p>
      </div>
    </div>
  )
}
