import React from 'react'

const ChallengesCard = ({title, description, icon}) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    className='px-3 py-5 border w-[230px] cursor-pointer hover:-translate-y-1 hover:transition-transform hover:duration-300 shadow border-gray-200 rounded-md flex flex-col gap-1 items-center'>
        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-sky-100/50'>{icon}</div>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  )
}

export default ChallengesCard