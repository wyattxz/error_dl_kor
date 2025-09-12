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
      <nav className='w-full h-[70px] md:flex hidden fixed top-0 left-0 bg-green-600 z-50'>
        <div className='w-[20%] h-full px-10'>
          <img src="/logo/logo.png" alt="" className='w-[70px] h-[70px] '/>
        </div>
        <div className='w-[70%] h-full'>
          <ul className='h-full flex justify-evenly items-center text-xl font-medium'>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/about'}>About</Link>
            </li>
           <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/careers'}>Careers</Link>
            </li>
           <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/faq'}>FAQ's</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
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
      <nav className='w-full h-[70px] shadow-md flex  md:hidden fixed top-0 left-0 z-50 bg-green-600'>
        <div className='w-[50%] px-4 py-2'>
          <img src="logo/logo.png" alt="" className='h-full w-[50px]' />
        </div>
        <div className='w-[50%] flex justify-end px-5 items-center text-3xl'>
          <div onClick={() => setMenu(!menu)}>
            {menu ? <IoClose /> : <IoMenu />}
          </div>
        </div>

        {/* Sidebar */}
        <div className={`h-full shadow-2xl bg-white/10 z-50 fixed top-16 left-0 transition-all duration-300 overflow-hidden ${menu ? 'w-[50%]' : 'w-0'}`}>
          <ul className='text-green-600 p-6 text-2xl space-y-4 font-bold'>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/about'}>About</Link>
            </li>
           <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/careers'}>Careers</Link>
            </li>
           <li className='cursor-pointer hover:text-red-500'>
              <Link to={'/faq'}>FAQ's</Link>
            </li>
            <li className='cursor-pointer hover:text-red-500'>
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
