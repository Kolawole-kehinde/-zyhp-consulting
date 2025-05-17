import {
  FaShareAlt,
  FaPlayCircle,
  FaBullhorn,
  FaDesktop,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShareAlt className="text-purple-500 w-8 h-8" />,
    title: "Social Media Strategy",
    description:
      "Our services is the best you will ever find if you truly want sales, growth, and success",
  },
  {
    icon: <FaPlayCircle className="text-purple-500 w-8 h-8" />,
    title: "Content Creation",
    description:
      "Our services is the best you will ever find if you truly want sales, growth, and success",
  },
  {
    icon: <FaBullhorn className="text-purple-500 w-8 h-8" />,
    title: "Paid Advertising",
    description:
      "Our services is the best you will ever find if you truly want sales, growth, and success",
  },
  {
    icon: <FaDesktop className="text-purple-500 w-8 h-8" />,
    title: "Website Design",
    description:
      "Our services is the best you will ever find if you truly want sales, growth, and success",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-purple-200 py-10 mt-32">
    <div className="wrapper bg-gradient-to-br from-purple-400 via-white to-white py-16 px-4 my-10 lg:px-20 rounded-3xl">
     <div className="grid lg:grid-cols-3 gap-8">

  <div className="order-1 lg:order-2 space-y-4">
    <p className="text-purple-600 font-semibold border-b-2 border-purple-600 inline-block">
      OUR SERVICES
    </p>
<h2 className="text-xl md:text-4xl font-extrabold text-[#022c22] whitespace-nowrap">
  Our Creative <span className="hidden lg:inline"><br /></span> Agency Expertise
</h2>


  </div>


  <div className="order-2 lg:order-1 col-span-2 bg-white p-6 rounded-xl text-white shadow-2xl space-y-3 hover:scale-[1.02] transition duration-300 ease-in-out">
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


      {/* 3 Cards in a Row Underneath */}
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {services?.slice(1).map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl text-white space-y-3 shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            {service.icon}
            <h3 className="font-bold text-lg text-purple-400">{service.title}</h3>
            <p className="text-sm text-black ">{service.description}</p>
            <a
              href="#"
              className="text-purple-400 font-semibold mt-7"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
         <button className="bg-purple-500 text-black font-semibold md:px-8 lg:px-20 py-4 rounded-lg hover:bg-purple-600 transition mt-16 w-full md:w-[350px] ">
                All Services →
              </button>
      </div>
       
    </div>
    </section>
  );
}
export default ServicesSection
