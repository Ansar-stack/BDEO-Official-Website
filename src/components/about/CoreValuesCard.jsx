import React from 'react'

const CoreValuesCard = ({title, description}) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    className='w-[250px] h-[130px] cursor-pointer hover:-translate-y-1 hover:transition-transform hover:duration-300 bg-white shadow-sm border-t-4 border-t-blue-600 p-3 rounded-sm'>
         <h3 className='text-lg font-bold text-zinc-900'>{title}</h3>
        <p className='text-gray-800 text-[15px]'>{description}</p>
    </div>
  )
}

export default CoreValuesCard