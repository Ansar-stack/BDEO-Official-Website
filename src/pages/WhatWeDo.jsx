import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import WhatWeDoCard from '../components/whatWeDo/WhatWeDoCard'
import Problem from '../components/whatWeDo/Problem'
import Response from '../components/whatWeDo/Response'
import { FaPalette } from 'react-icons/fa'
import { MdOutlineLightbulb } from 'react-icons/md'
import { HiOutlineDatabase } from 'react-icons/hi'

const keyFactors = [
  {
    title: 'INNOVATION',
    description: 'At Best Development and Educational Organization (BDEO), innovation is at the core of our daily operations. We believe that sustainable development and quality education require forward-thinking solutions, adaptive strategies, and continuous learning. By leveraging modern methodologies, community insights, and data-driven decision-making, we ensure impactful and efficient service delivery to the communities we serve.',
    icon: <MdOutlineLightbulb size={20} color='blue' />,
  },
  {
    title: 'INFRASTRUCTURE',
    description: 'A robust data infrastructure is the backbone of our operational efficiency. We rely on accurate, timely, and transparent data collection and analysis to drive decision-making, measure impact, and improve program effectiveness. Our ability to track both primary and secondary products and services ensures resource optimization and enhances service delivery.',
    icon: <HiOutlineDatabase size={20} color='#4f39f6' />,
  },
  {
    title: 'CREATIVITY',
    description: 'Creativity fuels our ability to design innovative solutions that address complex social challenges. By fostering a culture of creative problem-solving, we empower our teams to develop new approaches in education, community development, and social welfare, ensuring long-term, sustainable progress in southern Afghanistan.',
    icon: <FaPalette size={20} color='#9810fa' />,
  }
];

const WhatWeDo = () => {
  return (
   <>
    <HeroSection 
      heading={'What We Do'} 
      description={'Transforming lives in Afghanistan through innovative, community-driven solutions in education, livelihoods, and social welfare.'}
    />
    <div className='w-full flex items-center justify-center gap-5 my-10 flex-wrap'>
      {keyFactors.map((factor, index) => (
        <WhatWeDoCard
          key={index}
          icon={factor.icon}
          title={factor.title}
          description={factor.description}
        />
      ))}
    </div>
    <Problem />
    <Response />
   </>
  )
}

export default WhatWeDo