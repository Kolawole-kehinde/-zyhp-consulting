import React from 'react'
import HeroSection from '../Components/Hero'
import ServicesSection from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import ProgressSection from '../Components/ProgressSection'
import ExtraServices from '../Components/ExtraServices'
import MarqueeServices from '../Components/MarqueeServices'
import AboutCEO from '../Components/AboutCEO'
import FAQ from '../Components/Faq'
import Testimonials from '../Components/Testimonials'
import MarqueeServices2 from '../Components/MarqueeServices2'
import Member from '../Components/Member'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
         <ProgressSection/>
         <ExtraServices/>
         <AboutCEO/>
         <Member/>
         <MarqueeServices/>
         <FAQ/>
          <Testimonials/>
          <MarqueeServices2/>
         
    </div>
  )
}

export default HomePage