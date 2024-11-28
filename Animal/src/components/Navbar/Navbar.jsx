import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container text-white">
            <div className='bg-gray-800'>
                {/* Logo Section*/ }
                <div className='text-2xl md:text-3xl uppercase  inline-flex'>
                    <a href="#">CHARITY <span>For</span> <span className='inline-block font-bold text-primary'>Animals</span></a>
                </div>
                {/* desktop Section*/ }
                    <div className='text-sm md:text-xl  inline-flex flex-row gap-3 text-center'>
                        <ul>
                            <li className='group relative cursor-pointer'>
                                <a href="#" className='flex items-center gap-[2px] h-[72px]'>
                                    Home{""}
                                      <span>
                                      <FaCaretDown className='group-hover:rotate-180' />
                                      </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                {/* Mobile Section*/ }
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;


