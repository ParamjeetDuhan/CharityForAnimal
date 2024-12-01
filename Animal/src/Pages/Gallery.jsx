import React from 'react'
import img1 from '../assets/dog1.jpg'
import img2 from '../assets/dog2.webp'
import img3 from '../assets/dog3.jpg'
import img4 from '../assets/dog4.jpg'
import img5 from '../assets/dog5.webp'
import img6 from '../assets/cow1.jpg'
import img7 from '../assets/cow2.jpg'
import img8 from '../assets/cow3.jpg'
import img9 from '../assets/cow4.jpg'

function Gallery() {
  return (
    <div className='bg-gradient-to-t from-black via-primary to-black mt-20'>
     <div className='container mx-auto p-4 '>
            <div className='grid grid-cols-1 gap-1 md:grid-cols-3 py-8 '>
                <img src={img1} alt="" className='w-80 h-80 py-3'/>
                <img src={img2} alt="" className='w-80 h-80 py-3'/>
                <img src={img3} alt="" className='w-80 h-80 py-3'/>
                <img src={img4} alt="" className='w-80 h-80 py-3'/>
                <img src={img5} alt="" className='w-80 h-80 py-3'/>
                <img src={img6} alt="" className='w-80 h-80 py-3'/>
                <img src={img7} alt="" className='w-80 h-80 py-3'/>
                <img src={img8} alt="" className='w-80 h-80 py-3'/>
                <img src={img9} alt="" className='w-80 h-80 py-3'/>
            </div>
     </div>
    </div>
  )
}

export default Gallery;
