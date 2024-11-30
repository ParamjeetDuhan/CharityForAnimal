import React from 'react'
import { Link } from 'react-router'

const FooterLinks = ({Links}) => {
  return (
    <>
      {Links.map((links)=>(
        <li
            key={links.name}
            className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'
        >
            <Link to="/"><a href="">{links.name}</a></Link>
        </li>
      ))}
    </>
  )
}

export default FooterLinks
