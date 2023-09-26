import React from 'react'
import {SkillsAndExpertise} from '@/components/SkillsAndExpertise'
import { metadata } from '../layout'

const SkillsAndExpertisePage = () => {
  metadata.title = 'Skills And Expertise'
  return (
    <SkillsAndExpertise />
  )
}

export default SkillsAndExpertisePage