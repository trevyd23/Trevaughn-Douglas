'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logoTransparent from '../../public/assets/logoTransparent.png'
import Link from 'next/link'

const links = ['Home', 'About', 'Portfolio', 'Contact']
const Navbar = () => {
  const pathname = usePathname()


  return (<>
    <nav className='w-screen bg-black h-24 p-4 flex flex-row items-center justify-between px-14 sm:px-0 xs ' >
    <Link href={'/'} className='flex flex-row items-center '>
        <Image src={logoTransparent} alt="Logo" className='rounded-full bg-white w-16 h-16' />
        <h1 className='text-xl text-white ml-2 flex flex-row w-72'>Trevaughn Douglas</h1>
        </Link>
        <div className="flex md:order-2">
     <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
       <span className="sr-only">Open main menu</span>
       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
       </svg>
   </button>
 </div>
        <div className='items-center justify-between hidden w-full md:flex ml-[120px]'>
        <ul className='flex flex-col p-4 md:p-0  md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            {
                links.map((link, index) => {
                  return(
                    <li key={index} className={`hover:underline underline-offset-8 decoration-2 decoration-white ${index === 0 ? 'ml-0' : 'ml-4'} ${pathname.includes(link.toLocaleLowerCase()) || (index === 0 && pathname.charAt(1) === '')?  'text-cyan-400' : 'text-white '  } `}><Link href={`${index === 0 ? '/' : `/${link.toLowerCase()}`}`} >{link}</Link></li>
                )
                  })
            }
        </ul>
        <button className='hover:bg-cyan-600 w-36 hover:text-white bg-white items-center justify-center rounded-lg h-11 ml-4 lg:ml-8 xl:ml-11 text-xs font-medium'>
        <a href="/Resume.docx" download="Trevaughn Douglas">Download Resume</a>
        </button>
        </div>
    </nav>
    
 </>

  )
}

export default Navbar