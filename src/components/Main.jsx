import Bestseller from "./Bestseller";
import Dilivery from "./Dilivery";
import Form from "./Form";
import New from "./New";
import Ourcategories from "./Ourcategories";

import Slide from "./Slide";


export default function Main() {
    return (
        <>
            <div className="w-full px-5  xl:px-7 py-10  ">
                <div className="w-full md:flex">
                    <div className="md:w-[50%] ">
                        <h1 className="text-4xl font-bold text-center md:text-start">New Arrivals</h1>
                        <div className="md:w-full">
                            <p className="text-center mt-3 md:text-start">Be the first to wear this season’s latest looks. Handpicked and freshly styled.</p>
                        </div>

                    </div>
                    <div className="md:w-[50%]  flex items-center">
                        <div className="w-full flex justify-center md:justify-end  py-4">
                            <div className="border-2 border-red-500 px-10 py-3 rounded-[25px] text-red-500 duration-300 hover:bg-red-500 hover:text-white">
                                <p className="font-bold">SEE WHAT'S NEW</p>
                            </div>
                        </div>
                    </div>
                </div>

                <New/>
               
                <Ourcategories/>

                 <Bestseller/>

                 <Form/>
                 
                 <Dilivery/>
                 
                 <Slide/>
            </div>

        </>
    )
}