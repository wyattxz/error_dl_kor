import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card_review() {
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
    <div className='w-full px-10 py-10 
                    md:w-[90%] m-auto md:text-center
                    xl:w-[40%] ' data-aos="zoom-in-down" data-aos-delay="300">
      <div className='h-[400px] grid grid-cols-1 gap-5 overflow-hidden bg-black/5 rounded-3xl shadow-2xl shadow-black/20'>
         <div className='px-5 py-5 border-2 border-black/50 rounded-3xl '>
            <h1 className='text-black text-center text-2xl font-bold py-2' data-aos="zoom-in-down" data-aos-delay="400">Customer Review</h1>
            <div className="w-[80%] py-2 bg-white/60 shadow-xl shadow-black/20 flex justify-center m-auto text-yellow-400 text-2xl gap-1 rounded-3xl
                            md:w-[50%]
                            xl:w-[30%]" data-aos="zoom-in-down" data-aos-delay="400">
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p> <FaStarHalf /></p>
            </div>
            <p className='text-black/60 font-medium text-center py-4' data-aos="zoom-in-down" data-aos-delay="700">168 customer ratings</p>
            <div className="w-full" data-aos="zoom-in-down" data-aos-delay="400">
                <div className="w-full flex gap-2 py-2
                                md:gap-0 md:px-10">
                    <div className="w-[15%] text-blue-500 font-bold text-md">5 Star</div>
                    <div className="w-[85%] bg-white/90 rounded-3xl flex">
                        <p className="bg-yellow-400 w-[85%] h-full rounded-3xl"></p>
                        <p className="w-[15%] text-black text-center">84%</p>
                    </div>
                </div>
                <div className="w-full flex gap-2 py-2
                                md:gap-0 md:px-10 ">
                    <div className="w-[15%] text-blue-500 font-bold text-md">4 Star</div>
                    <div className="w-[85%] bg-white/90 rounded-3xl flex">
                        <p className="bg-yellow-400 w-[40%] h-full rounded-3xl"></p>
                        <p className="w-[15%] text-black ml-36
                                      md:ml-60
                                      xl:ml-64">9%</p>
                    </div>
                </div>
                <div className="w-full flex gap-2 py-2
                                md:gap-0 md:px-10">
                    <div className="w-[15%] text-blue-500 font-bold text-md">3 Star</div>
                    <div className="w-[85%] bg-white/90 rounded-3xl flex">
                        <p className="bg-yellow-400 w-[25%] h-full rounded-3xl"></p>
                        <p className="w-[15%] text-black ml-40
                                      md:ml-80
                                      xl:ml-[60%]">4%</p>
                    </div>
                </div>
                <div className="w-full flex gap-2 py-2
                                md:gap-0 md:px-10">
                    <div className="w-[15%] text-blue-500 font-bold text-md">2 Star</div>
                    <div className="w-[85%] bg-white/90 rounded-3xl flex">
                        <p className="bg-yellow-400 w-[15%] h-full rounded-3xl"></p>
                        <p className="w-[15%] text-black ml-44
                                      md:ml-96">2%</p>
                    </div>
                </div>
                <div className="w-full flex gap-2 py-2
                                md:gap-0 md:px-10">
                    <div className="w-[15%] text-blue-500 font-bold text-md">1 Star</div>
                    <div className="w-[85%] bg-white/90 rounded-3xl flex">
                        <p className="bg-yellow-400 w-[10%] h-full rounded-3xl"></p>
                        <p className="w-[15%] text-black ml-44
                                      md:ml-96
                                      xl:ml-[75%]">1%</p>
                    </div>
                </div>
                <button className="text-blue-500 mt-5
                        hover:text-pink-500">How to do we calculate rating?</button>
            </div>
        </div>
        
       </div>

    </div>
    </>
  )
}
