import React from 'react'

function Privacy() {
  return (
    <div className='bg-gradient-to-t from-black via-primary to-black mt-24 h-full'> 
      <div className='container mx-auto p-4 '>
               <div className=' p-4 rounded-md m-8'>
                <h1 className='md:text-2xl text-center sm:text-xl text-white font-semibold'>Privacy Policy</h1>
                <h1 className='text-black font-semibold md:text-lg sm:text-xl mt-2'> Welcome to Charity for Animal!</h1>
                <p className='text-white md:text-xl sm:text-xl'> We collect information to provide better services to all our users — from figuring out basic stuff like which language you speak, to more complex things like which ads you’ll find most useful, the people who matter most to you online, or which YouTube videos you might like. The information collects, and how that information is used, depends on how you use our services and how you manage your privacy controls.</p>

                  <p  className='text-white md:text-xl sm:text-xl mt-4'> When you’re not signed in to a Account, we store the information we collect with unique identifiers tied to the browser, application, or device you’re using. This allows us to do things like maintain your preferences  such as your preferred language or whether to show you more relevant search results or ads based on your activity.
                </p>
               </div>
      </div>
    </div>
  )
}

export default Privacy;
