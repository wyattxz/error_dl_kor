import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slide from "../slide";

export default function Slidebar() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="w-full ">
            <div className="w-full h-[50px] bg-black text-white flex justify-center items-center font-medium lg:mt-[70px] mt-[70px]">
                <p className="hover:animate-pulse">Get 15% off on your first order</p>
            </div>
            <div className="w-full relative">
                <div className="lg:h-[90vh] h-[70vh]">
                    <Slide/>
                </div>
                <div className="w-full h-full bg-black/60 absolute top-0 z-40"></div>
                <div className="lg:w-[60%] lg:h-[60%] w-[70%] h-[50%] md:h-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                    <h1
                        className="xl:text-8xl lg:text-6xl md:text-6xl text-4xl text-center text-red-600 font-bold "
                        data-aos="zoom-in"
                    >
                       Style, Tip & More
                    </h1>
                    <div className="lg:w-[60%] w-[100%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p className=" xl:text-lg xl:mb-30 lg:text-sm  text-[15px] text-center text-white/50" >
                            Welcome to The Valora Edit, your go-to destination for all things fashion. 
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
