import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slidebar() {
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
        <div className="w-full py-2">
            <div className="relative
                            w-full h-[360px] 
                            md:h-[600px] 
                            lg:h-[800px] 
                            xl:h-[1300px]">
                <img src="/Banner/banner.jpg" alt="" className="w-full h-full object-cover"/>
                <div className="w-full h-full bg-black/10 absolute top-0 z-40 px-5 py-3 
                                md:px-28 
                                xl:px-56" >
                    <h1 className="text-4xl font-bold text-center text-white border-b-2 py-2 border-gray-500
                                   md:text-6xl 
                                   lg:text-8xl lg:border-b-4 
                                   xl:py-10" data-aos="zoom-in-down">
                                    SUPER 
                                    <span className="text-yellow-200"> PRODUCT</span>
                    </h1>
                    <p className="border-b-2 border-white lg:border-b-4" data-aos="zoom-in-down">

                    </p>
                    <p className="text-white text-center bottom-2 right-24 absolute border-b-2 border-gray-500
                                md:text-xl md:right-[36%] 
                                xl:right-[42%] lg:text-2xl" data-aos="zoom-in-down" data-aos-delay="500">
                                    Best Recommend for 
                                    <span className="text-pink-600 text-lg 
                                                    md:text-2xl 
                                                    lg:text-3xl"> Everyone</span>
                        <p className="border-b-2 border-white"></p>
                    </p>
                </div>
               <div className="absolute bottom-5 right-7 h-[90%] w-full p-9 
                              md:bottom-10 md:w-[80%] md:right-32 md:p-14 
                              lg:right-[15%] lg:p-20 
                              xl:right-[15%] xl:p-28 xl:bottom-20" data-aos="zoom-in-down" data-aos-delay="700">
                <img src="/Banner/product.png" alt="" className="w-full h-full object-cover "/>
               </div>
            </div>
            <div className='w-full flex justify-center py-5' data-aos="zoom-in-down" data-aos-delay="500">
                <button type="submit" className="font-bold px-10 py-5 shadow-lg border-2 border-pink-300 shadow-gray-200 bg-gradient-to-b to-white/30 from-pink-400 text-yellow-200  rounded-xl hover:bg-gradient-to-t
                 hover:to-pink-300 transition duration-300 text-xl">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
}
