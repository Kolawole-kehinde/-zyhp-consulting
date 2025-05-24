import React from "react";
import {
  FaShareAlt,
  FaPlayCircle,
  FaBullhorn,
  FaDesktop,
} from "react-icons/fa";
import "animate.css";

const services = [
  {
    icon: <FaShareAlt className="text-purple-500 w-8 h-8" />,
    title: "Social Media Strategy",
    description:
      "Our social media strategy services are designed to elevate your brand's online presence and engagement.",
  },
  {
    icon: <FaPlayCircle className="text-purple-500 w-8 h-8" />,
    title: "Content Creation",
    description:
      "Our content creation services are designed to elevate your brand's online presence and engagement.",
  },
  {
    icon: <FaBullhorn className="text-purple-500 w-8 h-8" />,
    title: "Paid Advertising",
    description:
      "Our paid advertising services are tailored to drive targeted traffic and maximize your ROI.",
  },
  {
    icon: <FaDesktop className="text-purple-500 w-8 h-8" />,
    title: "Website Design",
    description:
      "Our website design services are focused on creating user-friendly and visually appealing websites.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-purple-200 lg:py-10 mt-10 lg:mt-32 font-roboto">
      <div className="wrapper bg-gradient-to-br from-purple-400 via-white to-white py-6 md:py-16 px-4 my-10 lg:px-20 rounded-3xl">

        {/* Heading */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="order-1 lg:order-2 space-y-4 animate__animated animate__fadeInDown animate__slow">
            <p className="text-purple-600 font-semibold border-b-2 border-purple-600 inline-block">
              OUR SERVICES
            </p>
            <h2 className="text-xl md:text-4xl font-extrabold text-[#022c22] whitespace-nowrap">
              Our Creative <span className="hidden lg:inline"><br /></span> Agency Expertise
            </h2>
          </div>

          {/* Featured Service */}
          <div
            className="order-2 lg:order-1 col-span-2 bg-white p-6 rounded-xl text-white shadow-2xl space-y-3 hover:scale-[1.02] transition duration-300 ease-in-out
              animate__animated animate__zoomIn animate__delay-1s"
          >
            {services[0].icon}
            <h3 className="font-bold text-lg text-purple-400">{services[0].title}</h3>
            <p className="text-sm text-black">{services[0].description}</p>
            <a
              href="#"
              className="text-purple-400 font-semibold hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Other Services */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl text-white space-y-3 shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out
                animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${1.5 + index * 0.3}s`, animationFillMode: "forwards" }}
            >
              {service.icon}
              <h3 className="font-bold text-lg text-purple-400">{service.title}</h3>
              <p className="text-sm text-black">{service.description}</p>
              <a
                href="#"
                className="text-purple-400 font-semibold mt-10"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex items-center justify-center">
          <button className="bg-purple-500 text-white font-semibold md:px-8 lg:px-20 py-4 rounded-lg hover:bg-purple-600 transition mt-16 w-full md:w-[350px] animate__animated animate__fadeInUp animate__delay-2.5s">
            All Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
