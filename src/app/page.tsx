"use client"
import { PortfolioSection } from '@/components/PortfolioSection'
import strings from '@/utilities/strings'
import { TypeAnimation } from 'react-type-animation'
import Grad from '../../public/assets/grad.jpg'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (<>
    <div className='w-screen flex bg-black flex-col h-screen px-6 pt-3 md:px-24 md:pt-56'>
      <div className='w-full mt-6'>
      <div className='w-20 border-4 border-cyan-800 mb-6'></div>
      <span className='text-white md:text-lg'>Hello, my name is</span>
      <h1 className='font-semibold text-white text-3xl md:text-5xl leading-relaxed md:w-[40%] md:leading-normal '>
        Trevaughn Douglas
      </h1>
      <span className='text-white md:text-lg'>Full Stack Devloper</span>
      </div>
      <div className='items-center justify-between mt-20 flex-row flex md:self-end md:mt-[-200px]'>
      <Image src={Grad} alt='graduation' className='w-[180px] h-[180px] md:w-[400px] md:h-[400px] rounded-full self-end order-2' />
      <button className='self-start mt-20 hover:bg-cyan-600 w-36 text-white bg-cyan-800 items-center justify-center rounded-lg h-11 lg:ml-8 xl:ml-11 md:hidden text-xs font-medium order-1'>
          <a href="/Resume.docx" download="Trevaughn Douglas">Download Resume</a>
        </button>
        </div>
      {/* <TypeAnimation
      className='mt-20 bg-slate-500'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FrontEnd',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'BackEnd',
        1000,
        'DevOps',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color: 'white', }}
      repeat={Infinity}
    /> */}
      {/* <Image src={Blob} alt='Blob' className='w-[500px] h-[500px]' />
      <Image src={me} alt="Profile" className='w-32 h-32 md:w-16 md:h-16 absolute top-[550px] ' /> */}
      <h2></h2>
     </div>
     <PortfolioSection />
     </>
  )
}

export default Home