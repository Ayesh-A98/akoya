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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper1.css";


const ALL_SERVICES = [
  {
    id: 1,
    title: "Dry Cleaning",
    desc: "Expert care for suits and delicate fabrics using eco-friendly solvents.",
    price: "From 6 QAR",
    category: "Dry Cleaning",
    img: "/src/assets/dryCleaning.webp",
    icon: "🧥",
  },
  {
    id: 2,
    title: "Executive Pressing",
    desc: "Crisp finishes for business attire with precision steam technology.",
    price: "From 3 QAR",
    category: "Pressing",
    img: "/src/assets/exectivePressing.webp",
    icon: "👔",
  },
  {
    id: 3,
    title: "Couture Care",
    desc: "Hand-cleaning for designer garments and delicate fabrics.",
    price: "From 7 QAR",
    category: "Specialty",
    img: "/src/assets/care.webp",
    icon: "👗",
  },
  {
    id: 4,
    title: "Express Service",
    desc: "3-hour turnaround for urgent garment needs",
    price: "+30% Premium",
    category: "Traditional",
    img: "/src/assets/sehedulePickup.webp",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Fragrance Infusion",
    desc: "Luxury scent options for your garments",
    price: "5 QAR",
    category: "Express",
    img: "/src/assets/fragrance.webp",
    icon: "🌸",
  },
  {
    id: 6,
    title: "Dishdasha",
    desc: "Professional care for men's traditional Qatari garment",
    price: "From 4 QAR",
    category: "Add-On",
    img: "/src/assets/dishdasha.webp",
    icon: "👳‍♂️",
  },
  {
    id: 7,
    title: "Child Dishdasha",
    desc: "Specialized care for children's traditional garments",
    price: "From 25 QAR",
    category: "Traditional",
    img: "/src/assets/child_dishdasha.webp",
    icon: "👦",
  },
  {
    id: 8,
    title: "Bisht",
    category: "Traditional",
    desc: "Premium care for ceremonial cloak with gold detailing",
    price: "From 7 QAR",
    img: "/src/assets/bisht.webp",
    icon: "✨",
  },
  {
    id: 9,
    category: "Traditional",
    title: "Ghutra",
    desc: "Gentle cleaning for traditional headwear",
    price: "From 3 QAR",
    img: "/src/assets/ghutra.webp",
    icon: "⚡",
  },
  {
    id: 10,
    title: "Kurta",
    category: "Traditional",
    desc: "Care for traditional South Asian tunic",
    price: "From 4 QAR",
    img: "/src/assets/kurta.webp",
    icon: "👘",
  },
  {
    id: 11,
    title: "Kurta Pyjama (Set)",
    category: "Traditional",
    desc: "Complete set cleaning for traditional attire",
    price: "From 6 QAR",
    img: "/src/assets/kurtaPajama.webp",
    icon: "👖",
  },
  {
    id: 12,
    title: "Kameez",
    category: "Traditional",
    desc: "Professional care for traditional long shirts.",
    price: "From 3 QAR",
    img: "/src/assets/kameez.webp",
    icon: "👕",
  },
  {
    id: 13,
    title: "Jalabiya",
    category: "Traditional",
    desc: "Specialized care for flowing traditional gowns.",
    price: "From 7 QAR",
    img: "/src/assets/jalabiya.webp",
    icon: "👚",
  },
  {
    id: 14,
    category: "Traditional",
    title: "Abaya",
    desc: "Professional cleaning for everyday abayas",
    price: "From 10 QAR",
    img: "/src/assets/abaya.webp",
    icon: "✨",
  },
  {
    id: 15,
    title: "Abaya Special",
    category: "Traditional",
    desc: "Premium care for embellished abayas",
    price: "5 QAR",
    img: "/src/assets/abaya_special.webp",
    icon: "✨",
  },
  {
    id: 16,
    title: "Hijab",
    desc: "Delicate cleaning for headscarves",
    category: "Dry Cleaning",
    price: "From 6 QAR",
    img: "/src/assets/hijab.webp",
    icon: "🧣",
  },
  {
    id: 17,
    title: "Gent Suit (3pcs)",
    category: "Pressing",
    desc: "Complete care for 3-piece suits",
    price: "From 12 QAR",
    img: "/src/assets/gent_suit.webp",
    icon: "👗",
  },
  {
    id: 18,
    title: "Dress (short)",
    category: "Specialty",
    desc: "Specialized care for evening gowns",
    price: "From 15 QAR",
    img: "/src/assets/dress.webp",
    icon: "👰",
  },
  {
    id: 19,
    title: "Overcoat",
    desc: "Winter coat cleaning and preservation",
    price: "From 7 QAR",
    category: "Specialty",
    img: "/src/assets/overcoat.webp",
    icon: "🧥",
  },
  {
    id: 20,
    title: "Military Uniform",
    desc: "Regimental standard cleaning and pressing",
    price: "From 9 QAR",
    img: "/src/assets/military_suite.webp",
    category: "Add-On",
    icon: "🌸",
  },
  {
    id: 21,
    title: "Blouse (Special)",
    desc: "Delicate care for embellished top",
    price: "From 6 QAR",
    img: "/src/assets/blouse.webp",
    category: "Express",
    icon: "👚",
  },
  {
    id: 22,
    category: "Specialty",
    title: "Bath Robe",
    desc: "Deep cleaning for plush bathrobes",
    price: "From 3 QAR",
    img: "/src/assets/bathrob.webp",
    icon: "🛁",
  },
  {
    id: 23,
    title: "Dress (Long)",
    desc: "Specialized care for evening gowns",
    price: "From 17 QAR",
    img: "/src/assets/dresslong.webp",
    category: "Express",
    icon: "🛁",
  },
];

const slides = [
  {
    img: "/src/assets/eco.webp",
    title: "Premium Garment Care",
    subtitle: "Expert cleaning for your most delicate fabrics",
  },
  {
    img: "/src/assets/pCollection.webp",
    title: "Eco-Conscious Cleaning",
    subtitle: "Sustainable methods without compromising quality",
  },
  {
    img: "/src/assets/expert.webp",
    title: "Precision Pressing",
    subtitle: "Impeccable finishes for business and formalwear",
  },
];

const Narbarser = () => {
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
    dispatch(setService(service));
    navigate("/book");
  };


  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="relative">
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[570px] bg-cover bg-center flex flex-col justify-center items-center text-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-[#1C1C1C]/10"></div>

              <div
                className="relative z-20 flex flex-col items-center transition-transform duration-700"
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                }}
              >
                <h1 className="text-5xl md:text-6xl font-thin text-white">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-yellow-400 mt-4">
                  {slide.subtitle}
                </p>
                <Link to="/book">
                  <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-all duration-300">
                    Schedule Pickup
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative top-18 bg-[#F8F5F2]">
        <center className="text-5xl bg-[#FAF9F7] font-light relative top-8">
          Our Services
        </center>
        <br />
        <div className="flex justify-center items-center">
          <div className="h-px w-16 relative mx-4 top-3 bg-[#D4AF37]"></div>
          <h4 className="h-[40px] w-[280px] relative top-4.5 text-[20px] tracking-widest text-[#D4AF37] font-medium">
            LUXURY GARMENT CARE
          </h4>
          <div className="h-px w-16 relative top-3.5 mx- bg-[#D4AF37]"></div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen py-10">
        <h2 className="text-center text-sm tracking-widest text-yellow-600 font-semibold">
          LUXURY GARMENT CARE
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
              {cat}
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
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow">
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <span className="text-[#D4AF37] text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {item.desc}
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
                    Order +
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
          Need Personalized Service?
        </h2>
        <p className="max-w-5xl mx-auto mt-6 text-gray-300 text-medium">
          Our VIP concierge team is available 24/7 to handle special requests,
          delicate items, or bulk orders for businesses and <br />
          residences.
        </p>
        <Link to="/contact">
          <button className="mt-10 px-10 py- pt-4 bg-[#D4AF37] transition-all duration-500 hover:scale-105 text-black text-lg font-medium rounded-full hover:bg-[#c9a52e] transition-all duration-300">
            Contact Concierge{" "}
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
              src="/src/assets/companylogo.png"
              alt="Akoya Logo"
              className="w-40 mb-6"
            />
            <p className="leading-relaxed text-white">
              Luxury garment care redefined. Serving Doha's discerning clients
              with unparalleled quality and service.
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

          {/* Column 2 */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              OUR SERVICES
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                › Premium Laundry
              </li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                › Dry Cleaning
              </li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                › Steam Pressing
              </li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                › Fragrance Infusion
              </li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                › Couture Care
              </li>
              <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">
                › VIP Club
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              CONTACT US
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>Area: Al Wakrah</p>
              <p>Zone: 90</p>
              <p>Street No.: 693</p>
              <p>Building No.: 35</p>
              <p className="mt-4">+97433689955</p>
              <p>+97433689996</p>
              <p className="mt-4">info@akoyaluxurylaundry.com</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#D4AF37] text-lg tracking-widest mb-6">
              NEWSLETTER
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe for exclusive offers and garment care tips.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-md hover:bg-[#c9a52e] transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 AKOYA Luxury Laundry. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#D4AF37] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#D4AF37] cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narbarser;
