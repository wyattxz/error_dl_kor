
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Name_product() {
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
      <div className="w-[90%] m-auto h-[160px] overflow-hidden flex justify-center items-center rounded-2xl 
                     " data-aos="zoom-in-down" data-aos-delay="300">
                <ul className='text-white bg-pink-200  py-5 flex flex-wrap justify-center gap-5 md:rounded-2xl xl:w-[80%]'>
                    <li className='bg-pink-300 rounded-3xl px-2 md:px-4 md:py-4 py-2 hover:bg-gradient-to-b to-pink-300 from-white/60 transition duration-300 ease-in-out ' data-aos="zoom-in-down" data-aos-delay="500" >SunShield Glow</li>
                    <li className='bg-pink-300 rounded-3xl px-2 md:px-4 md:py-4 py-2 hover:bg-gradient-to-b to-pink-300 from-white/60 transition duration-300 ease-in-out' data-aos="zoom-in-down" data-aos-delay="500">Radiant Guard SPF</li>
                    <li className='bg-pink-300 rounded-3xl px-2 md:px-4 md:py-4 py-2 hover:bg-gradient-to-b to-pink-300 from-white/60 transition duration-300 ease-in-out' data-aos="zoom-in-down" data-aos-delay="500">LumiCare Sun Defense</li>
                    <li className='bg-pink-300 rounded-3xl px-2 md:px-4 md:py-4 py-2 hover:bg-gradient-to-b to-pink-300 from-white/60 transition duration-300 ease-in-out' data-aos="zoom-in-down" data-aos-delay="500">Solar Silk</li>
                    <li className='bg-pink-300 rounded-3xl px-2 md:px-4 md:py-4 py-2 hover:bg-gradient-to-b to-pink-300 from-white/60 transition duration-300 ease-in-out' data-aos="zoom-in-down" data-aos-delay="500">BrightRay Shield</li>
                    <li className='bg-pink-300 rounded-3xl px-2 md:px-4 md:py-4 py-2 hover:bg-gradient-to-b to-pink-300 from-white/60 transition duration-300 ease-in-out' data-aos="zoom-in-down" data-aos-delay="500">Aqua SunLock</li>
                </ul>
            </div>
    </div>
  )
}
