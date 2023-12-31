import React from 'react'
import { Skill } from './Skill'

export const SkillsAndExpertise = () => {
  const skills = [{
    skillName: 'JavaScript',
    percentage: 100
  }, {
    skillName: 'HTML',
    percentage: 100
  }, {
    skillName: 'CSS',
    percentage: 85
  }, {
    skillName: 'JAVA',
    percentage: 85
  }, {
    skillName: 'REACT',
    percentage: 99
  }, {
    skillName: 'React Native',
    percentage: 99
  }, {
    skillName: 'TailWind CSS',
    percentage: 80
  }, {
    skillName: 'NodeJS',
    percentage: 99
  }, {
    skillName: 'MongoDB',
    percentage: 85
  }, {
    skillName: 'SQL',
    percentage: 83
  }, {
    skillName: 'GraphQL',
    percentage: 82
  },{
    skillName: 'SpringBoot',
    percentage: 88
  },
  {
    skillName: 'AWS',
    percentage: 75
  },{
    skillName: 'Docker',
    percentage: 80
  },{
    skillName: 'Kubernetes',
    percentage: 80
  }]
  return (
    <section className='w-screen h-max bg-black text-white items-center justify-center flex flex-col flex-wrap  '>
    <h1 className='header sm:mb-10'>Skills And Expertise</h1>
    <div className='w-[100%] h-max flex flex-row items-center flex-wrap justify-center '>
    {
      skills.map((skill, index) => <Skill label={skill.skillName} percentage={skill.percentage} key={index} />)
    }
    </div>

    </section>
  )
}
