import React from 'react'
import ResponseCard from './ResponseCard'

const responses = [
  {
    title: 'Market Driven Basic Implementation',
    description: 'We develop education, vocational training, and economic programs tailored to local needs, fostering self-reliance and reducing dependence on aid.',
    color: '#e0f2fe'
  },
  {
    title: 'SEM Implementation',
    description: 'Our integrated approach strengthens education, livelihoods, and community resilience, ensuring sustainable social and economic growth.',
    color: '#dcfce7'
  },
  {
    title: 'Decrease Industry Gap',
    description: 'We bridge the gap between education and employment by aligning training with market needs, fostering innovation, and supporting economic empowerment.',
    color: '#f3e8ff'
  }
];

const Response = () => {
  return (
    <div className='flex flex-col gap-2 w-full p-5 sm:p-10'>
      <span className='font-semibold text-md text-blue-600'>OUR RESPONSE</span>
      <h1 className='font-semibold text-lg sm:text-2xl'>A Brief Story About The Solutions</h1>
      <p className='text-sm text-gray-700 sm:max-w-3xl'>BOST DEVELOPMENT AND EDUCATIONAL ORGANIZATION (BDEO) provides market-driven, data-backed solutions to address Afghanistan\'s most pressing humanitarian issues. Our approach ensures effectiveness, efficiency, and relevance while fostering innovation and sustainability.</p>
      <div className='flex gap-4 justify-center flex-wrap mt-5'>
        {responses.map((response, index) => (
          <ResponseCard 
            key={index}
            color={response.color}
            title={response.title}
            description={response.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Response