import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-500 w-full h-screen text-white md:p-20'>
      <div className='flex flex-col justify-center p-20'>
      <div>
            <p className='text-4xl'> Contact Me </p> 
            <p> Submit the form below to get in touch with me </p>
      </div>
      <div>
        <form className='flex flex-col justify-center text-black' action='https://getform.io/f/71f421c2-67a2-47ec-8a54-1b2130ef7327' method='POST'>
            <input type='text' name='name' placeholder='Enter your Company name'  className=' my-3 p-3 rounded-sm'/>
            <input type='email' name='email' placeholder='Enter your email'  className='my-3 p-3 rounded-sm' />
            <textarea name='body' placeholder='Your Message'  className='my-3 p-3 rounded-sm'> </textarea>
            <button className='bg-sky-400 w-fit p-2 my-3 rounded-md'> Message Me </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
