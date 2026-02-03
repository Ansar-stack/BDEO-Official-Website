import React from 'react'

const WhatWeDoCard = ({ title, description, onClick, icon}) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    onClick={onClick}
    className='w-[18rem] h-50 bg-white rounded-md p-5 flex flex-col gap-1 cursor-pointer hover:-translate-y-1  hover:shadow-sm'>
        <div className='w-10 h-10 rounded-md bg-sky-100 flex justify-center items-center'>{icon}</div>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className='text-sm text-gray-700'>{description}</p>
    </div>
  )
}

export default WhatWeDoCard