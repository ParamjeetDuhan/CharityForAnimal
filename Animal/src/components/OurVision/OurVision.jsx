import React from 'react';
import {Link} from 'react-router-dom'
import{ motion } from 'framer-motion';
const fadeAnimation = (delay) =>{
    return {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: 'easeInOut'
            },
        },
    }
}
const OurVision = () => {
  return (
    <div className='container mb-[500px] mt-0 bg-white dark:bg-gray-900
    dark:text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <motion.div 
            variants={fadeAnimation(0.2)}
            initial='initial' 
            whileInView='animate' 
            className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8
             border-green-800 dark:bg-slate-800'>
                <h1 className='text-xl font-semibold'>Our Vision</h1>
                <p> 
                our vision is to create a world where every stray animal has a safe, loving, and permanent home. 
                We strive to end the suffering of homeless animals and to 
                transform communities through education, responsible pet ownership, and compassionate action.
                </p>
                <Link  to="/About" className='inline-block hover:text-primary
                border-b hover:border-primary'>
                    Learn More
                </Link>
            </motion.div>
            <motion.div  
            variants={fadeAnimation(0.4)}
            initial='initial' 
            whileInView='animate'
            className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8
             border-yellow-500 dark:bg-slate-800'>
                <h1 className='text-xl font-semibold'>Our Mission</h1>
                <p> 
                Our mission is to rescue, rehabilitate, and provide a safe, 
                loving home for stray and abandoned animals.
                 We are dedicated to improving the lives of vulnerable
                 animals by providing them with the medical care, nourishment,
                  and attention they need to heal and thrive. Through 
                 community outreach, education, and advocacy, we strive to foster a compassionate
                 society where every animal is treated with respect and kindness.
                </p>
                <Link to="/About"
                  href='#' className='inline-block hover:text-primary
                  border-b hover:border-primary'>
                  Learn More
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default OurVision;