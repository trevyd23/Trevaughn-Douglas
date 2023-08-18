import React from 'react'
import { PortfolioApplication } from './PortfolioSection'

export const Card = ({appImage, appLink, appName }:PortfolioApplication) => {
  return (
    <div className='w-[20rem] h-[20rem] bg-gray-700 rounded-md m-6'>{appName}</div>
  )
}
