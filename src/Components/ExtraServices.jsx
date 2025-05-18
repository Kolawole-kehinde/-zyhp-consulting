import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './custom-swiper.css';
import { extraServices } from '../constant/ExtraService';

const ExtraServices = () => {
  const paginationRef = useRef(null);
  const [paginationEl, setPaginationEl] = useState(null);

  useEffect(() => {
    // ensure ref is set after first render
    setPaginationEl(paginationRef.current);
  }, []);

  return (
    <section className="wrapper py-10 px-6 font-roboto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-600">Enjoy Our Extra Services</h2>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{
          el: paginationEl,
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {extraServices.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-purple-400 rounded-2xl p-4 text-white h-full hover:scale-[1.02]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-lg mb-4">{service.title}</h3>
              <p className="text-sm mt-2 leading-8">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External Pagination Element */}
      <div ref={paginationRef} className="custom-swiper-pagination mt-8" />
    </section>
  );
};

export default ExtraServices;
