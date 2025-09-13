
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ourcategories() {
     useEffect(() => {
            AOS.init({
                duration: 1600, // animation duration in ms
                easing: "ease-in-out",
                once: true, // whether animation should happen only once
            });
        }, []);
    return (
        <div className=''>
            <div className='w-full flex justify-center py-20'>
                <div className='w-[90%] text-center' data-aos="zoom-in">
                    <h1 className='font-bold text-4xl py-3'>Our Categories</h1>
                    <p className='text-center'>Explore a wide range of styles, handpicked to suit every test and need</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full xl:w-[80%] xl:m-auto" data-aos="zoom-in">
                <div className='w-full grid grid-cols-1 relative mb-16 lg:mb-24 ' >
                    <div className='lg:h-[350px] xl:h-[420px] w-full h-[250px] rounded-[25px] overflow-hidden border-2 border-black'>
                        <img src="/card/card1.png" alt="" className='w-full h-full object-cover  hover:scale-110  hover:scale-110' />
                    </div>
                    <div className='bg-green-400 lg:w-[81%] w-[91%] h-[100px] absolute lg:left-8 lg:top-80 xl:top-96 top-52 left-4 rounded-[15px] flex justify-center flex-wrap'>
                        <div className='w-[70%] text-center py-2'>
                            <h1 className='text-2xl font-bold p-2'>Women Wear</h1>
                            <button className='hover:text-red-400'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 relative mb-16 lg:mb-24 '>
                    <div className='lg:h-[350px] xl:h-[420px] w-full h-[250px] rounded-[25px] overflow-hidden border-2 border-black'>
                        <img src="/card/card1.png" alt="" className='w-full h-full object-cover  hover:scale-110' />
                    </div>
                    <div className='bg-green-400 lg:w-[81%] w-[91%] h-[100px] absolute lg:left-8 lg:top-80 xl:top-96 top-52 left-4 rounded-[15px] flex justify-center flex-wrap'>
                        <div className='w-[70%] text-center py-2'>
                            <h1 className='text-2xl font-bold p-2'>Women Wear</h1>
                            <button className='hover:text-red-400'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 relative mb-16 lg:mb-24 '>
                    <div className='lg:h-[350px] xl:h-[420px] w-full h-[250px] rounded-[25px] overflow-hidden border-2 border-black'>
                        <img src="/card/card1.png" alt="" className='w-full h-full object-cover  hover:scale-110' />
                    </div>
                    <div className='bg-green-400 lg:w-[81%] w-[91%] h-[100px] absolute lg:left-8 lg:top-80 xl:top-96 top-52 left-4 rounded-[15px] flex justify-center flex-wrap'>
                        <div className='w-[70%] text-center py-2'>
                            <h1 className='text-2xl font-bold p-2'>Women Wear</h1>
                            <button className='hover:text-red-400'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 relative mb-16 lg:mb-24 '>
                    <div className='lg:h-[350px] xl:h-[420px] w-full h-[250px] rounded-[25px] overflow-hidden border-2 border-black'>
                        <img src="/card/card1.png" alt="" className='w-full h-full object-cover  hover:scale-110' />
                    </div>
                    <div className='bg-green-400 lg:w-[81%] w-[91%] h-[100px] absolute lg:left-8 lg:top-80 xl:top-96 top-52 left-4 rounded-[15px] flex justify-center flex-wrap'>
                        <div className='w-[70%] text-center py-2'>
                            <h1 className='text-2xl font-bold p-2'>Women Wear</h1>
                            <button className='hover:text-red-400'>Shop Now</button>
                        </div>
                    </div>
                </div>
                
                
                
            </div>


        </div>
    )
}
