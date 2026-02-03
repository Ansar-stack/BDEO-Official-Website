import React from 'react'
import PillarCard from './PillarCard'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { FaLeaf } from 'react-icons/fa'
import { MdOutlineVolunteerActivism } from 'react-icons/md'

const CorePillar = () => {
  return (
    <div className='mt-5 flex flex-col gap-2 items-center'>
      <h5 className='font-semibold text-xl'>Core Pillars of Action</h5>
      <p className="text-zinc-900 max-w-lg text-center">
        Our work is grounded in three main areas where we believe we can make the most significant difference.
      </p>
    <div className='w-full flex gap-5 items-center mt-2 flex-wrap justify-center'>
  <PillarCard
    icon={<HiOutlineBookOpen size={20} className="text-indigo-600" />}
    title={'Education'}
    description={'Providing high-quality educational programs that equip individuals with the knowledge and skills for community development.'}
  />
  <PillarCard 
    title={'Sustainable Development'}
    icon={<FaLeaf size={20} className="text-emerald-600" />}
    description={'Promoting sustainable development initiatives that enhance livelihoods and foster economic resilience for vulnerable populations.'}
  />
  <PillarCard 
    icon={<MdOutlineVolunteerActivism size={20} className="text-rose-600" />}
    title={'Community Engagement'}
    description={'Collaborating with local stakeholders and partners to empower communities and advocate for inclusive solutions.'}
  />
</div>
    </div>
  )
}

export default CorePillar