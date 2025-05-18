import React from "react";

const Member = () => {
  return (
    <section className="bg-gradient-to-br from-white via-white to-purple-200 py-12 px-4 sm:px-6 lg:px-8 font-roboto">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">

        {/* CEO Image - now first on mobile */}
        <div className="md:w-1/2 flex justify-center w-full max-w-md">
          <div className="relative w-full">
            {/* CEO image */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/images/ent.jpg"
                alt="Our CEO"
                className="w-full h-full object-cover"
              />
            </div>
            {/* decorative border */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Text Content - now second on mobile */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-base font-bold mb-6 uppercase tracking-wider text-left">
            Digital marketing consultant
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-tight text-left text-purple-500">
              Pamela M Kincer
            </h3>

            <p className="text-gray-700 leading-[30px] mb-6 text-base md:text-lg text-left px-2 md:px-0 w-full max-w-[505px]">
              Hi, I’m Pamela M Kincer, a digital marketing consultant at Zyph. I specialize in crafting strategic marketing solutions that help brands grow and connect authentically with their audience. At Zyph, my goal is to leverage data-driven insights and creativity to help your business thrive in a competitive landscape. I’m passionate about supporting your growth journey and excited to collaborate with you to build impactful marketing campaigns.
            </p>
          </div>

          <div className="mt-6 text-left">
            <p className="text-gray-800 mb-2">
              Ready to start your brand journey?
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-purple-700 transition">
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Member;
