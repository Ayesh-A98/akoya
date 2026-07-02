import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import platinumCare from "../assets/platinumCare.webp";
import eco from "../assets/eco.webp";
import pressing from "../assets/pressing.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const SwiperSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div dir="ltr">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        loop={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative h-[70vh] md:h-[80vh]">
          <img
            src={platinumCare}
            alt="Platinum Care"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-6 md:px-16 max-w-xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-thin mb-4">
                {t("swiper.slide1.title")}
              </h1>

              <p className="text-amber-300 text-sm md:text-lg mb-6">
                {t("swiper.slide1.subtitle")}
              </p>

              <button
                onClick={() => navigate("/book")}
                className="h-[45px] w-[200px] md:h-[50px] md:w-[230px] text-[16px] md:text-[18px] font-medium text-black rounded-3xl bg-[#D4AF37] hover:bg-[#d4af37c8] hover:scale-105 transition"
              >
                {t("swiper.button")}
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative h-[70vh] md:h-[80vh]">
          <img
            src={eco}
            alt="Eco Cleaning"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-6 md:px-16 max-w-xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-thin mb-4">
                {t("swiper.slide2.title")}
              </h1>

              <p className="text-amber-300 text-sm md:text-lg mb-6">
                {t("swiper.slide2.subtitle")}
              </p>

              <button
                onClick={() => navigate("/book")}
                className="h-[45px] w-[200px] md:h-[50px] md:w-[230px] text-[16px] md:text-[18px] font-medium text-black rounded-3xl bg-[#D4AF37] hover:bg-[#d4af37c8] hover:scale-105 transition"
              >
                {t("swiper.button")}
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative h-[70vh] md:h-[80vh]">
          <img
            src={pressing}
            alt="Precision Pressing"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-6 md:px-16 max-w-xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-thin mb-4">
                {t("swiper.slide3.title")}
              </h1>

              <p className="text-amber-300 text-sm md:text-lg mb-6">
                {t("swiper.slide3.subtitle")}
              </p>

              <button
                onClick={() => navigate("/book")}
                className="h-[45px] w-[200px] md:h-[50px] md:w-[230px] text-[16px] md:text-[18px] font-medium text-black rounded-3xl bg-[#D4AF37] hover:bg-[#d4af37c8] hover:scale-105 transition"
              >
                {t("swiper.button")}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;