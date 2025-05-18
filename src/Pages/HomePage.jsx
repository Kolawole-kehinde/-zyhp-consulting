import React from 'react'
import HeroSection from '../Components/Hero'
import ServicesSection from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import ProgressSection from '../Components/ProgressSection'
import ExtraServices from '../Components/ExtraServices'
import MarqueeServices from '../Components/MarqueeServices'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
         <ProgressSection/>
         <ExtraServices/>
         <MarqueeServices/>
    </div>
  )
}

export default HomePage