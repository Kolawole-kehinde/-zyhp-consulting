import React from 'react';
import Marquee from 'react-fast-marquee';
import 'animate.css';  

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-200 via-white to-white px-6 md:px-12 lg:px-20 font-roboto">
      <div className="wrapper flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image */}
        <div
          className="flex-shrink-0 w-full lg:w-1/2 animate__animated animate__fadeInLeft animate__slow"
          style={{ animationFillMode: 'forwards' }}
        >
          <img
            src="/images/team.png" 
            alt="Team working together"
            className="rounded w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-start lg:text-left">
          <p
            className="text-purple-500 text-xl font-semibold uppercase tracking-wide animate__animated animate__fadeInDown animate__delay-1s"
          >
            Who we are
          </p>
          <h2
            className="text-2xl sm:text-5xl font-bold text-black leading-tight animate__animated animate__fadeInDown animate__delay-1-5s"
          >
            We Take Your Business <br className="hidden sm:block" /> to the Next Level
          </h2>
          <p
            className="text-gray-800 text-lg animate__animated animate__fadeInUp animate__delay-2s"
          >
            Our services is the best you will ever find if you truly want sales, growth, and success
          </p>

          {/* Trusted By */}
          <div
            className="w-ful md:w-[343px] lg:w-full overflow-hidden rounded-md border border-purple-700 p-2 lg:p-3 animate__animated animate__fadeInUp animate__delay-2-5s"
          >
            <div className="flex items-center">
              <p className="font-bold text-sm lg:text-base text-black py-1 px-1.5 lg:py-2 lg:px-3 shrink-0">
                Trusted by:
              </p>
              <div className="py-2 flex items-center w-full">
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                  <span className="text-sm lg:text-base text-black py-1 px-4">Facebook</span>
                  <span className="text-sm lg:text-base text-black py-1 px-4">Twitter</span>
                  <span className="text-sm lg:text-base text-black py-1 px-4">Instagram</span>
                  <span className="text-sm lg:text-base text-black py-1 px-4">Google</span>
                  <span className="text-sm lg:text-base text-black py-1 px-4">LinkedIn</span>
                  <span className="text-sm lg:text-base text-black py-1 px-4">YouTube</span>
                </Marquee>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-start animate__animated animate__fadeInUp animate__delay-3s">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 md:px-20 py-4 rounded-xl transition duration-300">
              About us →
            </button>
            <button className="border text-sm md:text-base border-purple-500 hover:bg-purple-100 text-purple-500 font-semibold px-16 md:px-18 py-4 rounded-xl transition duration-300">
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
