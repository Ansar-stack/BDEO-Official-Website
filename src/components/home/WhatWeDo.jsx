import React from 'react'
import WhatWeDoCard from '../UI/WhatWeDoCard'
import {FaGraduationCap, FaLeaf, FaUsers} from 'react-icons/fa'

const whatWeDoData = [
  {
    title: "Education & Capacity Building",
    description: "Providing high-quality educational programs and vocational training to equip youth and women with essential skills.",
    icon: <FaGraduationCap color='blue' size={20}/>
  },
  {
    title: "Sustainable Development",
    description: "Promoting initiatives that enhance livelihoods, improve services, and foster economic resilience for communities.",
    icon: <FaLeaf color='green' size={20}/>
  },
  {
    title: "Community Engagement",
    description: "Collaborating with local stakeholders and partners to build inclusive, community-driven solutions together.",
    icon: <FaUsers color='black' size={20}/>
  }
];

const WhatWeDo = () => {
  return (
    <div className='w-full py-5 md:py-10 px-7 bg-blue-100/50 mt-5 flex flex-col items-center gap-2'>
      {/* Content */}
      <h2 className='font-sm font-bold text-blue-600'>WHAT WE DO</h2>
      <h3 className='text-2xl md:text-3xl xl:text-[2vw] font-bold '>Our Key Focus Areas</h3>
      <p className='text-sm xl:text-lg text-gray-700 text-center'>We operates across multiple sectors to ensure holistic community development</p>
      <div className='mt-2 w-full flex justify-center gap-5 flex-wrap'>
        {whatWeDoData.map((item, index) => (
          <WhatWeDoCard 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div> 
  )
}

export default WhatWeDo