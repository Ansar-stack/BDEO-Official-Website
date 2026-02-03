import React from 'react'

const ProblemCard = ({ title, description }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className='p-8 border cursor-pointer hover:-translate-y-1 hover:transition-transform hover:duration-300  border-gray-200 rounded-md shadow-sm w-[22rem] bg-white' >
      <h1 className='font-semibold text-lg text-black'>{title}</h1>
      <p className='text-sm text-gray-700'>{description}</p>
    </div>
  )
}

export default ProblemCard