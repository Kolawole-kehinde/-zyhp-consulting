import React, { use } from "react";
import {
  FaGlobe,
  FaCode,
  FaShoppingCart,
  FaBullhorn,
  FaStore,
  FaPalette,
  FaPenNib,
  FaEnvelope,
  FaUsers,
  FaLink,
  FaSearch,

} from "react-icons/fa";


const services = [
  {
    title: "Dropshipping Coach",
    icon: <FaShoppingCart />,
    description:
      "Get expert mentorship to launch, run, and scale a profitable dropshipping business. We provide personalized coaching, niche selection strategies, supplier sourcing, and marketing techniques tailored to your goals."
  },
  {
    title: "Digital Marketer",
    icon: <FaBullhorn />,
    description:
      "Transform your business with result-oriented digital marketing campaigns. We use a multi-channel approach—combining PPC, content marketing, analytics, and more—to drive traffic and maximize ROI."
  },
  {
    title: "Web Design",
    icon: <FaCode />,
    description:
      "We design modern, responsive websites that don’t just look great—they convert visitors into customers. Our process blends UX/UI best practices with brand-focused design to elevate your online presence."
  },
  {
    title: "E-commerce Solution",
    icon: <FaStore />,
    description:
      "From setting up your store to integrating payment gateways and shipping APIs, we provide full-service e-commerce solutions that are scalable, secure, and tailored to your niche."
  },
  {
    title: "Shopify",
    icon: <FaGlobe />,
    description:
      "Build, manage, and optimize your Shopify store with our hands-on support. We offer custom theme development, app integration, SEO optimization, and store automation for long-term success."
  },
  {
    title: "Branding",
    icon: <FaPalette />,
    description:
      "Create a compelling brand that captures attention and builds loyalty. We help you define your voice, message, visual identity, and positioning—ensuring consistency across all platforms and touchpoints."
  },
  {
    title: "Logo Design",
    icon: <FaPenNib />,
    description:
      "Make a strong first impression with a logo that reflects your brand essence. We deliver professional, versatile, and memorable logos that work across all digital and print formats."
  },
  {
    title: "Social Media Manager",
    icon: <FaUsers />,
    description:
      "Boost engagement and grow your audience with strategic content creation, daily management, analytics, and platform-specific campaigns across Instagram, Facebook, Twitter, LinkedIn, and more."
  },
  {
    title: "Email Marketing",
    icon: <FaEnvelope />,
    description:
      "Drive sales and customer retention with professionally designed email campaigns. We manage everything from audience segmentation and content writing to automation and performance tracking."
  },
  {
    title: "Affiliate Marketer",
    icon: <FaLink />,
    description:
      "Expand your reach through affiliate marketing. We help you set up high-converting affiliate programs, recruit the right partners, and track performance to increase revenue without upfront ad spend."
  },
  {
    title: "SEO Expert",
    icon: <FaSearch />,
    description:
      "Get found on Google with advanced SEO strategies. We perform in-depth audits, on-page optimization, backlink building, and content strategies that boost your rankings and drive organic traffic."
  }
];

const AllServices = () => {
    
  return (
    <section className="bg-gradient-to-br from-purple-200 via-white to-white py-10 px-4 lg:px-0">
     
    <div className=" wrapper py-20 mt-6 lg:mt-10 font-roboto">
      <div className="text-center mb-6 md:mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover our range of premium services designed to grow your brand, boost your sales, and elevate your digital presence.
        </p>
      </div>
 
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map(({ title, icon, description }, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-gray-50 to-purple-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-purple-600 text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default AllServices;
