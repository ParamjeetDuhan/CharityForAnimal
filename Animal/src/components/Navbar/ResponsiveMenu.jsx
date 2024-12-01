import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({showMenu}) => {
  return (
    <>
      <div className={`fixed top-0 z-50 ${showMenu ? "left-0" : " -left-[100%] "} h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white
          z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between md:hidden`}>
        {/* Navbar section */}
        <div>
            {/* user section */}
            <div className='flex items-center justify-start gap-3'>
            <Link to="/Profile"><FaUserCircle  size={90}/></Link>
            <div>
            <h1 className='text-xl font-semibold'>ParamJeet Singh</h1>
            <h1 className='text-sm text-slate-500'>+27387394</h1>
        </div>
        </div>
        {/* Menu section */}
        <nav className='mt-14'>
            <ul className='space-y-6 text-lg font-semibold'>
                <li>
                    <Link to="/"><a href="#">Home</a></Link>
                </li>
                <li>
                   <Link to="/Services"><a href="#">Services</a></Link>
                </li>
                <li>
                    <Link to="/Call"><a href="#">Contact</a></Link>
                </li>
            </ul>
        </nav>
        </div>
        {/* Nav Footer Section */}
        <div>
            <p>@2024 All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default ResponsiveMenu;
