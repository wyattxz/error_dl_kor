import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
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
        <div className='px-5 xl:px-40 xl:py-10'>
            
            <div className='' data-aos="zoom-in-down" data-aos-delay="300">
                <div className='w-full h-[450px] mt-12 flex flex-wrap rounded-3xl overflow-hidden shadow-md shadow-pink-300 border-2 border-pink-400
                xl:h-[800px]'>
                    <div className='w-full h-[70%] 
                                    md:w-[50%] md:h-full md:rounded-3xl md:overflow-hidden
                                    xl:w-[50% xl:full xl:rounded-3xl xl:overflow-hidden]'>
                        <img src="/Card/card1.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='px-5 w-full h-[30%] py-4
                                    md:w-[50%] md:h-full md:flex md:flex-wrap md:justify-center md:items-center md:space-y-2
                                    xl:w-[50%] xl:h-full xl:flex xl:flex-wrap xl:justify-center xl:items-center xl:space-y-2 '>
                        <h1 className='text-xl  font-bold text-pink-500 
                                       md:text-6xl md:text-center
                                       xl:text-8xl xl:text-center'
                                       data-aos="zoom-in-down" data-aos-delay="300">
                            Product Recommend For Girl</h1>
                        <p className='w-[90%] text-gray-600 py-2 
                                      md:hidden'
                                      data-aos="zoom-in-down" data-aos-delay="300">
                                        This product is amazing! The quality is ...</p>
                        <p className='w-[90%] text-gray-600 hidden
                                      md:flex
                                      xl:hidden'
                                      data-aos="zoom-in-down" data-aos-delay="300">
                                        This product is amazing! The quality is excellent, and it works just as promised. I'm really happy with my purchase and will definitely buy again.</p>
                        <p className='w-[90%] text-gray-600 hidden text-lg mt-15
                                      xl:flex ' data-aos="zoom-in-down" data-aos-delay="300">
                                        I love how natural and safe the ingredients are — it makes me feel confident every day.Totally worth the price, I would recommend it to anyone who wants real results!
                                        This product exceeded my expectations. It's gentle but very effective.I love the natural formula, no irritation at all.feel more confident with my skin now.
                                         I love how natural and safe the ingredients are — it makes me feel confident every day.Totally worth the price, I would recommend it to anyone who wants real results!
                                        This product exceeded my expectations. It's gentle but very effective.I love the natural formula, no irritation at all.feel more confident with my skin now.</p>
                        <div className='w-full relative
                                        md:h-[50px]'>
                            <button type='submit' className='py-2 px-4 absolute text-xl top-0 left-0 shadow-lg shadow-gray-400 bg-gradient-to-bl to-white/50 from-pink-400 text-pink-500 rounded-xl
                                    md:py-3 md:px-5 md:left-[30%]  
                                    xl:py-5 xl:px-10 xl:right-[30%] xl:ml-25
                                    hover:bg-gradient-to-t hover:to-pink-300 transition duration-300 hover:text-white font-bold ' data-aos="zoom-in-down">
                                        More Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
