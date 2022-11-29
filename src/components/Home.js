import React from 'react'
import MyImage from '../assets/chaungthar.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='md:flex justify-center items-center bg-gradient-to-b from-black to-slate-500 h-screen'>
        <div className='text-white md:mx-12 mx-3 p-3'> 
            <h1 className='text-5xl font-bold my-4'> I am a Junior <br /> Web Developer</h1>
            <p> I have 1 years hand on experience on Web Technologies <br /> like reactjs, laravel, tailwincss, bootstrap  </p>
            <Link to='porfolio' smooth duration={500} className='group rounded-md flex items-center w-fit bg-gradient-to-b from-cyan-300 to-blue-400 px-3 py-3 my-3'> Profolio <span className='group-hover:rotate-90 transition ease-out duration-500 ml-3'> <AiOutlineArrowRight /></span> </Link>
        </div>
        <div className='mx-10 my-10'>
            <img src={MyImage} alt="my profile" width={300} height={400} className='rounded-2xl'/>
        </div>
    </div>
  )
}

export default Home
