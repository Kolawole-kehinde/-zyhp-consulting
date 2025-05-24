import React from "react";
import Marquee from "react-fast-marquee";

const AboutCEO = () => {
  return (
    <section className="bg-gradient-to-br from-white via-white to-purple-200 py-12 px-4 sm:px-6 lg:px-8 font-roboto">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Text Content - now second on mobile */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-base font-bold mb-6 uppercase tracking-wider text-left">
            Meet Our CEO
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl  font-semibold mb-4 leading-tight text-left text-purple-500">
              Allen Lynda – Founder & CEO of Zyhp Consulting
            </h3>

            <p className="text-gray-700 leading-[30px] mb-6 text-base  md:text-lg text-left px-2 md:px-0 w-full max-w-[505px]">
              Hi, I’m Allen Lynda, the founder of Zyhp Consulting. I started this agency with
              one goal — to help people like you bring their ideas to life and
              build brands that truly stand out. My journey has taught me that
              success comes from a mix of strategy, creativity, and genuine
              connection. At Zyhp, we're not just service providers — we're
              partners in your growth. I’m passionate about seeing your business
              thrive, and I’m excited for the opportunity to grow with you.
              Let’s build something great together.
            </p>
          </div>

          <div className="mt-6 text-left">
            <p className="text-gray-800 mb-2">
              Ready to start your brand journey?
            </p>
            <a href="https://www.facebook.com/share/1BwwsrKrx2/" target="_blank" className="bg-purple-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-purple-700 transition">
              Get in Touch
            </a>
          </div>
        </div>

        {/* CEO Image - now first on mobile */}
        <div className="md:w-1/2 flex justify-center w-full max-w-md">
          <div className="relative w-full">
            {/* CEO image */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/images/cco.png"
                alt="Our CEO"
                className="w-full h-full object-cover"
              />
            </div>
            {/* decorative border */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-gray-300 rounded-lg"></div>
            {/* <p>Allen Lynda</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
