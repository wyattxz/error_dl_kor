import { MdDeliveryDining } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Dilivery() {
    return (
        <div className="border-2 border-gray-100 mt-20 grid md:grid-cols-4">
            <div className="w-full py-5 border-b-2 border-red-200 text-center px-3">
                <div className="h-[150px] md:h-[250px] flex justify-center items-center flex-wrap">
                  <span className="text-6xl md:text-5xl text-red-600"><TbTruckDelivery /></span>
                  <h3 className="w-full flex justify-center font-bold text-xl ">Free Standard Delivery</h3>
                  <p>On all Order Over $100</p>
                </div>
            </div>
            <div className="w-full py-5 border-b-2 border-red-200 text-center px-3">
                <div className="h-[150px] md:h-[250px] flex justify-center items-center flex-wrap">
                  <span className="text-6xl md:text-5xl text-red-600"> <MdDeliveryDining /></span>
                  <h3 className="w-full flex justify-center font-bold text-xl ">Quick Delivery</h3>
                  <p className="">Delivery within 3 Days across US</p>
                </div>
            </div>
            <div className="w-full py-5 border-b-2 border-red-200 text-center px-3">
                <div className="h-[150px] md:h-[250px] flex justify-center items-center flex-wrap">
                  <span className="text-6xl md:text-5xl text-red-600"><MdOutlinePayment /></span>
                  <h3 className="w-full flex justify-center font-bold text-xl ">Secure Payments</h3>
                  <p>Secure Payment Methods</p>
                </div>
            </div>
            <div className="w-full py-5 border-b-2 border-red-200 text-center px-3">
                <div className="h-[150px] md:h-[250px] flex justify-center items-center flex-wrap">
                  <span className="text-6xl md:text-5xl text-red-600 py-3"><RiCustomerService2Fill /></span>
                  <h3 className="w-full flex justify-center font-bold text-xl ">Top Rated Customer Service</h3>
                  <p>Quick Responses & Solutions</p>
                </div>
            </div>
        </div>
    )
}