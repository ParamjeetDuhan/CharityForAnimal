import React from 'react'

const FooterLinks = ({Links}) => {
  return (
    <>
      {Links.map((links)=>(
        <li
            key={links.name}
            className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'
        >
            <a href="">{links.name}</a>
        </li>
      ))}
    </>
  )
}

export default FooterLinks
