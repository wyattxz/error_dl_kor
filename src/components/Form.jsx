import { RiEmotionSadLine } from "react-icons/ri";
import { TbMoodSad } from "react-icons/tb";
import { TbMoodSadSquint } from "react-icons/tb";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Form() {
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
    <div className='px-5 py-16 
                    xl:px-40'>
     <div className='w-full h-[500px] bg-pink-400 rounded-3xl shadow-2xl shadow-black/50'
                    data-aos="zoom-in-down" data-aos-delay="300">
        <div className='px-5 py-5'>
            <h1 className='text-xl font-bold
                        md:text-2xl'
                        data-aos="zoom-in-down" data-aos-delay="500">Give feedback</h1>
            <p className='' data-aos="zoom-in-down" data-aos-delay="500">What do you think of the issue search experience within this Product?</p>
            <div className='h-[80px] grid grid-cols-3 gap-5 mt-5 '
                 data-aos="zoom-in-down" data-aos-delay="500">
                <div className='flex justify-center items-center flex-wrap shadow-2xl shadow-white/90 bg-white/30
                                hover:scale-110 hover:animate-bounce transition duration-300 rounded-2xl ease-in-out
                                md:justify-start
                                xl:justify-center'>
                    <p className=" text-6xl text-black/80 
                                md:px-5 "><RiEmotionSadLine /></p>
                    <p className="text-black/80 font-bold 
                                md:text-xl">BAD</p>
                </div>
                <div className='flex justify-center items-center flex-wrap shadow-2xl shadow-white/90 bg-white/30
                                hover:scale-110 transform duration-300 rounded-2xl hover:animate-bounce transition ease-in-out
                                md:justify-start
                                xl:justify-center'>
                   <p className="text-6xl text-black/80
                                md:px-5  ease-in-out"><TbMoodSad /></p>
                    <p className="text-black/80 font-bold
                                md:text-xl">GOOD</p>
                </div>
                <div className='flex justify-center items-center flex-wrap shadow-2xl shadow-white/90 bg-white/30
                                hover:scale-110 transform duration-300 rounded-2xl hover:animate-bounce transition ease-in-out
                                md:justify-start
                                xl:justify-center'>
                    <p className="text-6xl text-black/80
                                    md:px-5 "><TbMoodSadSquint /></p>
                    <p className="text-black/80 font-bold
                                md:text-xl">AMAZING</p>
                </div>
            </div>
            <div className="py-5" 
                data-aos="zoom-in-down" data-aos-delay="500">
                <h1 className="py-2"
                    data-aos="zoom-in-down" data-aos-delay="500">What are the main reasons for your ratings?</h1>
                <input type="text" placeholder="Hello kon papa..." className="w-full py-4 px-2 rounded-xl outline-none text-black/80 shadow-2xl shadow-white/90 text-xl
                    md:py-6
                    hover:border-4 border-pink-600"
                    data-aos="zoom-in-down" data-aos-delay="500"/>
                <div className="flex"
                    data-aos="zoom-in-down" data-aos-delay="500">
                    <input type="checkbox" className="w-[18px] h-[18px] mt-4 
                            md:w-[22px] md:h-[22px] "/>
                <p className="py-4 text-[12px]
                            md:text-[16px] 
                            xl:px-2"
                            data-aos="zoom-in-down" data-aos-delay="500">I may be contacted about this feedvack.<span className="text-red-600">Privacy Policy</span></p>
                </div>
                <div className="flex" 
                    data-aos="zoom-in-down" data-aos-delay="500">
                    <input type="checkbox" className="w-[18px] h-[18px]
                                md:w-[22px] md:h-[22px]
                                "/>
                <p className=" text-[12px]
                                md:text-[16px]
                                xl:px-2"
                                data-aos="zoom-in-down" data-aos-delay="500">I'd like to help improve by joining the <span className="text-red-600">Reasearch Group</span></p>
                </div>
                
                    <div className="w-full flex justify-evenly mt-10"
                        data-aos="zoom-in-down" data-aos-delay="500">
                        <button type="submit" className="py-3 px-6 bg-gradient-to-t to-white/80 from-pink-400 text-pink-500 rounded-xl text-lg shadow-2xl shadow-white/90
                                hover:bg-gradient-to-t hover:to-pink-300 transition duration-300 hover:text-white font-bold
                                xl:px-10">Submit</button>
                        <button type="reset" className="py-3 px-6 bg-white/30 text-pink-500 font-bold rounded-xl text-lg shadow-2xl shadow-white/90
                                hover:bg-gradient-to-t to-white/60 from-pink-400 hover:text-white transition duration-300
                                xl:px-10">Cancel</button>
                    </div>
               
            </div>
        </div>
     </div>
    </div>
  )
}
