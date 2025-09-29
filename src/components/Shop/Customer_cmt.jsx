import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCircle } from "react-icons/fa";

export default function Customer_cmt() {
    useEffect(() => {
                        AOS.init({
                            duration: 1600, // animation duration in ms
                            easing: "ease-in-out",
                            once: true, // whether animation should happen only once
                        });
                    }, []);
  return (
    <div>
        <div className="py-5 border-b-2 border-pink-400" data-aos="zoom-in-down" data-aos-delay="300">
           <h1 className="text-pink-400 text-2xl font-bold text-center"> Customer Comment</h1>
        </div>
      <div className='grid grid-cols-1 gap-5 px-10 py-5
                    md:grid-cols-2
                    xl:grid-cols-2 xl:w-[80%] m-auto'>
          <div className='bg-pink-400 flex  rounded-3xl overflow-hidden' data-aos="zoom-in-down" data-aos-delay="300">
              <div className='w-[25%] xl:w-[10%] h-full  flex justify-center items-center'>
                   <p className="text-6xl text-center" data-aos="zoom-in-down" data-aos-delay="500"><FaUserCircle /></p>
              </div>
              <div className='w-[75%] xl:w-[90%] h-full'>
                   <p className="py-2 px-1 xl:text-lg" data-aos="zoom-in-down" data-aos-delay="500">I love this sunscreen! It feels so light on my skin and doesn't leave a white cast. Perfect for daily use.</p>
              </div>
          </div>
          <div className='bg-pink-400 flex  rounded-3xl overflow-hidden' data-aos="zoom-in-down" data-aos-delay="300">
              <div className='w-[25%] xl:w-[10%] h-full  flex justify-center items-center'>
                   <p className="text-6xl text-center" data-aos="zoom-in-down" data-aos-delay="500"><FaUserCircle /></p>
              </div>
              <div className='w-[75%] xl:w-[90%] h-full'>
                   <p className="py-2 px-1 xl:text-lg" data-aos="zoom-in-down" data-aos-delay="500">Great sunscreen! Absorbs quickly, gives me confidence outdoors, and keeps my skin healthy all day</p>
              </div>
          </div>
          <div className='bg-pink-400 flex  rounded-3xl overflow-hidden' data-aos="zoom-in-down" data-aos-delay="300">
              <div className='w-[25%] xl:w-[10%] h-full  flex justify-center items-center'>
                   <p className="text-6xl text-center" data-aos="zoom-in-down" data-aos-delay="500"><FaUserCircle /></p>
              </div>
              <div className='w-[75%] xl:w-[90%] h-full'>
                   <p className="py-2 px-1 xl:text-lg" data-aos="zoom-in-down" data-aos-delay="500">This product is amazing! I use it every morning, and my skin feels soft and safe under the sun.</p>
              </div>
          </div>
          <div className='bg-pink-400 flex  rounded-3xl overflow-hidden' data-aos="zoom-in-down" data-aos-delay="300">
              <div className='w-[25%] xl:w-[10%] h-full  flex justify-center items-center'>
                   <p className="text-6xl text-center" data-aos="zoom-in-down" data-aos-delay="500"><FaUserCircle /></p>
              </div>
              <div className='w-[75%] xl:w-[90%] h-full'>
                   <p className="py-2 px-1 xl:text-lg" data-aos="zoom-in-down" data-aos-delay="500">Finally found a sunscreen that keeps my skin protected and glowing. No stickiness, just smooth </p>
              </div>
          </div>
      </div>
    </div>
  )
}
