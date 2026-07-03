import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SLIDES = [
  { image: "/platinumCare.webp", key: "slide1" },
  { image: "/eco.webp", key: "slide2" },
  { image: "/pressing.webp", key: "slide3" },
]

const Contact = () => {
  // "translation7" is the namespace this page's strings live in (see i18n.js)
  const { t, i18n } = useTranslation("translation7");
  const isRTL = i18n.language === "ur";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
    <div className="w-full h-[70vh]">
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={700}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full h-[50vh]"   // 👈 reduced height
    >
      {SLIDES.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          
          <img
            src={slide.image}
            alt={t(`hero.${slide.key}.title`)}
            className="w-full h-[50vh] object-cover"  // 👈 reduced height
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-10">
            <h2 className="text-2xl md:text-5xl font-light mb-3">
              {t(`hero.${slide.key}.title`)}
            </h2>
            <p className="text-amber-300 text-base md:text-lg">
              {t(`hero.${slide.key}.subtitle`)}
            </p>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    <section className="bg-[#F5F3EF] py-20">
      <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}>
  <div className="max-w-6xl mx-auto px-6">
 
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light mb-3">{t("heading.title")}</h2>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-[1px] bg-amber-500"></div>
        <p className="text-amber-500 tracking-widest text-sm">
          {t("heading.tagline")}
        </p>
        <div className="w-12 h-[1px] bg-amber-500"></div>
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* Left Side */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          {t("info.reachUsTitle")}
        </h3>
        <p className="text-gray-600 mb-10 leading-relaxed">
          {t("info.reachUsText")}
        </p>

        <div className="space-y-8">

          {/* Location */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <FaLocationDot />
            </div>
            <div>
              <h4 className="font-semibold">{t("info.location.label")}</h4>
              <p className="text-gray-600">{t("info.location.value")}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <FaPhone />
            </div>
            <div>
              <h4 className="font-semibold">{t("info.phone.label")}</h4>
              <p className="text-gray-600">{t("info.phone.value")}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <MdOutlineEmail />
            </div>
            <div>
              <h4 className="font-semibold">{t("info.email.label")}</h4>
              <p className="text-gray-600">{t("info.email.value")}</p>
            </div>
          </div>

        </div>
        {/* Follow Us */}
<div className="mt-12">
  <h4 className="text-lg font-semibold mb-6">
    {t("info.followUs")}
  </h4>

  <div className="flex gap-6">
    
    {/* Instagram */}
    <a
      href="#"
      className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-xl hover:bg-amber-500 transition duration-300"
    >
     <FaFacebook />
    </a>

    {/* Twitter */}
    <a
      href="#"
      className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-xl hover:bg-amber-500 transition duration-300"
    >
      <FaInstagram />
    </a>

    {/* WhatsApp */}
    <a
      href="#"
      className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-xl hover:bg-amber-500 transition duration-300"
    >
     <BsTwitterX />
    </a>

  </div>
</div>
</div>
      

      {/* Right Side (Form) */}
      <div className="bg-white rounded-2xl shadow-lg p-10">
        <h3 className="text-xl font-semibold mb-8">
          {t("form.title")}
        </h3>

        <form className="space-y-6">

          <div>
            <label className="text-sm font-medium">
              {t("form.fullName")}
            </label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder={t("form.fullNamePlaceholder")}
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              {t("form.emailAddress")}
            </label>
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder={t("form.emailPlaceholder")}
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              {t("form.yourMessage")}
            </label>
            <textarea
              rows="4"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder={t("form.messagePlaceholder")}
            ></textarea>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-amber-500 transition">
            {t("form.sendButton")}
          </button>

        </form>
      </div>

    </div>
  </div></motion.div>
</section>
<div className="w-full bg-[#1C1C1C] text-gray-300 pt-20 pb-10 px-6">

  {/* Top Divider */}
  <div className="border-t border-white mb-16 -mt-20"></div>

  {/* Main Footer Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

    {/* Column 1 - Logo + About */}
    <div>
      <img
        src="/companylogo.png"
        alt="Akoya Logo"
        className="w-40 mb-6"
      />

      <p className="leading-relaxed text-white">
        {t("footer.about")}
      </p>

      <div className="flex gap-4 mt-6 text-xl text-gray-400">
        <span className="hover:text-[#D4AF37] cursor-pointer"><BsTwitterX /></span>
        <span className="hover:text-[#D4AF37] cursor-pointer"><FaInstagram /></span>
        <span className="hover:text-[#D4AF37] cursor-pointer"><FaFacebook /></span>
      </div>
    </div>

    {/* Column 2 - Services */}
    <div>
      <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
        {t("footer.servicesHeading")}
      </h3>

      <ul className="space-y-4">
        {t("footer.servicesList", { returnObjects: true }).map((s, i) => (
          <li key={i} className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
            › {s}
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3 - Contact */}
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

    {/* Column 4 - Newsletter */}
    <div>
      <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
        {t("footer.newsletterHeading")}
      </h3>

      <p className="text-gray-400 mb-6">
        {t("footer.newsletterText")}
      </p>

      <input
        type="email"
        placeholder={t("footer.emailPlaceholder")}
        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37]"
      />

      <button onClick={() => {
    window.scrollTo(0, 0);
  }}  className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-md hover:bg-[#c9a52e] transition">
        {t("footer.subscribe")}
      </button>
    </div>

  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

    <p>{t("footer.copyright")}</p>

    <div className="flex gap-6 mt-4 md:mt-0">
      <span className="hover:text-[#D4AF37] cursor-pointer">{t("footer.privacy")}</span>
      <span className="hover:text-[#D4AF37] cursor-pointer">{t("footer.terms")}</span>
    </div>

  </div>

</div>
    </div>
    
  )
}

export default Contact