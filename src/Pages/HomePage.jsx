import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import HeroSection from '../Components/Hero';
import ServicesSection from '../Components/Services';
import AboutSection from '../Components/AboutSection';
import ProgressSection from '../Components/ProgressSection';
import ExtraServices from '../Components/ExtraServices';
import MarqueeServices from '../Components/MarqueeServices';
import AboutCEO from '../Components/AboutCEO';
import FAQ from '../Components/Faq';
import Testimonials from '../Components/Testimonials';
import MarqueeServices2 from '../Components/MarqueeServices2';
import Member from '../Components/Member';

const HomePage = () => {
  // ✅ Scroll to "testimonials" if flag is set
  useEffect(() => {
    const shouldScroll = localStorage.getItem('scrollToTestimonials');
    if (shouldScroll === 'true') {
      scroller.scrollTo('testimonials', {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      localStorage.removeItem('scrollToTestimonials');
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProgressSection />
      <ExtraServices />
      <AboutCEO />
      <Member />
      <MarqueeServices />
      <FAQ />

      {/* ✅ This wraps the Testimonials section so we can scroll to it */}
      <Element name="testimonials">
        <Testimonials />
      </Element>

      <MarqueeServices2 />
    </div>
  );
};

export default HomePage;
