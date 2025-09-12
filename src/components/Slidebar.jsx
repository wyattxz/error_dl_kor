import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slide from "./Slide";

export default function Slidebar() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="w-full">
            <div className="w-full h-[50px] bg-black text-white flex justify-center items-center font-medium lg:mt-[70px] mt-[70px]">
                <p className="hover:animate-pulse">Get 15% off on your first order</p>
            </div>
            <div className="w-full relative">
                <div className="lg:h-[90vh] h-[70vh]">
                    {/* <img src="/banner/slidebar.png" alt="" className="w-full h-full object-cover" /> */}
                    <Slide/>
                </div>
                <div className="w-full h-full bg-black/60 absolute top-0"></div>
                <div className="lg:w-[60%] lg:h-[60%] w-[80%] h-[80%] md:h-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1
                        className="lg:text-6xl md:text-6xl text-4xl text-center text-red-600 font-medium"
                        data-aos="zoom-in"
                    >
                        Timeless Fashion for the Modern Wardrobe
                    </h1>
                    <div className="lg:w-[60%] w-[110%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p className="lg:text-sm  text-[15px] text-center text-white/50" >
                            Discover timeless fashion for Men, Women, and Kids - crafted for comfort, designed for confidence.
                        </p>
                        <div className="w-full pt-16 flex justify-center">
                            <div className="bg-red-600 text-white lg:px-10 px-5 py-3 lg:text-xl text-[17px] font-medium rounded-[25px] cursor-pointer">
                                Explore the Collection
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
