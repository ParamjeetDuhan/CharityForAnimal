import React from 'react';
import HeroImg from '../../assets/dogs.webp';
import { HiIdentification } from 'react-icons/hi';

const bgStyle ={
    backgroundImage:'url(${HeroImg})',
    backgroundSize:'cover',
    backgroundPosition: 'top',
    backgroundRepeat:'no-repeat',
    width:'100%',
}
const Hero = () => {
  return (
    <div style={bgStyle}>
    <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black to-primary pt-32 
    pb-10 md:pt-48'>
        <div className="container">
            <div className='grid grid-cols-1 lg:grid-cols-2
            items-center gap-12 text-white'>
                {/* Hero Text section*/}
                <div className='flex flex-col items-center text-center
                gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>
                    <h1 className='text-5xl lg:text-7xl
                    font-bold'>Join Us in Changing Lives</h1>
                    <h2></h2>
                    <h3></h3>
                    <p> 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                       Mollitia vel odio perspiciatis ab eligendi ex aut quam repudiandae
                        odit doloremque quos unde sed sequi ipsum quidem Ex corrupti ipsa animi
                    </p>
                    <div className='space-x-4'>
                        <button className='btn-primary'>Get Started</button>
                        <button className='btn-outline'>Login</button>
                    </div>
                </div>
                {/*Form section*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
