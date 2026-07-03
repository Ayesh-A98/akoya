import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Vision = () => {
  // "translation6" is the namespace this page's strings live in (see i18n.js)
  const { t, i18n } = useTranslation("translation6");
  const isRTL = i18n.language === "ur";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full bg-gray-100 py-12 sm:py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-[#C9A227]">
            {t("hero.subtitle")}
          </h2>

          {/* Tagline */}
          <p className="mt-6 text-sm sm:text-base lg:text-lg italic text-gray-600 px-2">
            {t("hero.tagline")}
          </p>

          {/* Gold Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-[#C9A227]"></div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 relative lg:-top-32 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="space-y-6 lg:sticky lg:top-28 self-start h-fit">
                {/* Image Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-[280px] sm:h-[380px] lg:h-[800px]">
                  <img
                    src="/ourmission.jpeg"
                    alt={t("imageCard.heading")}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-white text-base sm:text-lg font-semibold">
                      {t("imageCard.heading")}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      {t("imageCard.subtext")}
                    </p>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#C9A227] rounded-xl p-5 sm:p-6 shadow-lg">
                  <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
                    {t("ctaCard.heading")}
                  </h4>

                  <button className="w-full bg-white text-[#C9A227] font-semibold py-3 rounded-md hover:bg-gray-100 transition duration-300">
                    {t("ctaCard.button")}
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* ===== Vision ===== */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-[#C9A227] flex items-center p-6 sm:p-8 w-full min-h-[100px] md:h-[190px]">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      {t("vision.title")}
                    </h2>
                  </div>

                  <div className="md:col-span-2 bg-white p-6 sm:p-8 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t("vision.text")}
                  </div>
                </div>
              </motion.div>

              {/* ===== Mission ===== */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-lg">
                  <div className="md:col-span-2 bg-white p-6 sm:p-8 text-sm sm:text-base text-gray-600 leading-relaxed order-2 md:order-1">
                    {t("mission.text")}
                  </div>

                  <div className="bg-gradient-to-r from-[#0F1B2D] to-[#1E2A40] flex items-center justify-center p-6 sm:p-8 min-h-[100px] md:h-[190px] order-1 md:order-2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
                      {t("mission.title")}
                    </h2>
                  </div>
                </div>
              </motion.div>

              <section className="bg-gray-100 py-10 sm:py-16">
                <div className="max-w-6xl mx-auto px-0">
                  <div className="bg-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 md:p-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
                      {t("coreValues.heading")}
                    </h2>

                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {/* CARD */}
                        <div className="relative bg-white rounded-2xl border-[#C9A227] hover:shadow-lg border-l-4 pl-6 shadow-md p-6 sm:p-8 flex gap-5 sm:gap-6 w-full">
                          <div className="w-12 h-12 bg-[#C9A227] rounded-xl flex items-center justify-center shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>

                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                              {t("coreValues.excellence.title")}
                            </h4>
                            <p className="text-gray-700 text-[13px] sm:text-[14px]">
                              {t("coreValues.excellence.desc")}
                            </p>
                          </div>
                        </div>

                        {/* CARD */}
                        <div className="relative bg-white hover:shadow-lg rounded-2xl shadow-md p-6 sm:p-8 flex gap-5 sm:gap-6 border-[#C9A227] border-l-4 pl-6 w-full">
                          <div className="w-12 h-12 bg-[#C9A227] rounded-xl flex items-center justify-center shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>

                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                              {t("coreValues.innovation.title")}
                            </h4>
                            <p className="text-gray-700 text-[13px] sm:text-[14px]">
                              {t("coreValues.innovation.desc")}
                            </p>
                          </div>
                        </div>

                        {/* CARD */}
                        <div className="relative bg-[#FCFCFD] hover:shadow-lg rounded-2xl shadow-md p-6 sm:p-8 flex border-[#C9A227] border-l-4 pl-6 gap-5 sm:gap-6 w-full">
                          <div className="w-12 h-12 bg-[#C9A227] rounded-xl flex items-center justify-center shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>

                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                              {t("coreValues.sustainability.title")}
                            </h4>
                            <p className="text-gray-700 text-[13px] sm:text-[14px]">
                              {t("coreValues.sustainability.desc")}
                            </p>
                          </div>
                        </div>

                        {/* CARD */}
                        <div className="bg-[#FCFCFD] rounded-2xl hover:shadow-lg shadow-md p-6 sm:p-8 md:p-10 flex gap-5 sm:gap-6 border-l-4 pl-6 border-[#C9A227] w-full">
                          <div className="w-12 h-12 bg-[#C9A227] rounded-xl flex items-center justify-center shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>

                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                              {t("coreValues.customerFocus.title")}
                            </h4>
                            <p className="text-gray-700 text-[13px] sm:text-[14px]">
                              {t("coreValues.customerFocus.desc")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#1C1C1C] text-gray-300 pt-16 sm:pt-20 pb-10 px-6 lg:-mt-30">
        {/* Top Divider */}
        <div className="border-t border-white mb-12 sm:mb-16 lg:-mt-20"></div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Column 1 - Logo + About */}
          <div>
            <img
              src="/companylogo.png"
              alt="Akoya Logo"
              className="w-32 sm:w-40 mb-6"
            />

            <p className="leading-relaxed text-white text-sm sm:text-base">
              {t("footer.about")}
            </p>

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

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-[#D4AF37] text-base sm:text-lg tracking-widest mb-6">
              {t("footer.servicesHeading")}
            </h3>

            <ul className="space-y-4 text-sm sm:text-base">
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

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-[#D4AF37] text-base sm:text-lg tracking-widest mb-6">
              {t("footer.contactHeading")}
            </h3>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base">
              <p>{t("footer.area")}</p>
              <p>{t("footer.zone")}</p>
              <p>{t("footer.street")}</p>
              <p>{t("footer.building")}</p>

              <p className="mt-4">+97433689955</p>
              <p>+97433689996</p>

              <p className="mt-4 break-all">info@akoyaluxurylaundry.com</p>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-[#D4AF37] text-base sm:text-lg tracking-widest mb-6">
              {t("footer.newsletterHeading")}
            </h3>

            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              {t("footer.newsletterText")}
            </p>

            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />

            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-md hover:bg-[#c9a52e] transition"
            >
              {t("footer.subscribe")}
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm gap-4 text-center">
          <p>{t("footer.copyright")}</p>

          <div className="flex gap-6">
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

export default Vision;