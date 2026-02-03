import React from 'react'
import PillarCard from '../about/PillarCard'
import { FaBookOpen, FaUserGraduate, FaHandsHelping, FaUsers, FaClinicMedical } from 'react-icons/fa'

const donationAchievements = [
  {
    title: 'Educate & Empower',
    icon: <FaBookOpen size={20} className='text-blue-600'/>,
    description: 'Supports quality education programs and vocational training for vulnerable youth and women in Afghanistan.'
  },
  {
    title: 'Transform Lives',
    icon: <FaUserGraduate size={20} className='text-green-600'/>,
    description: 'Provides market-driven skills training to bridge the education-employment gap for beneficiaries.'
  },
  {
    title: 'Build Resilience',
    icon: <FaHandsHelping size={20} className='text-amber-600'/>,
    description: 'Funds sustainable development initiatives that enhance livelihoods and community self-reliance.'
  },
  {
    title: 'Support Communities',
    icon: <FaUsers size={20} className='text-purple-600'/>,
    description: 'Enables healthcare services and social welfare programs for marginalized populations in Kandahar.'
  },
  {
    title: 'Drive Change',
    icon: <FaClinicMedical size={20} className='text-red-600'/>,
    description: 'Helps implement data-backed solutions to address Afghanistan\'s most pressing humanitarian challenges.'
  }
];

const DonationAchieves = () => {
  return (
    <div className='w-full bg-sky-100/50 p-10 flex flex-col gap-2 items-center'>
      <h3 className='font-semibold text-lg md:text-2xl text-black'>What Your Donation Achieves</h3>
      <p className='text-gray-700 text-center'>Even a small contribution can create a lasting ripple effect in the community.</p>
      <div className='flex justify-center gap-3 flex-wrap mt-5'>
        {donationAchievements.map((achievement, index) => (
          <PillarCard
            key={index}
            title={achievement.title}
            icon={achievement.icon}
            description={achievement.description}
          />
        ))}
      </div>
      <div className='mt-6 p-4 bg-white rounded-lg shadow-sm border border-sky-200 max-w-md'>
        <p className='text-gray-700 text-center text-sm'>
          <span className='font-semibold'>Recent Impact:</span> A $6,584 grant from Search for Common Ground helped BDEO reach 
          <span className='font-bold text-blue-700'> 850 beneficiaries </span> 
          across Kandahar province in just <span className='font-bold'>3 months</span>.
        </p>
      </div>
    </div>
  )
}

export default DonationAchieves