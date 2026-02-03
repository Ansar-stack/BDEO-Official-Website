import React from 'react'
import CoreValuesCard from './CoreValuesCard'

const OurCoreValues = () => {
    return (
        <div className='w-full mt-10 py-10 flex flex-col items-center gap-1'>
            <h5 className='font-semibold text-xl'>Our Core Values</h5>
            <p className="text-zinc-900 max-w-lg text-center">
                This principles guide every decision we make and every project we undertake.
            </p>
            <div className='w-full flex gap-5 flex-wrap justify-center mt-2'>
                <CoreValuesCard title={'Innovation'} description={'Innovation drives our forward-thinking solutions and continuous learning approach.'} />
                <CoreValuesCard title={'Transparency'} description={'We rely on accurate, transparent data for decision-making and measuring impact.'} />
                <CoreValuesCard title={'Creativity'} description={'Creativity fuels our ability to design solutions for complex social challenges.'} />
                <CoreValuesCard title={'Collaboration'} description={'Our work is rooted in collaboration with local and international partners.'} />
            </div>
        </div>
    )
}

export default OurCoreValues