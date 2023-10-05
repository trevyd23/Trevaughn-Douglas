import { Metadata } from 'next'
import SkillsAndExpertisePage from './page'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'Skills And Expertise',
  description: 'My skills that i have developed while coding as a fullstack developer.'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
   <SkillsAndExpertisePage />
    )
  }