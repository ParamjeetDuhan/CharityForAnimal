import React from 'react'
import img1 from '../assets/Param.png'
import img2 from '../assets/Prashant.png'
import img3 from '../assets/Parth.png'

function Contact() {
  return (
    <div className='bg-gradient-to-t from-black to-primary p-4 text-center mt-20 '>
       <div className='container mx-auto p-4'>
       <h1 className='text-3xl md:text-2xl sm:text-2xl font-bold'>Contact Us</h1>
       <p className='text-white font-medium'>We’d love to hear from you! Feel free to reach out to any of our Team Member for specific queries or support.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-4'>
          <div className='bg-white text-center text-xl rounded-3xl'>
            <ul>
              <li>Paramjeet Singh</li>
              <li><span className='text-primary font-bold'>ROLE</span>:Board of Directors</li>
              <li><span className='text-primary font-bold'>Email</span>:Paramjeetsingh16346@gmail.com</li>
              <li><span className='text-primary font-bold'>PHONE</span>:+91 8923500783</li>
            </ul>
            <img src={img1} alt="param Image" className='w-60 h-60 ml-60 rounded-full'/>
          </div>
          <div className='bg-white text-center text-xl rounded-3xl'>
            <ul>
              <li>Prashant choudhary</li>
              <li><span className='text-primary font-bold'>ROLE</span>:Executive Director</li>
              <li><span className='text-primary font-bold'>Email</span>:Paramjeetsingh16346@gmail.com</li>
              <li><span className='text-primary font-bold'>PHONE</span>:+91 8923500783</li>
            </ul>
            <img src={img2} alt="param Image" className='w-60 h-60 ml-60 rounded-full'/>
          </div>
          <div className='bg-white text-center text-xl rounded-3xl'>
            <ul>
              <li>Parth Sharma</li>
              <li><span className='text-primary font-bold'>ROLE</span>:Fundraising and Development Director</li>
              <li><span className='text-primary font-bold'>Email</span>:Paramjeetsingh16346@gmail.com</li>
              <li><span className='text-primary font-bold'>PHONE</span>:+91 8923500783</li>
            </ul>
            <img src={img3} alt="param Image" className='w-60 h-60 ml-60 rounded-full'/>
          </div>
          <div className='bg-white text-center text-xl rounded-3xl'>
            <ul>
              <li>Priyanshi</li>
              <li><span className='text-primary font-bold'>ROLE</span>:Volunteer Coordination</li>
              <li><span className='text-primary font-bold'>Email</span>:Paramjeetsingh16346@gmail.com</li>
              <li><span className='text-primary font-bold'>PHONE</span>:+91 8923500783</li>
            </ul>
            <img src="" alt="Priyanshi Image" className='w-60 h-60 ml-60 rounded-full'/>
          </div>
        </div>
        <h1 className='text-white text-2xl font-semibold'>General Inquiries</h1>
         <p className='text-white '>If you’re unsure whom to contact, feel free to drop us a message at <a href="https://mail.google.com/" className='text-primary'>generalemail@example.com.</a> We'll direct your query to the appropriate team member.</p>
       </div>
    </div>
  )
}

export default Contact
