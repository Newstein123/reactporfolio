import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-slate-500 to to-black'>
      <div className='mx-12 py-20 p-12  text-white' style={{
        minWidth  : '200px'
      }}> 
           <div>
           <h1 className='text-5xl font-bold  border-b-2 w-fit'> About </h1>
           </div>
           <p className='mt-5 text-justify'>
           Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           </p> 
           <br />
           <p className='text-justify'>
           Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           </p>
      </div>
    </div>
  )
}

export default About
