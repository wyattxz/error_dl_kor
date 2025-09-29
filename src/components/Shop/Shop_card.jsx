import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Next_back_page from "./Next_back_page";
import Name_product from "./Name_product";
import Customer_cmt from "./Customer_cmt";


export default function Shop_card() {
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
            <div className="">
           
            </div>
            <div className='mt-10 py-10 md:py-24 xl:py-20 xl:mt-10' data-aos="zoom-in-down" data-aos-delay="500">
                <h1 className=' text-5xl font-bold text-center
                            md:text-7xl bg-pink-300 
                            '>
                    <span className='text-purple-400'>My </span>
                    <span className='text-white/50'>product</span>
                    
                </h1>
                <p className='border-2 border-yellow-400 mt-2 w-[80%] m-auto opacity-75
                          md:w-[55%]'></p>
                <p className='border-2 border-purple-400  w-[80%] m-auto opacity-75
                          md:w-[55%]'></p>
            </div>
            <div>
                <Name_product/>
            </div>

            <div className='
                    grid grid-cols-2 gap-5 px-5 py-10
                    md:grid-cols-3
                    xl:grid-cols-3 xl:px-72 xl:gap-10
            ' data-aos="zoom-in-down" data-aos-delay="300">
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card6.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Glow & Shine Natural Skincare ✨</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card3.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Shine Bright Whitening Cream ✨</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card9.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Healthy Glow Vitamin C Serum 🍊</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card5.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card2.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card7.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card1.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500">
                    <img
                        src="/Card/card4.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500 
                        hidden md:flex">
                    <img
                        src="/Card/card10.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500 
                        hidden xl:flex">
                    <img
                        src="/Card/card1.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500 
                        hidden xl:flex">
                    <img
                        src="/Card/card6.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px] xl:h-[400px] relative group rounded-3xl overflow-hidden shadow-md shadow-pink-400 border-2 border-pink-500 
                        hidden xl:flex">
                    <img
                        src="/Card/card9.jpg"
                        alt="Product Card"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                        <div
                            className="absolute top-0 w-full h-[75%] text-lg bg-black/20 shadow-lg shadow-white/50 rounded-3xl 
                 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out 
                 px-5 py-2 flex flex-wrap justify-center md:py-10
                 xl:h-[50%]"
                        >
                            <h1 className="text-center text-lg font-bold text-white border-t-4 border-pink-400
                            ">Smooth Touch Moisturizer💧</h1>
                            <div className="absolute bottom-1 p-1 text-center bg-white/30 border-2 border-white/80 rounded-3xl flex justify-center items-center shadow-2xl shadow-white/60
                                    md:bottom-10 md:p-2
                                     hover:bg-gradient-to-bl to-pink-400 from-yellow-300 hover:border-pink-400">
                                <p className="text-xl font-bold ">Price</p>
                                <span className="px-2 font-bold text-xl">:</span>
                                <span className="rounded-3xl p-1 bg-gradient-to-bl to-pink-400 from-yellow-300">$18</span>
                            </div>
                        </div>

                        <button
                            className=" absolute text-xl border-4 bgwhite/30 border-white text-white rounded-3xl py-1 px-2 font-bold bottom-1 shadow-2xl shadow-white/60
                 hidden group-hover:flex transition duration-300 cursor-pointer
                 hover:text-white hover:border-pink-400 hover:bg-gradient-to-bl to-pink-400 from-yellow-300 
                 xl:bottom-20"
                        >
                            Add to card
                        </button>
                    </div>
                </div>

            </div>
            <Next_back_page/>
            <Customer_cmt/>
        </div>
    )
}
