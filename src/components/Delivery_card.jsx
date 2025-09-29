import { TbTruckDelivery } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { IoIosBoat } from "react-icons/io";
import { PiAirplaneTiltFill } from "react-icons/pi";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./Form";


export default function Delivery_card() {
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
    <>
    <div className="px-10 md:px-20 xl:w-[45%] xl:m-auto">
      <div className="grid grid-cols-1 gap-5
                    md:grid-cols-2
                    xl:grid-cols-1" data-aos="zoom-in-down" data-aos-delay="500">
        <div className="h-[130px] bg-pink-400 shadow-2xl shadow-black/50 flex justify-center items-center rounded-3xl">
            <div className="w-[30%] h-full flex justify-center items-center">
                <p className="text-white text-6xl
                              xl:text-8xl"
                              data-aos="zoom-in-down" data-aos-delay="500"><PiAirplaneTiltFill /></p>
            </div>
            <div className="w-[70%] h-full py-1 px-1"
                data-aos="zoom-in-down" data-aos-delay="500">
                <h1 className="text-white text-xl font-bold text-center
                                 xl:text-2xl xl:text-start"
                                 >Super Fast Delivery</h1>
                <p className="text-black/60 px-2
                                xl:text-xl">Thank you for your order! We provide fast delivery to make sure 
                    you receive your product quickly and safely.</p>
            </div>
        </div>
        <div className="h-[130px] bg-pink-400 shadow-2xl shadow-black/50 flex justify-center items-center rounded-3xl"
            data-aos="zoom-in-down" data-aos-delay="500">
            <div className="w-[30%] h-full flex justify-center items-center">
                <p className="text-white text-6xl
                              xl:text-8xl" data-aos="zoom-in-down" data-aos-delay="500"><IoIosBoat /></p>
            </div>
            <div className="w-[70%] h-full py-1">
                <h1 className="text-white text-xl font-bold text-center
                                 xl:text-2xl xl:text-start"> Fast Delivery</h1>
                <p className="text-black/60 px-2
                                xl:text-xl">Thank you for your order! We provide fast delivery to make sure 
                    you receive your product quickly and safely.</p>
            </div>
        </div>
        <div className="h-[130px] bg-pink-400 shadow-2xl shadow-black/50 flex justify-center items-center rounded-3xl"
            data-aos="zoom-in-down" data-aos-delay="500">
            <div className="w-[30%] h-full flex justify-center items-center">
                <p className="text-white text-6xl
                              xl:text-8xl" data-aos="zoom-in-down" data-aos-delay="500"><TbTruckDelivery /></p>
            </div>
            <div className="w-[70%] h-full py-1">
                <h1 className="text-white text-xl font-bold text-center
                                xl:text-2xl xl:text-start">Slow Delivery</h1>
                <p className="text-black/60 px-2
                                xl:text-xl">Thank you for your order! We provide fast delivery to make sure 
                    you receive your product quickly and safely.</p>
            </div>
        </div>
        <div className="h-[130px] bg-pink-400 shadow-2xl shadow-black/50 flex justify-center items-center rounded-3xl"
            data-aos="zoom-in-down" data-aos-delay="500">
            <div className="w-[30%] h-full flex justify-center items-center">
                <p className="text-white text-6xl
                              xl:text-8xl" data-aos="zoom-in-down" data-aos-delay="500"><MdDeliveryDining /></p>
            </div>
            <div className="w-[70%] h-full py-1">
                <h1 className="text-white text-xl font-bold text-center
                                 xl:text-2xl xl:text-start">Turtle Delivery</h1>
                <p className="text-black/60 px-2
                                xl:text-xl">Thank you for your order! We provide fast delivery to make sure 
                    you receive your product quickly and safely.</p>
            </div>
        </div>
      </div>
    
    </div>
    <Form/>
    </>
  )
}
