import React from "react";
import Marquee from "react-fast-marquee";

const services = [
  "Dropshipping Coach",
  "Digital Marketer",
  "Web Design",
  "E-commerce Solution",
  "Shopify",
  "Branding and Logo Design",
  "Social Media Manager",
  "Email Marketing",
  "Affiliate Marketer",
  "SEO Expert"
];

const MarqueeServices = () => {
  return (
    <div className="">
      {/* Top section - scroll left (default) */}
      <div className="bg-purple-500 py-8">
        <Marquee speed={50} gradient={false} direction="left">
          {services.map((service, index) => (
            <span
              key={index}
              className="mx-6 text-2xl font-semibold text-white flex items-center"
            >
              <span className="text-5xl mr-2">•</span> {service}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Bottom section - scroll right */}
      <div className="bg-purple-700 py-8">
        <Marquee speed={50} gradient={false} direction="right">
          {services.map((service, index) => (
            <span
              key={index}
              className="mx-6 text-2xl font-semibold text-white flex items-center"
            >
              <span className="text-5xl mr-2">•</span> {service}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeServices;
