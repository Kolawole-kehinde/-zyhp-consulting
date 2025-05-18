import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../constant/Testimonials';
import './custom-swiper.css';

const Testimonials = () => {
  const paginationRef = useRef(null);
  const [paginationEl, setPaginationEl] = useState(null);

  useEffect(() => {
    setPaginationEl(paginationRef.current);
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-200 via-white to-white py-6 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-purple-600 uppercase font-semibold tracking-wide">Testimonials</p>
        <h2 className="text-3xl font-bold text-gray-900">Hear From Our Clients</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: paginationEl,
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-purple-600 text-white rounded-xl p-6 h-full flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center mb-4 text-yellow-400">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg">{item.feedback}</p>
              </div>
              <div className="flex items-center mt-6 gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div ref={paginationRef} className="custom-swiper-pagination mt-10 flex justify-center" />
    </section>
  );
};

export default Testimonials;
