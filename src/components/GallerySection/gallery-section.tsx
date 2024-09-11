import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { Pagination } from 'swiper/modules';
import { useState } from 'react';

export function GallerySection() {
    const [isFirstLinkClicked, setFirstLinkClicked] = useState<boolean>(true);

    const activeLinkStyle = 'text-blue-400 hover:text-blue-300 active:text-blue-200 underline underline-offset-8';
    const inactiveLinkStyle = 'text-gray-600';

    return (
      <section className="xl:mx-32 xl:mt-96 xl:pt-32 max-sm:mx-8 max-sm:mt-96">
        <p className="text-blue-400">Prezentacja firmy</p>
        <h1 className="text-4xl font-bold mb-6">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h1>
        <div className="flex space-x-6">
          <a href="#osobowe" className={isFirstLinkClicked ? activeLinkStyle : inactiveLinkStyle} onClick={() => setFirstLinkClicked(true)}>Samochody osobowe</a>
          <a href="#dostawcze" className={!isFirstLinkClicked ? activeLinkStyle : inactiveLinkStyle} onClick={() => setFirstLinkClicked(false)}>Samochody dostawcze</a>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            1920: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1028: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            990: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }}
        >
          <SwiperSlide>
            <img src="/gallery-content-1.png" alt="Car 1" className="mb-12 mt-12"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery-content-2.png" alt="Car 2" className="mb-12 mt-12"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/gallery-content-3.png" alt="Car 3" className="mb-12 mt-12"/>
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }