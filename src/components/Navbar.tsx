'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logoTransparent from '../../public/assets/logoTransparent.png'
import logo from '../../public/assets/logoBlack.png'
import Link from 'next/link'

const links = ['Home', 'Skills & Expertise', 'Portfolio', 'Contact']
const Navbar = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)


  return (<>
    <nav className='w-screen bg-black h-24 p-4 flex flex-row items-center justify-between px-9 sm:px-10 md:px-5 sticky top-0 z-20' >
      <Link href={'/'} className='flex flex-row items-center md:w-[40%]'>
        {/* <Image src={logo} width={100} height={80} alt="Logo" /> */}
        <div className='w-8 flex flex-row items-center'>
        <span className='text-white text-3xl font-mono'>TD</span>
        <div className='w-2 border-4 border-[#306ec3] rounded-full mt-5' />
        </div>
        <h1 className='hidden md:flex text-sm md:text-lg text-white ml-10'>Trevaughn Douglas</h1>
      </Link>
      <div className="w-12 md:hidden md:w-0 lg:hidden lg:w-0 ">
        <button onClick={() => setShowMenu(!showMenu)} id='hamburgerMenu' data-dropdown-toggle="doubleDropdown" type="button" 
        className="resume-button" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      { showMenu &&
      <div id="doubleDropdown" className='z-10 absolute top-28 right-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#201f1f] items-center justify-center'>
        <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 items-center justify-center' aria-labelledby='hamburgerMenu'>
          {
            links.map((link, index) => {
              return (
                <li key={index} className={showMenu ? 'flex-col items-center block px-16 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' : `hover:underline underline-offset-8 decoration-2 decoration-white ${index === 0 ? 'ml-0' : 'ml-10'} ${pathname.includes(link.toLocaleLowerCase()) || (index === 0 && pathname.charAt(1) === '') ? 'text-[#306ec3]' : 'text-white '} `}><Link onClick={() => setShowMenu(!showMenu)} href={`${index === 0 ? '/' : `/${link.toLowerCase()}`}`} >{link}</Link></li>
              )
            })
          }
          </ul>
      </div>
}
      <div className=' hidden items-center md:justify-between w-28 h-16 justify-center md:flex md:w-[65%]'>
        <ul className='flex flex-col  md:flex md:flex-row'>
          {
            links.map((link, index) => {
              return (
                <li key={index} className={`hover:underline underline-offset-8 decoration-2 decoration-white ${index === 0 ? 'ml-0' : 'ml-10'} ${pathname.includes(link.toLocaleLowerCase()) || (index === 0 && pathname.charAt(1) === '') ? 'text-[#306ec3]' : 'text-white '} `}><Link href={`${index === 0 ? '/' : `/${link.toLowerCase()}`}`} >{link}</Link></li>
              )
            })
          }
        </ul>
        <button className='hover:bg-cyan-600 w-36 hover:text-white bg-[#306ec3] text-white items-center justify-center rounded-lg h-11 lg:ml-8 xl:ml-11 text-xs font-medium sm:ml-3'>
          <a href="/Resume.docx" download="Trevaughn Douglas">Download Resume</a>
        </button>
      </div>
    </nav>

  </>

  )
}

export default Navbar