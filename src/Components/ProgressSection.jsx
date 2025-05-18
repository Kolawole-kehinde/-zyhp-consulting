

import {
  FaChartLine,
  FaLightbulb,
  FaBullseye,
  FaAward,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine className="text-purple-500 w-8 h-8" />,
    title: "Results-Driven",
    description:
      "Our services are designed to deliver measurable outcomes. We focus on strategic growth initiatives that directly impact your bottom line, driving sales and long-term success.",
  },
  {
    icon: <FaLightbulb className="text-purple-500 w-8 h-8" />,
    title: "Creativity Unleashed",
    description:
      "Our innovative approach combines cutting-edge techniques with creative thinking to develop unique solutions that set your brand apart in the market.",
  },
  {
    icon: <FaBullseye className="text-purple-500 w-8 h-8" />,
    title: "Tailored Strategies",
    description:
      "We develop customized plans that align with your specific goals and industry needs, ensuring that every strategy we implement is uniquely crafted for your business.",
  },
  {
    icon: <FaAward className="text-purple-500 w-8 h-8" />,
    title: "Top Quality",
    description:
      "Excellence is our standard. We maintain rigorous quality control processes to ensure that every deliverable exceeds expectations and reflects positively on your brand.",
  },
];

const ProgressSection = () => {
  return (
    <section className="bg-purple-200 lg:py-10 mt-10 lg:mt-32 font-roboto">
    <div className="wrapper bg-gradient-to-br from-purple-400 via-white to-white py-6 md:py-16 px-4 my-10 lg:px-20 rounded-3xl">
     <div className="grid lg:grid-cols-3 gap-8">

  <div className="order-1 lg:order-1 space-y-4">
    <p className="text-purple-600 font-semibold border-b-2 border-purple-600 inline-block">
      WHY CHHOSE US?
    </p>
<h2 className="text-xl md:text-4xl font-extrabold text-[#022c22] whitespace-nowrap">
  Progress With<span className="hidden lg:inline"><br /></span> zyhpconsulting
</h2>


  </div>


  <div className="order-2 lg:order-2 col-span-2 bg-white p-6 rounded-xl text-white shadow-2xl space-y-3 hover:scale-[1.02] transition duration-300 ease-in-out">
    {services[0].icon}
    <h3 className="font-bold text-lg text-purple-400">{services[0].title}</h3>
    <p className="text-sm text-black">{services[0].description}</p>
   
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
            <p className="text-base md:text-lg text-black ">{service.description}</p>
         
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
export default ProgressSection;
