// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-200 via-white pt-32 font-roboto">
      
    <div className="wrapper to-white pt-32 flex flex-col md:flex-row items-center gap-8">
      {/* Text */}
      <div className="w-full max-w-[596px] space-y-6">
        <h1 className="text-[40px] lg:text-[80px] font-bold text-black leading-[90px]">
          Real Experts <br /> Skilled In
        </h1>
        <span className="text-purple-600 font-normal text-[55px] capitalize">Dropshipping coach</span>
        <p className="w-full max-w-[505px] text-gray-700 text-xl">
          Our services are the best you will ever find if you truly want sales, growth, and success.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition">
            All Services →
          </button>
          <button className="border border-gray-700 px-6 py-3 rounded-lg text-black hover:bg-gray-200 transition">
            Contact us
          </button>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <div className="flex -space-x-2">
            <img src="/images/Coverimage.png" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/images/logo.png" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/images/Coverimage.png" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/images/logo.png" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <p className="text-green-600 font-semibold">225+ Clients</p>
        </div>
      </div>

      {/* Image */}
      <div className=" flex-1">
        <img src="/images/Coverimage.png" alt="Hero" className="w-full h-auto object-cover" />
      </div>
    </div>
    </section>
  );
}
