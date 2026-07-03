import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Landingpage1 = () => {
  const { t } = useTranslation("translation3");

  const steps = [
    {
      key: "step1",
      icon: <IoBagOutline className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />,
      video: "/Pickup.mp4",
      number: 1,
      layout: "video-left",
    },
    {
      key: "step2",
      icon: <IoBagOutline className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />,
      video: "/professional_collection.mp4",
      number: 2,
      layout: "video-right",
    },
    {
      key: "step3",
      icon: <CiCalendar className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />,
      video: "/ExpertProcessing.mp4",
      number: 3,
      layout: "video-left",
    },
  ];

  const clubBenefits = t("club.benefits", { returnObjects: true });
  const footerServices = t("footer.services", { returnObjects: true });

  return (
    <div className="bg-[#F1EEEB] overflow-x-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <center className="text-3xl sm:text-4xl lg:text-5xl font-light relative top-8 px-4">
            {t("howItWorks.title")}
          </center>
          <br />

          <div className="flex flex-col sm:flex-row justify-center items-center px-4 gap-2 sm:gap-0">
            <div className="hidden sm:block h-px w-16 relative mx-4 top-3 bg-[#D4AF37]"></div>
            <h4 className="h-auto sm:h-[40px] w-full sm:w-[320px] relative sm:top-4.5 text-[14px] sm:text-[18px] lg:text-[20px] tracking-widest text-[#D4AF37] font-medium text-center">
              {t("howItWorks.subtitle")}
            </h4>
            <div className="hidden sm:block h-px w-16 relative top-3.5 bg-[#D4AF37]"></div>
          </div>
        </motion.div>
      </div>

      <div className="w-full bg-[#F1EEEB]">

        <div className="relative space-y-10 sm:space-y-12 lg:space-y-16">

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-amber-400"></div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex relative flex-col lg:flex-row items-center my-12 sm:my-16 lg:my-25 gap-8 sm:gap-12 lg:gap-25 max-w-6xl mx-auto mt-10 px-4 sm:px-6">

              {/* Video Section */}
              <div className="relative w-full lg:w-[500px] h-[220px] sm:h-[300px] lg:h-[350px] rounded-2xl shadow-md group">

                <video
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/Pickup.mp4"
                />

                {/* Number Circle */}
                <div className="absolute hover:scale-110 transition-all duration-500 -right-3 sm:-right-6 top-1/2 -translate-y-1/2 flex justify-center items-center text-base sm:text-lg font-bold text-white bg-amber-400 h-[42px] w-[42px] sm:h-[55px] sm:w-[55px] rounded-full shadow-lg z-30">
                  1
                </div>
              </div>

              {/* Card Section */}
              <div className="w-full lg:w-[500px] bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">

                <div className="flex items-center gap-4 mb-6">
                  <IoBagOutline className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {t("steps.step1.title")}
                  </h2>
                </div>

                <p className="text-gray-700 text-sm sm:text-[16px] mb-6">
                  {t("steps.step1.desc")}
                </p>

                <div className="border-t border-gray-200 mb-6"></div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step1.feature1")}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step1.feature2")}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex relative flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-25 max-w-6xl my-12 sm:my-16 lg:my-25 mx-auto px-4 sm:px-6">

              <div className="hidden lg:flex absolute left-[-39px] hover:scale-110 transition-all duration-500 -translate-y-1/2 justify-center items-center text-lg font-bold text-white bg-amber-400 h-[55px] w-[55px] rounded-full shadow-lg z-30">
                2
              </div>

              <div className="w-full lg:w-[500px] bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 order-2 lg:order-1">

                <div className="flex items-center gap-4 mb-6">
                  <IoBagOutline className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {t("steps.step2.title")}
                  </h2>
                </div>

                <p className="text-gray-700 text-sm sm:text-[16px] mb-6">
                  {t("steps.step2.desc")}
                </p>

                <div className="border-t border-gray-200 mb-6"></div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step2.feature1")}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step2.feature2")}
                    </span>
                  </div>
                </div>

              </div>

              <div className="relative w-full lg:w-[500px] h-[220px] sm:h-[300px] lg:h-[350px] rounded-2xl shadow-md group order-1 lg:order-2">

                <video
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/professional_collection.mp4"
                />

                {/* Number Circle (mobile/tablet only, since lg circle is hidden on the side) */}
                <div className="absolute lg:hidden hover:scale-110 transition-all duration-500 -right-3 top-1/2 -translate-y-1/2 flex justify-center items-center text-base font-bold text-white bg-amber-400 h-[42px] w-[42px] rounded-full shadow-lg z-30">
                  2
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex relative flex-col lg:flex-row items-center my-12 sm:my-16 lg:my-25 gap-8 sm:gap-12 lg:gap-25 max-w-6xl mx-auto px-4 sm:px-6">

              {/* Video Section */}
              <div className="relative w-full lg:w-[500px] h-[220px] sm:h-[300px] lg:h-[350px] rounded-2xl shadow-md group">

                <video
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/ExpertProcessing.mp4"
                />

                {/* Number Circle */}
                <div className="absolute hover:scale-110 transition-all duration-500 -right-3 sm:-right-6 top-1/2 -translate-y-1/2 flex justify-center items-center text-base sm:text-lg font-bold text-white bg-amber-400 h-[42px] w-[42px] sm:h-[55px] sm:w-[55px] rounded-full shadow-lg z-30">
                  3
                </div>
              </div>

              {/* Card Section */}
              <div className="w-full lg:w-[500px] bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">

                <div className="flex items-center gap-4 mb-6">
                  <CiCalendar className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {t("steps.step3.title")}
                  </h2>
                </div>

                <p className="text-gray-700 text-sm sm:text-[16px] mb-6">
                  {t("steps.step3.desc")}
                </p>

                <div className="border-t border-gray-200 mb-6"></div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step3.feature1")}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step3.feature2")}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative flex my-12 sm:my-16 lg:my-25 flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-6">

              {/* Circle (desktop) */}
              <div className="hidden lg:flex absolute left-[-15px] -translate-x-1/2 top-1/2 -translate-y-1/2 
              h-[55px] w-[55px] rounded-full bg-amber-400 text-white font-bold 
              items-center justify-center shadow-lg z-30">
                4
              </div>

              {/* Card */}
              <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 order-2 lg:order-1">

                <div className="flex items-center gap-4 mb-6">
                  <FaCheck className="text-3xl sm:text-4xl text-[#d4af37] shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {t("steps.step4.title")}
                  </h2>
                </div>

                <p className="text-gray-700 text-sm sm:text-[16px] mb-6">
                  {t("steps.step4.desc")}
                </p>

                <div className="border-t border-gray-200 mb-6"></div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step4.feature1")}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheck className="text-yellow-600 shrink-0" />
                    <span className="text-gray-700 text-[14px]">
                      {t("steps.step4.feature2")}
                    </span>
                  </div>
                </div>

              </div>

              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-[350px] rounded-2xl shadow-md overflow-hidden group order-1 lg:order-2">
                <img
                  src="/luxury.webp"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={t("steps.step4.title")}
                />
                {/* Number Circle (mobile/tablet only) */}
                <div className="absolute lg:hidden flex justify-center items-center text-base font-bold text-white bg-amber-400 h-[42px] w-[42px] rounded-full shadow-lg z-30 -right-3 top-1/2 -translate-y-1/2">
                  4
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex justify-center relative top-[10px] sm:top-[20px] px-4">
            <button className="transition-all duration-600 hover:scale-105 px-6 sm:px-8 w-full sm:w-[250px] py-3.5 sm:py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center justify-center gap-3 text-sm tracking-wider">
              {t("cta.schedulePickup")} <IoAdd className="text-lg" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative top-8 sm:top-10 lg:top-14 w-full h-[5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

          <div className="flex flex-col lg:flex-row items-center relative top-8 sm:top-10 lg:top-14 w-full bg-black py-16 lg:py-0 lg:h-[700px]">

            <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px] bg-amber-400 mx-4 my-8 lg:m-26 rounded-2xl">
              <div className="flex items-center absolute h-[40px] sm:h-[48px] w-[150px] sm:w-[170px] px-4 sm:px-5 gap-2 sm:gap-3 rounded-[30px] font-bold text-sm sm:text-base bg-amber-300 right-[-10px] sm:right-[-25px] -top-[15px] sm:-top-[20px]">
                <HiOutlineSparkles className="text-[16px] sm:text-[20px]" /> {t("club.badge")}
              </div>
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/aquaClub.webp"
                alt={t("club.title")}
              />
            </div>

            <div className="w-full lg:w-[500px] px-6 sm:px-10 lg:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-400">
                {t("club.title")}
              </h2>

              <p className="mt-4 text-sm tracking-widest uppercase text-gray-300">
                {t("club.tagline")}
              </p>

              <p className="mt-6 max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed">
                {t("club.desc")}
              </p>

              <ul className="mt-8 space-y-4 text-sm sm:text-base text-gray-200">
                {(Array.isArray(clubBenefits) ? clubBenefits : []).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <FaCheck className="mt-1 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 pb-8 lg:pb-0">
                <button className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                  {t("club.requestInvitation")}
                </button>

                <button className="px-6 py-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition">
                  {t("club.learnMore")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative w-full h-[5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

        <div className="bg-black text-gray-300 px-6 sm:px-10 py-12 relative">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div>
                <img
                  src="/companylogo.png"
                  alt="Akoya Logo"
                  className="w-32 sm:w-40 mb-6"
                />

                <p className="mt-4 text-sm leading-relaxed">
                  {t("footer.companyDesc")}
                </p>

                <div className="flex gap-4 mt-4 text-gray-400 text-lg">
                  <FaXTwitter />
                  <IoLogoInstagram />
                  <FaFacebook />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div>
                <h3 className="text-yellow-400 font-semibold mb-4">{t("footer.servicesTitle")}</h3>
                <ul className="space-y-2 text-sm">
                  {(Array.isArray(footerServices) ? footerServices : []).map((service) => (
                    <li key={service} className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                      › {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div>
                <h3 className="text-yellow-400 font-semibold mb-4">{t("footer.contactTitle")}</h3>

                <ul className="space-y-4 text-sm">

                  <li className="flex items-start gap-3">
                    <IoLocationSharp className="text-yellow-400 mt-1 shrink-0" />
                    <span>{t("footer.address")}</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaPhoneAlt className="text-yellow-400 mt-1 shrink-0" />
                    <span>{t("footer.phone")}</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <MdOutlineEmail className="text-yellow-400 mt-1 shrink-0" />
                    <span className="break-all">{t("footer.email")}</span>
                  </li>

                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div>
                <h3 className="text-yellow-400 font-semibold mb-4">{t("footer.newsletterTitle")}</h3>
                <p className="text-sm mb-4">
                  {t("footer.newsletterDesc")}
                </p>

                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
                />

                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="mt-4 w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-300 transition"
                >
                  {t("footer.subscribe")}
                </button>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500 text-center md:text-left">
            <p>{t("footer.copyright")}</p>

            <div className="flex gap-6">
              <span>{t("footer.privacyPolicy")}</span>
              <span>{t("footer.termsOfService")}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Landingpage1;