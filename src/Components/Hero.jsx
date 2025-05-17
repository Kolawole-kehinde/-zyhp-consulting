import Marquee from "react-fast-marquee";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-200 via-white to-white pt-32 md:pt-52 font-roboto lg:px-0 px-4">
      {/* Wrapper */}
      <div className="wrapper flex flex-col md:flex-row items-center gap-4 lg:gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-[596px] space-y-5 lg:space-y-[32px]">
          <h1 className="text-[40px] lg:text-[80px] font-bold text-black leading-[50px] lg:leading-[90px]">
            Real Experts <br /> Skilled In
          </h1>
          <span className="text-purple-600 font-normal text-[30px] lg:text-[55px] capitalize">
            Dropshipping coach
          </span>
          <p className="w-full max-w-[505px] text-gray-700 text-base md:text-xl ">
            Our services are the best you will ever find if you truly want sales, growth, and success.
          </p>

          

          {/* Avatars */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((z, i) => (
                  <img
                    key={i}
                    src="/images/Coverimage.png"
                    alt="Client avatar"
                    className={`relative z-${z * 10} w-10 h-10 overflow-hidden rounded-full border-2 border-white`}
                  />
                ))}
              </div>
              <p className="text-purple-600 font-semibold">225+ Clients</p>
            </div>
              
              {/* CTA Buttons */}
          <div className="space-y-4 flex-col items-center">
            <div className="gap-4 hidden md:flex">
              <button className="bg-purple-500 text-black font-semibold md:px-8 lg:px-20 py-4 rounded-lg hover:bg-purple-600 transition">
                All Services →
              </button>
              <button className="border border-gray-700 md:px-8 lg:px-20py-4 rounded-lg text-black hover:bg-gray-200 transition">
                Contact us
              </button>
            </div>

            

            {/* Trusted & Counter Section */}
            <div className="w-ful md:w-[343px] lg:w-full overflow-hidden rounded-md border border-purple-700 p-2 lg:p-3">
              <div className="flex items-center">
                <p className="font-bold text-sm lg:text-base text-black py-1 px-1.5 lg:py-2 lg:px-3 shrink-0">
                  Trusted by:
                </p>
                <div className="bg-white py-2 flex items-center w-full">
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

            {/* Mobile Buttons */}
            <div className="flex gap-2 w-full md:hidden">
              <button className="bg-purple-500 text-black font-semibold px-6 py-4 rounded-lg hover:bg-purple-600 transition">
                All Services →
              </button>
              <button className="border border-gray-700 px-11 py-4 rounded-lg text-black hover:bg-gray-200 transition">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 min-w-[400px] relative">
          <img
            src="/images/Coverimage.png"
            alt="Hero"
            className="w-full h-auto object-cover"
          />

          <div className="bg-purple-600 absolute bottom-0 w-full lg:w-[480px] flex gap-4 items-center justify-center py-4 mr-4 rounded-lg lg:ml-5">
            <div className="text-center">
              <h2 className="text-black text-3xl font-bold">2000+</h2>
              <p className="text-white font-medium">Client Engagement</p>
            </div>
            <div className="w-1 h-16 bg-gray-300"></div>
            <div className="text-center">
              <h2 className="text-black text-3xl font-bold">430+</h2>
              <p className="text-white font-medium">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
