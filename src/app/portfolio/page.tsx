import { PortfolioSection } from '@/components/PortfolioSection'
import Head from 'next/head'
import React from 'react'
import { metadata } from '../layout'

const Portfolio = () => {
  metadata.title = 'Portfolio'
  return (
    <PortfolioSection />
  )
}

export default Portfolio