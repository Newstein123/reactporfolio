import React from 'react'
import Blog from '../assets/Blog.jpeg'
import Calculator from '../assets/Calculator.jpg'
import WeatherApp from '../assets/WeatherApp.png'
import Login from '../assets/Login.jpg'
import Ecommence from '../assets/Ecommence.jpg'
import MediaWeb from '../assets/MediaWeb.jpg'

const Portfolio = () => {
    const image = [
        {
            id : 1, 
            src : Blog,
        },
        {
            id : 2, 
            src : Calculator,
        },
        {
            id : 3, 
            src : Ecommence,
        },
        {
            id : 4, 
            src : WeatherApp,
        },
        {
            id : 5, 
            src : Login,
        },
        {
            id : 6, 
            src : MediaWeb,
        }
    ]
  return (
    <div name='porfolio' className='w-full h-full md:h-screen bg-gradient-to-b from-black to-slate-500 text-white px-20'>
      <div>
      <p className='font-bold text-5xl border-b-slate-300'> Portolio </p>
      <p> Check out some of my work here </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 md:m-3 md:gap-x-20 md:gap-y-4 sm:gap-5'>
        {
            image.map(({id, src}) => (
                <div key={id} className="my-3">
            <img src={src} alt='' className='rounded-md hover:scale-110 transition ease-out duration-300'/> 
            <div className='flex justify-center items-center border rounded-md'>
                <button className='w-1/ px-5 py-3 border-r-2'> Demo </button>
                <button className='w-1/ px-5 py-3'> Code </button>
            </div>
        </div>
            ))
        }
      </div>

    </div>
  )
}

export default Portfolio
