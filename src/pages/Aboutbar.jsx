import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaShieldAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { GiDelicatePerfume } from "react-icons/gi";
import { GiPerfumeBottle } from "react-icons/gi";
import { FaBox } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAirFreshener } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Aboutbar = () => {
  const { t } = useTranslation("translation4");

  const whyChooseIcons = [<FaShieldAlt />, <FaUserCheck />, <FaClock />];
  const whyChooseCards = t("whyChoose.cards", { returnObjects: true });

  const journeyIcons = [
    <FaTshirt />,
    <FaBoxOpen />,
    <GiDelicatePerfume />,
    <FaAirFreshener />,
    <FaBox />,
    <FaGift />,
    <FaWhatsapp />,
    <FaRedditAlien />,
  ];
  const journeySteps = t("journey.steps", { returnObjects: true });

  const teamImages = [
 
  "/pexels-photo-769772.webp",
  "/pexels-photo-3763188.webp",
  "/pexels-photo-3785077.webp",

  ];
  const team = t("specialists.team", { returnObjects: true });

  const footerServices = t("footer.services", { returnObjects: true });

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[600px] bg-center flex items-center justify-center text-white">

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-thin mb-6">
              {t("hero.title")}
            </h1>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            ><div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] w-16 bg-[#D4AF37]"></span>


              <p className="text-[#D4AF37] tracking-widest">
                {t("hero.tagline")}
              </p>


            <span className="h-[1px] w-16 bg-[#D4AF37]"></span>
          </div></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
           <button className="bg-[#D4AF37] text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-110 hover:bg-[#d4af37d6]">
              {t("hero.cta")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="bg-white py-16 md:py-24 px-6">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className=" text-4xl md:text-4xl lg:text-4xl font-light text-black">
            {t("whyChoose.headingPrefix")}{" "}
            <span className="text-[#D4AF37]  font-normal">{t("whyChoose.brand")}</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3  gap-10 md:gap-12">

          {(Array.isArray(whyChooseCards) ? whyChooseCards : []).map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="bg-[#f8f5f2] rounded-xl p-6 md:p-8 max-w-xs mx-auto text-center transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 text-[#D4AF37] text-5xl rounded-full">
                    {whyChooseIcons[index]}
                  </div>
                </div>
                <h3 className="text-xl md:text-[19px]  font-medium mb-4 text-black">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
      <div className="bg-[#f4f1ed] py-20 px-6">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-light text-black">
      {t("journey.heading")}
    </h2>
  </div>

  {/* Cards Container */}
  <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">

  {(Array.isArray(journeySteps) ? journeySteps : []).map((item, index) => (

    <motion.div
      key={index}
      className="bg-white w-full sm:w-[45%] lg:w-[22%] h-[170px] rounded-2xl p-6 text-center shadow-md flex flex-col justify-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="text-4xl mb-4 text-[#D4AF37] relative right-3">
        {journeyIcons[index]}
      </div>

      <h3 className="text-lg font-semibold mb-2">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm">
        {item.desc}
      </p>
    </motion.div>

  ))}

  <div className="bg-[#f3f1ed] py-24 px-6">

  {/* Heading */}
  <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}>
  <div className="text-center max-w-3xl mx-auto mb-20">
    <h2 className="text-3xl md:text-5xl font-light text-black">
      {t("specialists.heading")}
    </h2>

    <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto my-6"></div>

    <p className="text-gray-700 text-lg leading-relaxed">
      {t("specialists.desc")}
    </p>
  </div></motion.div>

  <div className="bg-[#f3f1ed] py-14">

  <div className="mx-auto px-6
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    gap-8
    lg:w-[1090px] lg:h-[330px]">

    {(Array.isArray(team) ? team : []).map((member, index) => (
      <motion.div
        key={member.name}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="bg-[#e9e6e2] rounded-3xl py-9 px-8 text-center shadow-sm hover:shadow-lg transition duration-300">

          <div className="w-33 h-33 mx-auto mb-5 rounded-full border-4 border-[#D4AF37] overflow-hidden">
            <img
              src={teamImages[index]}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
            {member.name}
          </h3>

          <p className="text-[#D4AF37] text-base mb-4">
            {member.role}
          </p>

          <p className="text-gray-700 text-sm">
            {member.bio}
          </p>

        </div>
      </motion.div>
    ))}

  </div>


</div>
</div>

</div>

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
        {t("footer.aboutDesc")}
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
        {t("footer.servicesTitle")}
      </h3>

      <ul className="space-y-4">
        {(Array.isArray(footerServices) ? footerServices : []).map((service) => (
          <li key={service} className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
            › {service}
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3 - Contact */}
    <div>
      <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
        {t("footer.contactTitle")}
      </h3>

      <div className="space-y-4 text-gray-400">
        <p>{t("footer.area")}</p>
        <p>{t("footer.zone")}</p>
        <p>{t("footer.street")}</p>
        <p>{t("footer.building")}</p>

        <p className="mt-4">{t("footer.phone1")}</p>
        <p>{t("footer.phone2")}</p>

        <p className="mt-4">{t("footer.email")}</p>
      </div>
    </div>

    {/* Column 4 - Newsletter */}
    <div>
      <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
        {t("footer.newsletterTitle")}
      </h3>

      <p className="text-gray-400 mb-6">
        {t("footer.newsletterDesc")}
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
      <span className="hover:text-[#D4AF37] cursor-pointer">{t("footer.privacyPolicy")}</span>
      <span className="hover:text-[#D4AF37] cursor-pointer">{t("footer.termsOfService")}</span>
    </div>

  </div>

</div>
</div>
    </>
  );
};

export default Aboutbar;