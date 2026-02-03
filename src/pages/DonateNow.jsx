import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import ContributionMatter from '../components/donate/ContributionMatter'
import DonationAchieves from '../components/donate/DonationAchieves'

const DonateNow = () => {
  return (
    <>
    <HeroSection heading={'Donate Now'} description={'Your support helps us provide education, healthcare, and economic empowerment to vulnerable communities in Afghanistan.'}/>
    <ContributionMatter />
    <DonationAchieves />
    </>
  )
}

export default DonateNow