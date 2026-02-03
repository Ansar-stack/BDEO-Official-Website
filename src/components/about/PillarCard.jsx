import React from 'react'

const PillarCard = ({title, description, icon}) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    className='w-[18rem] h-[200px] gap-1.5 cursor-pointer hover:-translate-y-1 hover:transition-transform hover:duration-300 bg-white border border-gray-200 rounded-md shadow-sm  flex flex-col items-center p-4 cursor-pointer'>
        <div className='w-10 h-10 rounded-xl bg-sky-100/50 flex items-center justify-center '>{icon}</div>
        <h3 className='text-lg font-bold text-zinc-900'>{title}</h3>
        <p className='text-gray-800 text-center text-sm'>{description}</p>
    </div>
  )
}

export default PillarCard