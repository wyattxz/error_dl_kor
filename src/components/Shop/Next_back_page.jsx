import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
export default function Next_back_page() {
    useEffect(() => {
                    AOS.init({
                        duration: 1600, // animation duration in ms
                        easing: "ease-in-out",
                        once: true, // whether animation should happen only once
                    });
                }, []);
  return (
    <div>
      <div className="py-5 px-10
                md:px-20
                xl:px-96" data-aos="zoom-in">
                <ul className="flex justify-center gap-5  rounded-2xl bg-pink-400 p-2">
                    <li className="shadow-xl hover:bg-white hover:text-pink-500 transition duration-[600ms] py-2 px-4 rounded-3xl">
                        <Link to={'/p1'}>Back</Link>
                    </li>
                    <li className="shadow-xl hover:bg-white hover:text-pink-500 transition duration-[600ms] py-2 px-4 rounded-3xl">
                        <Link to={'/p1'}>1</Link>
                    </li>
                    <li className="shadow-xl hover:bg-white hover:text-pink-500 transition duration-[600ms] py-2 px-4 rounded-3xl">
                        <Link to={'/p2'}>2</Link>
                    </li>
                    <li className="shadow-xl hover:bg-white hover:text-pink-500 transition duration-[600ms] py-2 px-4 rounded-3xl">
                        <Link to={'/p2'}>Next</Link>
                    </li>
                </ul>
            </div>
    </div>
  )
}
