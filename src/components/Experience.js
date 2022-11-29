import React from 'react'
import Html from '../assets/Html.png'
import Reactjs from '../assets/Reactjs.png'
import Javascript from '../assets/javascript.png'
import Python from '../assets/python.png'
import Laravel from '../assets/laravel.png'



const Experience = () => {

  const experiences = [
    {
      id : 1,
      src : Html,
      text : 'Html',
      style : 'shadow-orange-300'
    },
    {
      id : 2,
      src : Laravel,
      text : 'Laravel',
      style : 'shadow-orange-600'
    },
    {
      id : 3,
      src : Reactjs,
      text : 'Reactjs',
      style : 'shadow-sky-500'
    },
    {
      id : 4,
      src : Python,
      text : 'Python',
      style : 'shadow-yellow-500'
    },
    {
      id : 5,
      src : Javascript,
      text : 'Javascript',
      style : 'shadow-orange-300'
    },
  ]
  return (
    <div name='experience' className='w-full md:h-screen bg-gradient-to-b from-gray-500 to-black p-20'>
      <div className='max-w-screen-lg flex flex-col justify-center mx-auto'>
        <div className='my-5'>
            <p className='text-white font-bold border-b-2 border-gray-400 text-5xl w-fit'> Experience </p>
            <p className='text-white'> These are the technologies I expert.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-20 md:gap-y-10 object-center'>
           {
            experiences.map(({id, src, text, style}) => (
              <div key={id} className={`shadow-md px-20 py-3 hover:scale-110 transition ease-out duration-300 ${style}`}>
              <img src={src} alt={text} width={150} />
               <p className='text-white text-center'> {text} </p>
              </div>
            ))
           }
        </div>
      </div>
    </div>
  )
}

export default Experience
