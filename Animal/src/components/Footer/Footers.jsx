import React from 'react';
import { FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow,FaMobileAlt } from 'react-icons/fa';
import FooterLinks from './FooterLinks';

const importantLinks = [
    {
        name:"Home",
    },
    {
        name:"About",
    },
    {
        name:"Service",
    },
    {
        name:"Login",
    },
];
const links = [
    {
        name:"Privacy Policy",
    },
    {
        name:"Services",
    },
    {
        name:"About us",
    },
];
const Footers = () => {
  return (
    <div className='text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900 fixed bottom-0'>
      <div className='mx-auto w-full p-4'>
        {/* Footer Containt Section */}
            <div className='grid grid-cols-1 gap-1 py-2 md:grid-cols-3'>
                <div className='px-4 py-8'>
                   <h1 className='mb-3 text-justify text-xl sm:text-left sm:text-3xl'>
                    <a href="/#home" className='uppercase'>Charity
                    <span className='inline-block font-bold text-primary'><span>For </span> Animals</span>
                    </a>
                   </h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas doloribus minima 
                    odit mollitia minus deserunt qui, explicabo necessitatibus, amet dolore corrupti laborum ea perspiciatis 
                    doloremque adipisci tempora, molestias libero.</p>
                    <div className='flex items-center gap-3 mt-3'>
                      <FaLocationArrow/>
                      <p>Greater Noida ,UttarPradesh</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                         <FaMobileAlt/>
                         <p>+91 8923500783</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 '>
                     <div className='px-4 py-8'> 
                        <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl inline-block '>Important Links</h1>
                        <ul className='flex flex-col gap-3 mt-4'>
                            <FooterLinks Links={importantLinks}/>
                        </ul>
                     </div>
                     <div className='px-4 py-8'> 
                        <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl '>Links</h1>
                        <ul className='flex flex-col gap-3 mt-4'>
                            <FooterLinks Links={links}/>
                        </ul>
                     </div>
                </div>
            </div>
        {/* footer coptright section */}
        <div className='bootom-footer'>
            <p className='border-t-2 border-gray-500/5 py-6 text-center'>
            Copyright 2024. All Rights reserved
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footers;

