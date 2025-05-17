import React from 'react'
import HeroSection from '../Components/Hero'
import ServicesSection from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import ProgressSection from '../Components/ProgressSection'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
         <ProgressSection/>
    </div>
  )
}

export default HomePage