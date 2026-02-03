import React from 'react'
import ChallengesCard from './ChallengesCard'
import {FaExclamationTriangle, FaHeartbeat} from 'react-icons/fa'
import {HiOutlineSun, HiOutlineTrendingDown} from 'react-icons/hi'
import {GiBrickWall} from 'react-icons/gi'
const challenges = [
  {title: "Socail Enquaility", description:"Bridging the gap for marginilized groups.", icon: <FaExclamationTriangle size={20} className='text-amber-600' />},
  {title: "Enviromental Issues", description:"Combatting climmate change locally.", icon: <HiOutlineSun size={20} className='text-emerald-600' />},
  {title: "Pendamic Impact", description:"Restoring Health and economic stability.", icon: <FaHeartbeat size={20} className='text-rose-600'/>},
  {title: "Infrastructure", description:"Building a safe spaces for learning.", icon: <GiBrickWall size={20} className='text-indigo-600'/>},
]

const ChallengesWeTackle = () => {
  return (
    <div className='w-full flex flex-col gap-2 items-center py-10 justify-center px-5'>
      <h3 className='text-lg sm:text-2xl font-semibold text-black'>Challenges We Tackle</h3>
      <div className='w-full flex justify-center  flex-wrap gap-5 mt-3'>
        {challenges.map((challenge, index)=>(
        <ChallengesCard
        key={index}
        title={challenge.title} description={challenge.description} icon={challenge.icon}/>
      ))}
      </div>
      
    </div>
  )
}

export default ChallengesWeTackle