import React from 'react'
import Hero from '../components/home/Hero'
import WhoWeAre from '../components/home/WhoWeAre'
import WhatWeDo from '../components/home/WhatWeDo'
import ChallengesWeTackle from '../components/home/ChallengesWeTackle'
import UNDGS from '../components/home/UNDGS'
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <ChallengesWeTackle />
      <UNDGS />
    </div>
  )
}

export default Home