import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home_card() {
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
            <div className='xl:w-[25%] md:w-[50%] w-[90%] m-auto rounded-3xl py-4 border-dashed  border-4 border-yellow-200' data-aos="zoom-in-down" data-aos-delay="500">
                <h1 className='text-yellow-200 text-4xl font-bold text-center
                            md:text-5xl'>
                    Comming Soon
                </h1>
                <p className='border-2 border-yellow-400 mt-2 w-[80%] m-auto opacity-75
                          md:w-[55%]'></p>
                <p className='border-2 border-purple-400  w-[80%] m-auto opacity-75
                          md:w-[55%]'></p>
            </div>
            <div className='
                    grid grid-cols-2 gap-5 px-5 py-5
                    md:grid-cols-4
            ' data-aos="zoom-in-down" data-aos-delay="300">
                <div className="relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card6.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full text-lg bg-black/30 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out hidden
                 px-5 py-7 xl:flex flex-wrap justify-center items-center"
                        >
                            <h1 className="w-full text-center text-2xl font-bold">Product Review</h1>
                            <p className="w-full">
                                I've been using this skincare product for a while and I'm really impressed!
                                Doesn't feel greasy at all. After consistent use, I noticed my skin becoming smoother and healthier. 🌸🌿
                            </p>
                            <div className="profile overflow-hidden p-1 shadow-2xl shadow-white">
                                <img src="/Card/card6.jpg" alt="" className=" object-cover rounded-full" />
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bg-gradient-to-t to-pink-300 from-gray-500 border-white text-pink-500 rounded-full py-2 px-4 font-bold 
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-t hover:to-pink-300 hover:from-gray-400 xl:bottom-10"
                        >
                            View
                        </button>
                    </div>
                </div>
                <div className="relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card3.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full text-lg bg-black/30 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out hidden
                 px-5 py-7 xl:flex flex-wrap justify-center items-center"
                        >
                            <h1 className="w-full text-center text-2xl font-bold">Product Review</h1>
                            <p className="w-full">
                                I've been using this skincare product for a while and I'm really impressed!
                                Doesn't feel greasy at all. After consistent use, I noticed my skin becoming smoother and healthier. 🌸🌿
                            </p>
                            <div className="profile overflow-hidden p-1 shadow-2xl shadow-white">
                                <img src="/Card/card3.jpg" alt="" className=" object-cover rounded-full" />
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bg-gradient-to-t to-pink-300 from-gray-500 border-white text-pink-500 rounded-full py-2 px-4 font-bold 
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-t hover:to-pink-300 hover:from-gray-400 xl:bottom-10"
                        >
                            View
                        </button>
                    </div>
                </div>
                <div className="relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card9.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full text-lg bg-black/30 shadow-lg shadow-white/50 rounded-3xl hidden
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out
                 px-5 py-7 xl:flex flex-wrap justify-center items-center"
                        >
                            <h1 className="w-full text-center text-2xl font-bold">Product Review</h1>
                            <p className="w-full">
                                I've been using this skincare product for a while and I'm really impressed!
                                Doesn't feel greasy at all. After consistent use, I noticed my skin becoming smoother and healthier. 🌸🌿
                            </p>
                            <div className="profile overflow-hidden p-1 shadow-2xl shadow-white">
                                <img src="/Card/card9.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bg-gradient-to-t to-pink-300 from-gray-500 border-white text-pink-500 rounded-full py-2 px-4 font-bold 
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-t hover:to-pink-300 hover:from-gray-400 xl:bottom-10"
                        >
                            View
                        </button>
                    </div>
                </div>
                <div className="relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card5.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full text-lg bg-black/30 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out hidden
                 px-5 py-7 xl:flex flex-wrap justify-center items-center"
                        >
                            <h1 className="w-full text-center text-2xl font-bold">Product Review</h1>
                            <p className="w-full">
                                I've been using this skincare product for a while and I'm really impressed!
                                Doesn't feel greasy at all. After consistent use, I noticed my skin becoming smoother and healthier. 🌸🌿
                            </p>
                            <div className="profile overflow-hidden p-1 shadow-2xl shadow-white">
                                <img src="/Card/card5.jpg" alt="" className=" object-cover rounded-full" />
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bg-gradient-to-t to-pink-300 from-gray-500 border-white text-pink-500 rounded-full py-2 px-4 font-bold 
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-t hover:to-pink-300 hover:from-gray-400  xl:bottom-10"
                        >
                            View
                        </button>
                    </div>
                </div>




            </div>
        </div>
    )
}
