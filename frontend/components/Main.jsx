import React from 'react'
import {FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {socials} from '../editable_stuff/config'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Artsiom</span></h1>
          <h1 className='py-4 text-gray-700'>
            A Full-Stack developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building back-end for web applications while learning
            responsive front-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link target='_blank' href={socials.find(i => i.name === 'linkedin').url}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link target='_blank' href={socials.find(i => i.name === 'github').url}>
                <FaGithub />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link target='_blank' href={socials.find(i => i.name === 'facebook').url}>
                <FaFacebook />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link href={`mailto:${socials.find(i => i.name === 'email').url}?subject=Hi! I found your portfolio website and wanted send you a message`}>
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main