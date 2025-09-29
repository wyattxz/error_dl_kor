import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About_page() {
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
    <div className='w-[90%] m-auto mt-24'>
      <div className='w-full text-center flex flex-wrap justify-center'>
        <h1 className='w-[80%] lg:w-full text-black/90 text-5xl font-bold py-2 border-b-2 border-pink-300' data-aos="zoom-in-down" data-aos-delay="300">Our Story</h1>
        <p className='text-black/80 text-lg py-2' data-aos="zoom-in-down" data-aos-delay="500">Skincare that grouws with you.</p>
      </div>
   
      <div className='w-[80%] md:w-[60%] md:mt-5 xl:w-[40%] py-2 flex justify-center items-center m-auto border-2 border-pink-500 rounded-full' data-aos="zoom-in-down" data-aos-delay="300">
        <div className='profile2 rounded-full overflow-hidden
                      hover:bg-gradient-to-t to-white from-pink-400 ' >
          <img src="/About/About_card1.png" alt=""  className='w-full h-full object-cover' data-aos="zoom-in-down"/>
        </div>
      </div>
      <div className='w-[90%] md:w-[80%] md:py-10 xl:w-[50%] m-auto text-center py-5'>
        <p className='text-black/90 xl:text-lg' data-aos="zoom-in-down" data-aos-delay="500">we believe that beauty begins with nature. Our journey started with a simple 
          dream — to create skincare products that are safe, effective, and inspired by the natural ingredients that 
          our ancestors have trusted for generations. From coffee scrubs to turmeric blends and nourishing coconut oil,
          every product is carefully made to bring out the natural glow of your skin. We don't just sell skincare — we 
          share a lifestyle that values purity, confidence, and self-love.
          <p className='text-black/90 hidden xl:flex'>we believe that beauty begins with nature. Our journey started with a simple 
          dream — to create skincare products that are safe, effective, and inspired by the natural ingredients that 
          our ancestors have trusted for generations. From coffee scrubs to turmeric blends and nourishing coconut oil,
          every product is carefully made to bring out the natural glow of your skin. We don't just sell skincare — we 
          share a lifestyle that values purity, confidence, and self-love.
        </p>
        </p>
        
        
      </div>
      <div className='w-full text-center flex flex-wrap justify-center'>
        <h1 className='w-[80%] text-black/90 text-5xl font-bold py-2 border-b-2 border-pink-300 mt-5' data-aos="zoom-in-down" data-aos-delay="300">Our Mission</h1>
      </div>
      <div className='w-[90%] md:w-[80%] md:py-10 xl:w-[50%] m-auto text-center py-5'>
        <p className='text-black/90' data-aos="zoom-in-down" data-aos-delay="500">We are on a mission to make skincare simple, natural, and affordable for everyone.
         Our goal is to provide products that help you feel confident in your own skin, no matter your age or lifestyle.
         <p className='text-black/90 hidden xl:flex'>we believe that beauty begins with nature. Our journey started with a simple 
          dream — to create skincare products that are safe, effective, and inspired by the natural ingredients that 
          our ancestors have trusted for generations. From coffee scrubs to turmeric blends and nourishing coconut oil,
          every product is carefully made to bring out the natural glow of your skin. We don't just sell skincare — we 
          share a lifestyle that values purity, confidence, and self-love.
        </p>
        </p>
      </div>
      <div className='w-full text-center flex flex-wrap justify-center'>
         <h1 className='w-[80%] text-black/90 text-5xl font-bold py-2 border-b-2 border-pink-300 mt-5' data-aos="zoom-in-down" data-aos-delay="300">Why Choose Us</h1>
         <div className='grid grid-cols-1 gap-5 mt-5
         md:grid-cols-2 md:py-5'>
             <p className='text-black/80 bg-pink-300 py-5 px-5 text-lg rounded-3xl hover:bg-gradient-to-b to-white from-pink-400 ' data-aos="zoom-in-down" data-aos-delay="500">100% natural ingredients</p>
             <p className='text-black/80 bg-pink-300 py-5 px-5 text-lg rounded-3xl hover:bg-gradient-to-b to-white from-pink-400 ' data-aos="zoom-in-down" data-aos-delay="500">Gentle and safe for all skin types</p>
             <p className='text-black/80 bg-pink-300 py-5 px-5 text-lg rounded-3xl hover:bg-gradient-to-b to-white from-pink-400 ' data-aos="zoom-in-down" data-aos-delay="500">Trusted quality with visible results</p>
             <p className='text-black/80 bg-pink-300 py-5 px-5 text-lg rounded-3xl hover:bg-gradient-to-b to-white from-pink-400 ' data-aos="zoom-in-down" data-aos-delay="500">Affordable price, luxury feeling</p>
         </div>
      </div>
    </div>
    </>
  )
}
