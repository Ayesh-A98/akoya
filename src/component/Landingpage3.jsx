import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Landingpage3 = () => {
  const { t } = useTranslation("translation2");

  // Each packaging card keeps its own image + "features" translation key,
  // but shares the same title/desc/included copy from the JSON files.
  const packagingCards = [
    { image: "/src/assets/suit-plastic-new.webp", featuresKey: "packaging.card1.features", imgHeight: "h-[260px] sm:h-[300px] md:h-[340px]" },
    { image: "/src/assets/package.webp", featuresKey: "packaging.card2.features", imgHeight: "h-[220px] sm:h-[260px] md:h-[300px]" },
    { image: "/src/assets/BOX.webp", featuresKey: "packaging.card3.features", imgHeight: "h-[220px] sm:h-[260px] md:h-[300px]" },
  ];

  const fragrances = [
    { key: "maknoun", image: "/src/assets/maknoun.webp" },
    { key: "mad", image: "/src/assets/mad.webp" },
    { key: "lulwa", image: "/src/assets/lulwa.webp" },
    { key: "sadf", image: "/src/assets/sadf.webp" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex flex-col items-center text-center my-10 sm:my-16 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-medium my-3 text-[#D4AF37]">
            {t("hero.subtitle")}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 sm:px-6 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="rounded-3xl w-full md:w-[45%] lg:w-[500px] h-auto min-h-[220px] sm:min-h-[260px] bg-[#F5E1DA] hover:shadow-2xl transition duration-300 p-6 sm:p-8">

            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧼</div>

            <h1 className="text-xl sm:text-2xl font-bold text-[#1C1C1C] mb-2">
              {t("wash.standard.title")}
            </h1>

            <p className="text-sm sm:text-base text-[#2C2C2C] mb-4">
              {t("wash.standard.desc")}
            </p>

            <p className="text-[#D4AF37] font-medium text-base sm:text-lg">
              {t("wash.standard.price")}
            </p>

          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl w-full md:w-[45%] lg:w-[500px] h-auto min-h-[220px] sm:min-h-[260px] bg-[#F5E1DA] hover:shadow-2xl transition duration-300 p-6 sm:p-8">

            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>

            <h1 className="text-xl sm:text-2xl font-bold text-[#1C1C1C] mb-2">
              {t("wash.express.title")}
            </h1>

            <p className="text-sm sm:text-base text-[#2C2C2C] mb-4">
              {t("wash.express.desc")}
            </p>

            <p className="text-[#D4AF37] font-medium text-base sm:text-lg">
              {t("wash.express.price")}
            </p>

          </div>

        </div>
      </motion.div>

      <div className="flex justify-center my-10 sm:my-14 px-4">
        <Link to="/services" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#D4AF37] text-[#1C1C1C] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 sm:hover:scale-110 transition-all duration-500">
            {t("cta.continue")}
          </button>
        </Link>
      </div>

      <div className="bg-[#D9DADC] py-12 sm:py-16 px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t("fragrances.title")}
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t("fragrances.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-7xl mx-auto">

          {fragrances.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="w-full xs:w-[85%] sm:w-[45%] md:w-[260px]"
            >
              <div className="h-[360px] sm:h-[400px] bg-[#EDEDED] rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-all duration-500">

                <img
                  src={item.image}
                  alt={t(`fragrances.${item.key}.name`)}
                  className="h-[160px] sm:h-[180px] w-full object-cover"
                />

                <div className="flex flex-col justify-between flex-1 p-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {t(`fragrances.${item.key}.name`)}
                    </h2>

                    <p className="text-gray-600 text-sm mt-2">
                      {t(`fragrances.${item.key}.desc`)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[#C9A227] font-bold text-base sm:text-lg">
                      {t("fragrances.priceRange")}
                    </span>

                    <Link to="/book">
                      <button className="bg-[#C9A227] text-white px-4 py-1.5 rounded-full text-sm hover:scale-105 transition">
                        {t("fragrances.add")}
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="bg-amber-400">
          <div className="text-3xl sm:text-4xl md:text-5xl bg-[#FAF9F7] font-light text-center tracking-widest py-8 sm:py-0">
            {t("packaging.finalTouch")}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center bg-[#FAF9F7] gap-2 sm:gap-4 pb-8 sm:pb-0 px-4">
            <div className="hidden sm:block h-px w-16 bg-[#D4AF37]"></div>
            <h4 className="text-base sm:text-[20px] tracking-widest text-[#D4AF37] font-medium text-center">
              {t("packaging.optionsLabel")}
            </h4>
            <div className="hidden sm:block h-px w-16 bg-[#D4AF37]"></div>
          </div>
        </div>
      </motion.div>

      <div className="bg-[#FAF9F7] flex flex-col lg:flex-row flex-wrap justify-center items-stretch h-auto w-full my-6 gap-8 sm:gap-9 px-4 sm:px-6 pb-4">

        {packagingCards.map((card, index) => (
          <div
            key={card.featuresKey}
            className="w-full max-w-[320px] md:max-w-[340px] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-700 hover:scale-105 group"
          >

            {/* Image Section */}
            <div className="relative">

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
              >

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] group-hover:to-[#363636] opacity-80 pointer-events-none z-10"></div>

                {/* Image */}
                <img
                  src={card.image}
                  alt={t("packaging.title")}
                  className={`w-full ${card.imgHeight} object-contain rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105`}
                />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-yellow-500 text-black font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md text-xs sm:text-sm">
                    {t("packaging.included")}
                  </span>
                </div>

              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >

              <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-8 bg-gray-50">

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  {t("packaging.title")}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-sm">
                  {t("packaging.desc")}
                </p>

                <ul className="space-y-2 text-sm">
                  {(() => {
                    const features = t(card.featuresKey, { returnObjects: true });
                    return Array.isArray(features) ? features : [];
                  })().map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-700 transition-all duration-500 hover:translate-x-2"
                    >
                      <span className="text-yellow-500 mt-1"><FaCheck /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>

          </div>
        ))}

      </div>

      <div className="bg-[#FAF9F7] py-8 sm:py-10 px-4">
        <Link to="/book">
          <div className="px-6 sm:px-8 h-[50px] w-full max-w-[250px] py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center justify-center mx-auto gap-3 text-sm tracking-wider transition-all duration-300 hover:scale-105 sm:hover:scale-110">
            {t("cta.book")} <RiShoppingBagLine />
          </div>
        </Link>
      </div>

    </div>
  );

};
export default Landingpage3;