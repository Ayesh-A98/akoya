import React from "react";
import { FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Landingpage2 = () => {
  const { t } = useTranslation("translation1");

  const cards = [
    {
      title: t("card1.title"),
      desc: t("card1.description"),
      img: "/src/assets/platinumCare.webp",
      icon: "👔",
    },
    {
      title: t("card2.title"),
      desc: t("card2.description"),
      img: "/src/assets/exectiveCollection.jpg",
      icon: "✨",
    },
    {
      title: t("card3.title"),
      desc: t("card3.description"),
      img: "/src/assets/professionalCollection.webp",
      icon: "🧵",
    },
  ];

  return (
    <div className="bg-[#FAF9F7] py-10 sm:py-14 lg:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-center mb-4 px-4">
        {t("heading")}
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-14 px-4"
      >
        <div className="h-px w-8 sm:w-12 bg-[#D4AF37]"></div>

        <p className="text-[#D4AF37] tracking-widest text-xs sm:text-sm md:text-lg text-center">
          {t("subheading")}
        </p>

        <div className="h-px w-8 sm:w-12 bg-[#D4AF37]"></div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 sm:px-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-full sm:w-[48%] lg:w-[340px] group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={card.img}
                alt={card.title}
                className="h-[300px] sm:h-[340px] lg:h-[380px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl rounded-full bg-[#D4AF37]">
                  {card.icon}
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-200 mb-4">
                  {card.desc}
                </p>

                <Link to="/services">
                  <button className="flex items-center gap-2 bg-[#D4AF37] text-black px-5 py-2 rounded-full hover:bg-black hover:text-[#D4AF37] transition">
                    {t("button")}
                    <FaChevronRight size={12} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/services">
          <button className="flex items-center gap-3 border px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            {t("viewAll")}
            <FaArrowRightLong size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage2;