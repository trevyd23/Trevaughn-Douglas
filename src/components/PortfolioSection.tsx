"use client"
import React from 'react'
import Dweller from '../../public/assets/Dweller.jpg'
import UCarry from '../../public/assets/UCarry.png'
import { StaticImageData } from 'next/image'
import { Card } from './Card'
import strings from '@/utilities/strings'

export interface PortfolioApplication {
  appDescription: string,
  appName: string,
  appLink: string[],
  appImage: StaticImageData
}
export const PortfolioSection = () => {
  const projects: PortfolioApplication[] = [
    {appName: 'DwellerJA', appLink: ['https://apps.apple.com/us/app/dwellerja/id1614094787', 'https://play.google.com/store/apps/details?id=com.smartestatejafe&pli=1'],appImage: Dweller, appDescription: strings.dwellerDescription},
    {appName: 'UCarry', appLink: ['https://apps.apple.com/us/app/ucarry/id6447766335', 'https://play.google.com/store/apps/details?id=com.travel_express_fe'], appImage: UCarry, appDescription: strings.ucarryDescription}
  ]
  return (
    <section className='w-screen h-max bg-black text-white items-center justify-center flex flex-col  '>
      <h1 className='text-white text-3xl font-bold mt-[10rem] leading-loose'>Portfolio</h1>
      <h2 className='text-white text-lg font-thin mt-9'>Check out my personal projects!</h2>
      <div className='w-full flex flex-col items-center md:flex-row justify-center mt-24 '>
      {
        projects.map((project, index) => {
          return(<Card key={index} appImage={project.appImage} appLink={project.appLink} appName={project.appName} appDescription={project.appDescription} />)
        })

      }
      </div>
      </section>
  )
}
