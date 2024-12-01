import React from 'react'

function Services() {
  return (
    <div className='bg-gradient-to-r from-black via-primary to-black mt-20 text-white'>
      <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3 py-8 '>
          <div className='bg-yellow-600 w-fit h-fit rounded-md ml-5 my-4 '>
            <h1 className='text-center text-black md:text-2xl sm:text-xl font-bold'>Basic Necessities</h1>
            <p>Feeding Programs: Regular provision of nutritious food.</p>
            <p>Shelter: Safe spaces for protection from harsh weather. </p>
            <p>Clothing/Protection: Warm coats or protective gear for cold weather.</p>
          </div>
          <div className='bg-yellow-600 w-fit h-fit rounded-md ml-5 my-4'>
          <h1 className='text-center text-black md:text-2xl sm:text-xl font-bold'>Medical Care</h1>
            <p>Vaccination: Regular immunizations to prevent diseases like rabies, distemper, and parvovirus.</p>
            <p>De-worming: Treatments to eliminate internal parasites.</p>
            <p>First Aid: Immediate treatment for injuries or wounds.</p>
          </div>
          <div className='bg-yellow-600 w-fit h-fit rounded-md ml-5 my-4'>
          <h1 className='text-center text-black md:text-2xl sm:text-xl font-bold'>Rehabilitation and Behavioral Care</h1>
            <p>Trauma Recovery: Specialized care for injured or abused animals</p>
            <p>Behavioral Therapy: Addressing fear or aggression issues.</p>
            <p>Socialization: Helping animals adapt to human interaction and other animals.</p>
          </div>
          <div className='bg-yellow-600 w-fit h-fit rounded-md ml-5 my-4'>
          <h1 className='text-center text-black md:text-2xl sm:text-xl font-bold'>Community Engagement</h1>
            <p>Awareness : Educating the public on the importance of animal welfare.</p>
            <p>Volunteer Programs: Engaging people to contribute </p>
            <p>Workshops and Training: Teaching proper feeding, and handling.</p>
          </div>
          <div className='bg-yellow-600 w-fit h-fit rounded-md ml-5 my-4'>
          <h1 className='text-center text-black md:text-2xl sm:text-xl font-bold'>Monitoring and Advocacy</h1>
            <p>Animal Rescue: Immediate response for animals in distress.</p>
            <p>Reporting Systems: Hotline or apps to report injured or abandoned animals.</p>
            <p>Legislation Advocacy: Promoting stronger animal welfare laws.</p>
          </div>
          <div className='bg-yellow-600 w-fit h-fit rounded-md ml-5 my-4'>
          <h1 className='text-center text-black md:text-2xl sm:text-xl font-bold'>Long-Term Solutions</h1>
            <p>Community Drives: Targeting stray animal populations systematically.</p>
            <p>Habitat Restoration: Creating spaces where animals can live safely.</p>
            <p> Research: Studying stray populations for informed interventions.</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Services;
