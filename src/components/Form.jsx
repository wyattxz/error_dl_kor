import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";


export default function Form() {
     useEffect(() => {
                AOS.init({
                    duration: 1600, // animation duration in ms
                    easing: "ease-in-out",
                    once: true, // whether animation should happen only once
                });
            }, []);
    return (
        <>
            <div className='py-14 w-full h-[400px] md:h-[300px]' data-aos="zoom-in">
                <div className='w-full flex justify-center text-center flex-wrap'>
                    <h1 className='w-full font-bold text-3xl'>Get 10% Off on Your First Order</h1>
                    <p className='py-5'>Plus exclusivce access to product drops, style tips, and insider deals.</p>
                </div>

                <form action="" className='w-full h-[50px] md:flex md:w-[80%] md:m-auto md:mt-8 lg:w-[50%]'>
                    <input type="text" placeholder='ENTER YOUR EMAIL  *' className='w-full h-full md:w-[70%] shadow-2xl border-2 border-b-green-600 px-3 rounded-lg  hover:border-green-500' />
                    <button type='submit' className='shadow-2xl bg-white/40 w-full h-[45px] md:w-[25%] md:mt-1 md:ml-5 mt-12 rounded-2xl text-lg font-medium text-black hover:bg-red-500  transition duration-500 ease-in-out 
             cursor-pointer'>SUBSCRIBE</button>
                </form>

            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 overflow-hidden' data-aos="zoom-in">
              <div className='overflow-hidden rounded-3xl'>
                    <img src="/card/card1.png" alt="" className=' rounded-3xl object-fit-cover hover:scale-110 '/>
              </div>
                            <div className=' w-full  overflow-hidden rounded-3xl'>
                    <img src="/card/card1.png" alt="" className=' rounded-3xl object-fit-cover hover:scale-110 '/>
              </div>
                            <div className=' w-full  overflow-hidden rounded-3xl'>
                    <img src="/card/card1.png" alt="" className=' rounded-3xl object-fit-cover hover:scale-110 '/>
              </div>
                            <div className=' w-full  overflow-hidden rounded-3xl'>
                    <img src="/card/card1.png" alt="" className=' rounded-3xl object-fit-cover hover:scale-110 '/>
              </div>
            </div>
            <div className='w-full mt-10 text-center flex justify-center' data-aos="zoom-in">
                <FaInstagram className='text-4xl text-red-500'/>
                <h2 className='text-xl font-bold pl-2 py-1'>Follow us</h2>
                <p className='pl-2'>@Iloveyou...</p>
            </div>
        </>
    )
}
