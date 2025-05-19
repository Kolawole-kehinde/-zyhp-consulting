import React from "react";

const AboutUs = () => {

  return (
    <section className="bg-gradient-to-br from-purple-200 via-white to-white py-10 px-4 lg:px-0">
    <div className=" wrapper mt-32   text-gray-800">
      {/* Top Section with Image and Text */}
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="/images/ceo.jpg"
          alt="Zyhp Consulting Team"
          className="rounded-xl shadow-md object-cover w-full"
        />
        <div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-purple-500">ABOUT</span> US
          </h2>
          <p className="mb-4 leading-relaxed">
            Welcome to <strong>Zyhp Consulting</strong>, your go-to digital solutions partner. Whether you're a startup, entrepreneur, or established brand, our services are tailored to fuel your business growth through result-driven strategies and modern tools.
          </p>
          <p className="mb-4 leading-relaxed">
            With deep roots in <strong>SEO expertise</strong>, digital marketing, branding, web design, and e-commerce, we help brands stand out and scale profitably. We’re committed to empowering our clients through innovation, clarity, and consistent results.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Our Vision</h3>
          <p className="leading-relaxed">
            At Zyhp Consulting, our vision is to build a smarter digital future. We bridge the gap between your goals and success by offering smart, scalable, and impactful strategies that work — one click, one conversion at a time.
          </p>
        </div>
      </div>

    
      <div>
        <h3 className="text-2xl font-semibold mb-8">
          <span className="text-purple-500">WHY</span> CHOOSE US
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-300 rounded-lg overflow-hidden">
          <div className="p-6 transition-all duration-300 hover:bg-purple-500 hover:text-white cursor-pointer">
            <h4 className="font-bold text-lg mb-2">SEO EXPERTISE</h4>
            <p className="text-sm leading-relaxed">
              We help you rank higher, drive more traffic, and reach your audience through proven SEO strategies tailored to your business.
            </p>
          </div>
          <div className="p-6 transition-all duration-300 hover:bg-purple-500 hover:text-white cursor-pointer">
            <h4 className="font-bold text-lg mb-2">CREATIVE BRANDING</h4>
            <p className="text-sm leading-relaxed">
              We craft compelling brand stories, logos, and identity systems that make your business unforgettable.
            </p>
          </div>
          <div className="p-6 transition-all duration-300 hover:bg-purple-500 hover:text-white cursor-pointer">
            <h4 className="font-bold text-lg mb-2">E-COMMERCE SOLUTIONS</h4>
            <p className="text-sm leading-relaxed">
              From Shopify to dropshipping, we build seamless stores designed to convert visitors into loyal customers.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
