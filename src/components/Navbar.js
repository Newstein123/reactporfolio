import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'


const links = [
  {
    id : 1,
    link : 'home', 
  },
  {
    id : 1,
    link : 'about', 
  },
  {
    id : 1,
    link : 'porfolio', 
  },
  {
    id : 1,
    link : 'experience', 
  },
  {
    id : 1,
    link : 'contact', 
  },
]

const Navbar = () => {
  const [nav, setnav] = useState('')
  return (
    <div className='fixed w-full flex justify-between align-center bg-gray-500 p-5'>
       <div>
       <p className='font-signature font-bold text-4xl'> Paing  </p>
       </div>
       <ul className='md:flex justify-between align-center hidden '>
          {
            links.map(({id, link}) => (
              <li key={id} className='text-white ml-12 capitalize hover:scale-110 hover:text-amber-400 transition-all ease-out cursor-pointer'>
                <Link to={link} smooth  duration={500} >  {link}  </Link>
              </li>
            ))
          }
       </ul>
      <div onClick={() =>setnav(!nav)} className="md:hidden"> 
        {nav ?   <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {
        nav && (
          <ul className='absolute top-20 left-0 bg-gray-400 flex flex-col justify-center items-center w-full h-screen'> 
              {
            links.map(({id, link}) => (
              <li key={id} className='text-white ml-12 capitalize hover:scale-110 hover:text-amber-400 transition-all ease-out cursor-pointer text-5xl py-10'> 
              <Link to={link} smooth  duration={500} onClick={() => setnav(!nav)} >  {link}  </Link>
              </li>
            ))
          }
          </ul>
        )
      }
    </div>
  )
}

export default Navbar
