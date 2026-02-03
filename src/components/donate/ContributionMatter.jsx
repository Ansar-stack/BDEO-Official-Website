import React from 'react'

const ContributionMatter = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-10 md:mb-14'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Your Contribution Matters
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto'></div>
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start'>
          {/* Left Column */}
          <div className='space-y-6'>
            <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
              At Bost Development and Educational Organization (BDEO), every contribution directly 
              impacts the lives of vulnerable communities in southern Afghanistan. We rely on 
              transparent data infrastructure to ensure your support creates measurable impact 
              where it's needed most.
            </p>
            
            <div className='bg-blue-50 rounded-lg p-6 border border-blue-100'>
              <p className='text-gray-700 text-base'>
                Together with partners like <span className='font-semibold text-blue-700'>Search for Common Ground</span>, 
                we bridge the gap between humanitarian crisis and sustainable opportunity.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              Your donation supports:
            </h3>
            
            <ul className='space-y-3'>
              <li className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
                <div className='w-2 h-2 mt-2 rounded-full bg-blue-500'></div>
                <span className='text-gray-800'>High-quality educational programs for youth and women</span>
              </li>
              <li className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
                <div className='w-2 h-2 mt-2 rounded-full bg-indigo-500'></div>
                <span className='text-gray-800'>Vocational training aligned with market needs</span>
              </li>
              <li className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
                <div className='w-2 h-2 mt-2 rounded-full bg-blue-500'></div>
                <span className='text-gray-800'>Sustainable development initiatives for economic resilience</span>
              </li>
              <li className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
                <div className='w-2 h-2 mt-2 rounded-full bg-indigo-500'></div>
                <span className='text-gray-800'>Healthcare services and social welfare programs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className='mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='text-center p-6 border border-gray-200 rounded-lg'>
            <div className='text-2xl md:text-3xl font-bold text-blue-600 mb-2'>850+</div>
            <div className='text-gray-700 text-sm'>Lives Impacted</div>
          </div>
          <div className='text-center p-6 border border-gray-200 rounded-lg'>
            <div className='text-2xl md:text-3xl font-bold text-blue-600 mb-2'>100%</div>
            <div className='text-gray-700 text-sm'>Transparent Use</div>
          </div>
          <div className='text-center p-6 border border-gray-200 rounded-lg'>
            <div className='text-2xl md:text-3xl font-bold text-blue-600 mb-2'>3+</div>
            <div className='text-gray-700 text-sm'>Years of Service</div>
          </div>
          <div className='text-center p-6 border border-gray-200 rounded-lg'>
            <div className='text-2xl md:text-3xl font-bold text-blue-600 mb-2'>5+</div>
            <div className='text-gray-700 text-sm'>Active Programs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributionMatter