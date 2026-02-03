import React from 'react'
import AboutCard from './AboutCard'
import CorePillar from './CorePillar'
import { HiOutlineEye, HiOutlineFlag } from 'react-icons/hi'

const VisionMission = () => {
  return (
    <div className='mt-10 px-20 py-10 bg-blue-100/50 flex flex-col gap-5 items-center'>
      <div className='flex justify-center flex-wrap gap-5'>
        <AboutCard 
        icon={<HiOutlineEye size={20} color='blue' />}
        title={'Our Vision'} description='A prosperous and self-reliant southern Afghanistan where communities have access to quality education, sustainable development opportunities, and essential social services, fostering resilience, and empowerment.' />
        <AboutCard 
        icon={<HiOutlineFlag size={20} color='green' />}
        title={'Our Mission'} description='To promote education, economic empowerment, and sustainable development by creating opportunities for vulnerable populations, including women, youth, and marginalized groups.' />
      </div>
      {/* Core Pillar of Action */}
      <CorePillar/>
    </div>
  )
}

export default VisionMission