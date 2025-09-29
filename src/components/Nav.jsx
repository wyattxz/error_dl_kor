import React, { useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {/* ------------ Desktop Navbar ------------- */}
      <nav className='w-full h-[70px] hidden fixed top-0 left-0 bg-gradient-to-bl to-white/50 from-pink-400 shadow-md shadow-gray-300 z-50
                      md:flex '>
        <div className='w-[20%] h-full px-10'>
          <img src="/logo/logo.png" alt="" className='w-[70px] h-[70px] '/>
        </div>
        <div className='w-[70%] h-full'>
          <ul className='h-full flex justify-evenly items-center text-xl font-medium'>
            <li className='cursor-pointer hover:text-pink-500 hover:scale-110 p-5'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='cursor-pointer hover:text-pink-500 hover:scale-110 p-5'>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className='cursor-pointer hover:text-pink-500 hover:scale-110 p-5'>
              <Link to={'/about'}>About</Link>
            </li>
            <li className='cursor-pointer hover:text-pink-500 hover:scale-110 p-5'>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='w-[15%] h-full flex justify-evenly items-center text-3xl '>
          <MdAccountCircle className='cursor-pointer'/>
          <FaShoppingBag  className='cursor-pointer'/>
        </div>
      </nav>

      {/* ------------ Mobile Navbar ------------- */}
      <nav className='w-full h-[64px] flex fixed top-0 left-0 z-50 bg-gradient-to-bl to-white/50 from-pink-400 shadow-md shadow-gray-300
                      md:hidden'>
        <div className='w-[50%] px-4 py-1'>
          <img src="/logo/logo.png" alt="" className='h-full w-[60px]' />
        </div>
        <div className='w-[50%] flex justify-end px-4 items-center text-4xl text-white'>
          <div onClick={() => setMenu(!menu)}>
            {menu ? <IoClose /> : <IoMenu />}
          </div>
        </div>

        {/* Sidebar */}
        <div className={`h-full shadow-lg shadow-gray-500 bg-gradient-to-t to-gray-400 from-gray-600 z-50 fixed top-16 left-0 transition-all duration-300 overflow-hidden ${menu ? 'w-[50%]' : 'w-0'}`}>
          <ul className='text-white p-6 text-3xl space-y-5 font-bold '>
            <li className='cursor-pointer hover:text-pink-400 hover:scale-110 p-2 text-center border-2 border-pink-400 rounded-3xl shadow-lg shadow-pink-400'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='cursor-pointer hover:text-pink-400 hover:scale-110 p-2 text-center border-2 border-pink-400 rounded-3xl shadow-lg shadow-pink-400'>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className='cursor-pointer hover:text-pink-400 hover:scale-110 p-2 text-center border-2 border-pink-400 rounded-3xl shadow-lg shadow-pink-400'>
              <Link to={'/about'}>About</Link>
            </li>
            <li className='cursor-pointer hover:text-pink-400 hover:scale-110 p-2 text-center border-2 border-pink-400 rounded-3xl shadow-lg shadow-pink-400'>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>


        {/* Overlay */}
        <div className={`h-[100vh] z-50 fixed top-0 right-0 transition-all duration-300 ${menu ? 'w-[50%]' : 'w-0'}`} onClick={() => setMenu(false)}>
        
        </div>
      </nav>
    </div>

  );
}
