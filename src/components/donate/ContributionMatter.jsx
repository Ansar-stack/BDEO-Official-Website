import React from 'react'

const ContributionMatter = () => {
  return (
    <div className='p-10 w-full flex flex-col gap-3'>
        <h1 className='font-semibold text-lg md:text-2xl'>Your Contribution Matters</h1>
        <p className='text-gray-700 md:max-w-3xl'>
            At Bost Development and Educational Organization (BDEO), every contribution directly impacts the lives of vulnerable communities in southern Afghanistan.
            We rely on transparent data infrastructure to ensure your support creates measurable impact where it's needed most.
            Your donation supports: <br />
            <span className='font-bold text-black block mt-1 ms-2'>High-quality educational programs for youth and women</span>
            <span className='font-bold text-black block mt-1 ms-2'>Vocational training aligned with market needs</span>
            <span className='font-bold text-black block mt-1 ms-2'>Sustainable development initiatives for economic resilience</span>
            <span className='font-bold text-black block mt-1 ms-2'>Healthcare services and social welfare programs</span>
            Together with partners like Search for Common Ground, we bridge the gap between humanitarian crisis and sustainable opportunity.
        </p>
    </div>
  )
}

export default ContributionMatter