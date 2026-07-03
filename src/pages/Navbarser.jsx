import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "../Redux/ServiceSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper1.css";

// NOTE: title/desc/price are now looked up from translation files via item.id.
// img, category, and icon stay here since they aren't language-dependent.
const ALL_SERVICES = [
  { id: 1, category: "Dry Cleaning", img: "/dryCleaning.webp", icon: "🧥" },
  { id: 2, category: "Pressing", img: "/exectivePressing.webp", icon: "👔" },
  { id: 3, category: "Specialty", img: "/care.webp", icon: "👗" },
  { id: 4, category: "Traditional", img: "/sehedulePickup.webp", icon: "⚡" },
  { id: 5, category: "Express", img: "/fragrance.webp", icon: "🌸" },
  { id: 6, category: "Add-On", img: "/dishdasha.webp", icon: "👳‍♂️" },
  { id: 7, category: "Traditional", img: "/child_dishdasha.webp", icon: "👦" },
  { id: 8, category: "Traditional", img: "/bisht.webp", icon: "✨" },
  { id: 9, category: "Traditional", img: "/ghutra.webp", icon: "⚡" },
  { id: 10, category: "Traditional", img: "/kurta.webp", icon: "👘" },
  { id: 11, category: "Traditional", img: "/kurtaPajama.webp", icon: "👖" },
  { id: 12, category: "Traditional", img: "/kameez.webp", icon: "👕" },
  { id: 13, category: "Traditional", img: "/jalabiya.webp", icon: "👚" },
  { id: 14, category: "Traditional", img: "/abaya.webp", icon: "✨" },
  { id: 15, category: "Traditional", img: "/abaya_special.webp", icon: "✨" },
  { id: 16, category: "Dry Cleaning", img: "/hijab.webp", icon: "🧣" },
  { id: 17, category: "Pressing", img: "/gent_suit.webp", icon: "👗" },
  { id: 18, category: "Specialty", img: "/dress.webp", icon: "👰" },
  { id: 19, category: "Specialty", img: "/overcoat.webp", icon: "🧥" },
  { id: 20, category: "Add-On", img: "/military_suite.webp", icon: "🌸" },
  { id: 21, category: "Express", img: "/blouse.webp", icon: "👚" },
  { id: 22, category: "Specialty", img: "/bathrob.webp", icon: "🛁" },
  { id: 23, category: "Express", img: "/dresslong.webp", icon: "🛁" },
];

const SLIDES = [
  { img: "/eco.webp", key: "slide1" },
  { img: "/pCollection.webp", key: "slide2" },
  { img: "/expert.webp", key: "slide3" },
];

const Narbarser = () => {
  // "translation5" is the namespace this component's strings live in (see i18n.js)
  const { t, i18n } = useTranslation("translation5");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reduxServices = useSelector((state) => state.service.services);
  const services =
    reduxServices && reduxServices.length > 0 ? reduxServices : ALL_SERVICES;

  useEffect(() => {
    dispatch(setService(ALL_SERVICES));
  }, [dispatch]);

  const categories = ["All", ...new Set(ALL_SERVICES.map((s) => s.category))];

  const handleNext = (service) => {
    // attach translated text before pushing to redux/booking flow
    const translated = {
      ...service,
      title: t(`services.${service.id}.title`),
      desc: t(`services.${service.id}.desc`),
      price: t(`services.${service.id}.price`),
    };
    dispatch(setService(translated));
    navigate("/book");
  };

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const isRTL = i18n.language === "ur";

  return (
    <div className="relative" dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        modules={[Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={900}
        spaceBetween={0}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[570px] bg-cover bg-center flex flex-col justify-center items-center text-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>

              <div className="relative z-20 flex flex-col items-center">
                <h1 className="text-5xl md:text-6xl font-thin text-white">
                  {t(`hero.${slide.key}.title`)}
                </h1>
                <p className="text-lg md:text-xl text-yellow-400 mt-4">
                  {t(`hero.${slide.key}.subtitle`)}
                </p>
                <Link to="/book">
                  <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-all duration-300">
                    {t("hero.cta")}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative top-18 bg-[#F8F5F2]">
        <center className="text-5xl bg-[#FAF9F7] font-light relative top-8">
          {t("sectionHeader.ourServices")}
        </center>
        <br />
        <div className="flex justify-center items-center">
          <div className="h-px w-16 relative mx-4 top-3 bg-[#D4AF37]"></div>
          <h4 className="h-[40px] w-[280px] relative top-4.5 text-[20px] tracking-widest text-[#D4AF37] font-medium">
            {t("sectionHeader.tagline")}
          </h4>
          <div className="h-px w-16 relative top-3.5 mx- bg-[#D4AF37]"></div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen py-10">
        <h2 className="text-center text-sm tracking-widest text-yellow-600 font-semibold">
          {t("sectionHeader.tagline")}
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm rounded-full transition ${
                activeCategory === cat
                  ? "bg-black text-yellow-400"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="max-w-6xl mx-auto mt-12 px-4">
          <div className="flex flex-wrap gap-8 justify-start">
            {filteredServices.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 25,
                  delay: index * 0.15,
                }}
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden w-full sm:w-[48%] lg:w-[31%]"
              >
                <div className="relative h-56 w-full overflow-hidden transition-transform duration-500 hover:scale-110">
                  <img
                    src={item.img}
                    alt={t(`services.${item.id}.title`)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow">
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t(`services.${item.id}.title`)}
                    </h3>
                    <span className="text-[#D4AF37] text-sm font-semibold">
                      {t(`services.${item.id}.price`)}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {t(`services.${item.id}.desc`)}
                  </p>

                  <motion.div className="relative mt-4 h-[1px] bg-gray overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#D4AF37]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.div>

                  <button
                    onClick={() => handleNext(item)}
                    className="mt-5 w-full bg-[#D4AF37] hover:bg-black text-black hover:text-[#D4AF37] font-medium py-3 rounded-lg transition"
                  >
                    {t("orderButton")}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="w-full bg-[#1C1C1C] py-24 px-6 text-center mt-25">
        <h2 className="text-4xl md:text-3xl font-light text-[#D4AF37]">
          {t("cta.heading")}
        </h2>
        <p className="max-w-5xl mx-auto mt-6 text-gray-300 text-medium">
          {t("cta.text")}
        </p>
        <Link to="/contact">
          <button className="mt-10 px-10 py- pt-4 bg-[#D4AF37] transition-all duration-500 hover:scale-105 text-black text-lg font-medium rounded-full hover:bg-[#c9a52e] transition-all duration-300">
            {t("cta.button")}{" "}
            <LuMessageCircleMore className="relative -top-6 left-39" />
          </button>
        </Link>
      </div>

      {/* FOOTER */}
      <div className="w-full bg-[#1C1C1C] text-gray-300 pt-20 pb-10 px-6">
        <div className="border-t border-white mb-16 -mt-20"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <img
              src="/companylogo.png"
              alt="Akoya Logo"
              className="w-40 mb-6"
            />
            <p className="leading-relaxed text-white">{t("footer.about")}</p>
            <div className="flex gap-4 mt-6 text-xl text-gray-400">
              <span className="hover:text-[#D4AF37] cursor-pointer">
                <BsTwitterX />
              </span>
              <span className="hover:text-[#D4AF37] cursor-pointer">
                <FaInstagram />
              </span>
              <span className="hover:text-[#D4AF37] cursor-pointer">
                <FaFacebook />
              </span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              {t("footer.servicesHeading")}
            </h3>
            <ul className="space-y-4">
              {t("footer.servicesList", { returnObjects: true }).map(
                (s, i) => (
                  <li
                    key={i}
                    className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500"
                  >
                    › {s}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              {t("footer.contactHeading")}
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>{t("footer.area")}</p>
              <p>{t("footer.zone")}</p>
              <p>{t("footer.street")}</p>
              <p>{t("footer.building")}</p>
              <p className="mt-4">+97433689955</p>
              <p>+97433689996</p>
              <p className="mt-4">info@akoyaluxurylaundry.com</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              {t("footer.newsletterHeading")}
            </h3>
            <p className="text-gray-400 mb-6">{t("footer.newsletterText")}</p>
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-md hover:bg-[#c9a52e] transition"
            >
              {t("footer.subscribe")}
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#D4AF37] cursor-pointer">
              {t("footer.privacy")}
            </span>
            <span className="hover:text-[#D4AF37] cursor-pointer">
              {t("footer.terms")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narbarser;