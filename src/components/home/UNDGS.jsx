import React from 'react'
import UNDGSCard from './UNDGSCard'
import {  FaIndustry, FaBook, FaCoins, FaVenus, FaHeartbeat, FaWater, FaCity, FaRecycle, FaFish, FaTree } from 'react-icons/fa'
import Marquee from "react-fast-marquee";
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { HiOutlineAdjustments, HiOutlineBookOpen, HiOutlineBriefcase, HiOutlineLightningBolt, HiOutlineSun } from 'react-icons/hi';
const undgs = [
  {
    title: 'Gender Equality',
    icon: <FaVenus size={20} color="#fff" />,
    className: "bg-pink-500"
  },
  {
    title: 'No Poverty',
    icon: <FaCoins size={20} color="#fff" />,
    className: "bg-red-500"
  },
  {
    title: 'Zero Hunger',
    icon: <GiForkKnifeSpoon size={20} color="#fff" />,
    className: "bg-orange-500"
  },
  {
    title: 'Good Health',
    icon: <FaHeartbeat size={20} color="#fff" />,
    className: "bg-green-600"
  },
  {
    title: 'Quality Education',
    icon: <HiOutlineBookOpen size={20} color="#fff" />,
    className: "bg-yellow-600"
  },
  {
    title: 'Clean Water',
    icon: <FaWater size={20} color="#fff" />,
    className: "bg-blue-500"
  },
  {
    title: 'Clean Energy',
    icon: <HiOutlineLightningBolt size={20} color="#fff" />,
    className: "bg-yellow-500"
  },
  {
    title: 'Decent Work',
    icon: <HiOutlineBriefcase size={20} color="#fff" />,
    className: "bg-gray-600"
  },
  {
    title: 'Industry Innovation',
    shortTitle: 'Innovation',
    icon: <FaIndustry size={20} color="#fff" />,
    className: "bg-blue-600"
  },
  {
    title: 'Reduced Inequalities',
    icon: <HiOutlineAdjustments size={20} color="#fff" />,
    className: "bg-purple-600"
  },
  {
    title: 'Sustainable Cities',
    icon: <FaCity size={20} color="#fff" />,
    className: "bg-orange-600"
  },
  {
    title: 'Responsible Consumption',
    shortTitle: 'Consumption',
    icon: <FaRecycle size={20} color="#fff" />,
    className: "bg-yellow-700"
  },
  {
    title: 'Climate Action',
    shortTitle: 'Climate',
    icon: <HiOutlineSun size={20} color="#fff" />,
    className: "bg-green-700"
  },
  {
    title: 'Life Below Water',
    icon: <FaFish size={20} color="#fff" />,
    className: "bg-blue-700"
  },
  {
    title: 'Life on Land',
    icon: <FaTree size={20} color="#fff" />,
    className: "bg-green-800"
  },
  {
    title: 'Strong Institutions',
    icon: <FaBook size={20} color="#fff" />,
    className: "bg-gray-800"
  }
];

const UNDGS = () => {
  return (
    <div className='my-10 w-full flex flex-col items-center px-2'>
      <h4 className='text-lg sm:text-2xl font-semibold text-black'>Alignment with UN SDGs</h4>
      <p className="text-gray-600 text-sm text-center px-2">We are proud to contribute to the United Nations Sustainable Development Goals.</p>
      <div className='border border-gray-200 p-2 w-[96%] md:w-1/2 mt-2 rounded-md shadow-sm'>
      <div className='mt-5 flex justify-center gap-2 items-center '>
        {/* Return only first 8 one */}
        <Marquee gradient={false}
        pauseOnHover={true}
        speed={20} className=''>
          {undgs.slice(0, 8).map((goal, index) => (
            <UNDGSCard
              key={index}
              title={goal.title}
              icon={goal.icon}
              className={goal.className}
            />
          ))}
        </Marquee>
      </div>
      {/* Return only last 8 one */}
      <div className="mt-5 flex justify-center gap-2 items-center">
         <Marquee gradient={false}
        pauseOnHover={true}
        direction='right'
        speed={40} className=''>
        {undgs.slice(8, 16).map((goal, index) => (
          <UNDGSCard
            key={index}
            title={goal.title}
            icon={goal.icon}
            className={goal.className}
          />
        ))}
        </Marquee>
      </div>
    </div>
    </div>
  )
}

export default UNDGS