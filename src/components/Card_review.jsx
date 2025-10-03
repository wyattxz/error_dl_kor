import React, { useEffect } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card_review() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const ratings = [
    { star: 5, percent: 84 },
    { star: 4, percent: 9 },
    { star: 3, percent: 4 },
    { star: 2, percent: 2 },
    { star: 1, percent: 1 },
  ];

  return (
    <div
      className="w-full px-5 py-10 md:w-[90%] m-auto md:text-center xl:w-[40%]"
      data-aos="zoom-in-down"
      data-aos-delay="300"
    >
      <div className="min-h-[400px] grid grid-cols-1 gap-5 overflow-hidden bg-black/5 rounded-3xl shadow-2xl shadow-black/20">
        <div className="px-5 py-5 border-2 border-black/50 rounded-3xl">
          <h1
            className="text-black text-center text-2xl font-bold py-2  dark:text-white"
            data-aos="zoom-in-down"
            data-aos-delay="400" 
          >
            Customer Review
          </h1>

          {/* Stars */}
          <div
            className="w-[80%] py-2 bg-white/60 shadow-xl shadow-black/20 flex justify-center m-auto text-yellow-400 text-2xl gap-1 rounded-3xl md:w-[50%] xl:w-[30%]"
            data-aos="zoom-in-down"
            data-aos-delay="400"
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>

          <p
            className="text-black/60 font-medium text-center py-4 text-sm md:text-base  dark:text-white"
            data-aos="zoom-in-down"
            data-aos-delay="700"
          >
            168 customer ratings
          </p>

          {/* Rating bars */}
          <div className="w-full space-y-3" data-aos="zoom-in-down" data-aos-delay="400">
            {ratings.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:justify-between w-full">
                <span className="w-[25%] text-blue-500 font-bold text-sm md:text-md">{item.star} Star</span>
                <div className="flex items-center w-[70%] bg-white/90 rounded-3xl h-5 md:h-4">
                  <div
                    className="bg-yellow-400 h-full rounded-3xl"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                  <span className="ml-2 text-black text-sm">{item.percent}%</span>
                </div>
              </div>
            ))}

            <button className="text-blue-500 mt-5 hover:text-pink-500 text-sm md:text-base">
              How do we calculate rating?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
