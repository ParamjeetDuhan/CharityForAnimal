import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div className='bg-gradient-to-t from-black via-primary to-black p-4 mt-24'>
      <div className='container mx-auto p-4'>
              <div className='md:text-2xl text-xl sm:text-xl text-center text-white'>
                     <h1 className='font-bold mb-3'>About Us</h1>
                     <p>
                     Welcome to <span className='text-primary font-semibold md:text-xl '>Charity For Animal</span>, where compassion meets action. We are a non-profit organization dedicated to improving the lives of stray animals through rescue, rehabilitation, and advocacy. Our mission is to create a world where every stray animal is valued, cared for, and provided with the opportunity to thrive in a loving environment.
                     </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-4 mt-8 mb-8 '>
                      <div className='bg-gradient-to-r from-primary to-violet-900 rounded-md'>
                        <h1 className='text-black font-bold mb-8 mt-2'>Our Mission</h1>
                        <p>At [CHARITY FOR ANIMAL], we strive to: <br/>

                           1. Rescue and provide medical care to injured or abandoned animals.<br/>
                           2. Rehabilitate stray animals through nourishment, shelter, and love.<br/>
                           3. Facilitate adoptions to connect animals with caring forever homes.<br/>
                           4. Raise awareness about animal welfare and promote humane treatment.<br/>
                          </p>
                      </div>
                      <div className='bg-gradient-to-r from-primary to-violet-900 rounded-md'>
                        <h1 className='text-black font-bold mb-10 mt-2'>Our Story</h1>
                        <p>
                        [CHARITY For ANIMAL] was founded in [2024] by a group of passionate animal lovers who witnessed the plight <br/>of stray animals and felt compelled to make a difference. What started as a small initiative has grown<br/> into a dedicated community working tirelessly to protect and uplift the lives of stray animals.
                          </p>
                      </div>
                      <div className='bg-gradient-to-r from-primary  to-violet-900 rounded-md'>
                        <h1 className='text-black font-bold mb-8 mt-2'>What We Do</h1>
                        <p>
                        Animal Rescue: We respond to distress calls and rescue animals in need.<br/>
                        Shelter & Care: Our shelters provide a safe haven with proper medical care and nourishment.<br/>
                        Adoption Drives: We connect stray animals with individuals and families eager to give them a loving home.<br/>
                        Community Outreach: Educational programs and events to foster a culture of kindness towards animals.<br/>
                          </p>
                          <Link to="/Services"><button className='bg-primary my-3 p-2 rounded-lg md:text-xl font-bold'>SERVICES</button></Link>
                      </div>
                      <div className='bg-gradient-to-r from-primary to-violet-900 rounded-md'>
                        <h1 className='text-black font-bold mb-10 mt-2'>Join Us</h1>
                        <p>
                        Together, we can create a brighter future for stray animals. Whether through volunteering, donating, or adopting, your support helps us bring hope and love to countless lives.<br/>

                        Let’s make a difference, one paw at a time.<br/>
                        
                        <Link to="/Call"><button className='bg-primary my-3 p-2 rounded-lg md:text-xl font-bold'>Contact US</button></Link> to learn more or get involved!
                          </p>
                      </div>
                    </div>
              </div>
      </div>
    </div>
  )
}

export default About
