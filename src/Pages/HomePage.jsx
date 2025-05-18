import React from 'react'
import HeroSection from '../Components/Hero'
import ServicesSection from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import ProgressSection from '../Components/ProgressSection'
import ExtraServices from '../Components/ExtraServices'
import MarqueeServices from '../Components/MarqueeServices'
import AboutCEO from '../Components/AboutCEO'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
         <ProgressSection/>
         <ExtraServices/>
         <AboutCEO/>
         <MarqueeServices/>
         
    </div>
  )
}

export default HomePage