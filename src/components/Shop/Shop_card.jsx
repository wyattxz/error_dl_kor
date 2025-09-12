import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Shop_card() {
     useEffect(() => {
                AOS.init({
                    duration: 1600, // animation duration in ms
                    easing: "ease-in-out",
                    once: true, // whether animation should happen only once
                });
            }, []);
  return (
    <>
    <div className='w-full mt-24 px-5' data-aos="zoom-in">
        <div className='w-[80%] lg:w-[30%] md:w-[50%]'>
            <h1 className='text-4xl font-bold mt-5'>SHOP</h1>
        </div>
         <div className="border-b-2 border-black py-5"></div>
    </div>
    <div className="py-5 px-5">
        <p >Showing card</p>
    </div>
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 px-5" data-aos="zoom-in">
                <div className="my-3 shadow-md rounded-md">
                    <div>   
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                    
                </div>
                <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                 <div className="my-3 shadow-md rounded-md">
                    <div>
                        <img src="/card/card1.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">M</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">L</li>
                        <li className="border-2 cursor-pointer px-2 py-1 rounded-md">XL</li>
                    </ul>
                    <ul className="py-3 w-[80%] md:w-[55%] lg:w-[30%] flex justify-evenly">
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-black text-white font-medium">black</li>
                        <li className="border-2 cursor-pointer px-3 py-1 rounded-md bg-red-600 text-white font-medium">Red</li>
                        <li className="border-2 cursor-pointer px-1 py-1 rounded-md bg-green-600 text-white font-medium">Green</li>
                    </ul>
                </div>
                
            </div>
    </>
  )
}
