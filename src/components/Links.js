import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPersonBooth } from 'react-icons/fa'

const Links = () => {

    const links = [
        {
            id  : 1, 
            child : (
                <>
                    Github <FaGithub size={30} className='ml-5'/>
                </>
            ),
            link : "https://github.com",
            style : 'rounded-tr-md'
        },
        {
            id  : 2, 
            child : (
                <>
                    Linkedin <FaLinkedin size={30} className='ml-5'/>
                </>
            ),
            link : "https://linkedin.com",
        },
        {
            id  : 3, 
            child : (
                <>
                    MailTo <AiOutlineMail size={30} className='ml-5'/>
                </>
            ),
            link : "mailto:minthetpaing376@gmail.com",
        },
        {
            id  : 4, 
            child : (
                <>
                    Resume <FaPersonBooth size={30} className='ml-5'/>
                </>
            ),
            link : '/Home Page.docx',
            style : 'rounded-br-md',
            download : true,
        },
    ]
  return (
    <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
        <div>
            <ul> 
            {
                links.map(({id, link, child, style, download}) => (
                <li key={id} className={"flex justify-between items-center w-40 py-3 bg-gray-500 px-3  ml-[-90px] hover:ml-[-10px] transition-all ease-out duration-500 hover:rounded-md " +
                 "" + 
                 style}> 
                    <a href={link} className='flex justify-center items-center w-full' download={download}> 
                       {child}
                    </a> 
                </li>
                ))
            }
                
            </ul>
        </div>
    </div>
  )
}

export default Links
