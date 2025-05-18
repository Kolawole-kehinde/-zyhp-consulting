import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './custom-swiper.css';
import { extraServices } from '../constant/ExtraService';


const ExtraServices = () => {
  return (
    <section className="bg-green-100 py-10 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-900">Enjoy Our Extra Services</h2>
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {extraServices?.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-900 rounded-2xl p-4 text-white h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-green-400 font-extrabold text-2xl">{service.price}</p>
                <p className="text-sm mt-2">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination mt-6"></div>
      </div>
    </section>
  );
};

export default ExtraServices;
