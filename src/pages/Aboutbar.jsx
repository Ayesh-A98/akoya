import React from "react";
import { motion } from "framer-motion";
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
              Luxury Laundry. Reimagined.
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
                AKOYA COLLECTION
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
              Schedule Your Pickup
            </button>
          </motion.div>
        </div>
      </div>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="bg-white py-16 md:py-24 px-6">
        
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className=" text-4xl md:text-4xl lg:text-4xl font-light text-black">
            Why Choose{" "}
            <span className="text-[#D4AF37]  font-normal">Akoya</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3  gap-10 md:gap-12">
          
           <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          ><div className="bg-[#f8f5f2] rounded-xl p-6 md:p-8 max-w-xs mx-auto text-center transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 text-[#D4AF37] text-5xl rounded-full"><FaShieldAlt /></div>
            </div>
            <h3 className="text-xl md:text-[19px]  font-medium mb-4 text-black">
              Premium Quality
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              We use only the finest eco-friendly detergents and state-of-the-art 
            </p>
          </div></motion.div> 

            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
          ><div className="bg-[#f8f5f2] rounded-xl p-6 md:p-8 max-w-xs mx-auto text-center transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 text-[#D4AF37] text-5xl rounded-full"><FaUserCheck /></div>
            </div>
            <h3 className="text-xl md:text-[19px]  font-medium mb-4 text-black">
              Personalized Service
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Tailored solutions for each garment with our expert fabric specialists
            </p>
          </div></motion.div>

            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          ><div className="bg-[#f8f5f2] rounded-xl p-6 md:p-8 max-w-xs mx-auto text-center transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 text-[#D4AF37] text-5xl rounded-full"><FaClock /></div>
            </div>
            <h3 className="text-xl md:text-[19px] font-medium mb-4 text-black">
              Convenience
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              24/7 booking with flexible pickup and delivery options
            </p>
          </div>
</motion.div>
        </div>
      </section>
      <div className="bg-[#f4f1ed] py-20 px-6">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-light text-black">
      Our Service Journey
    </h2>
  </div>

  {/* Cards Container */}
  <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">

  {[
    { icon: <FaTshirt />, title: "1. Select Wash Type", desc: "Standard or Express wash options to suit your needs" },
    { icon: <FaBoxOpen />, title: "2. Choose Garments", desc: "From daily wear to delicate couture - we handle all" },
    { icon: <GiDelicatePerfume />, title: "3. Steam Finishing", desc: "Professional pressing for impeccable results" },
    { icon: <FaAirFreshener />, title: "4. Fragrance Infusion", desc: "Luxury scents for men and women" },
    { icon: <FaBox />, title: "5. Packaging", desc: "Choose from our premium wrapping options" },
    { icon: <FaGift />, title: "6. Personalization", desc: "Add a custom card for gifts" },
    { icon: <FaWhatsapp />, title: "7. WhatsApp Checkout", desc: "Easy confirmation via WhatsApp" },
    { icon: <FaRedditAlien />, title: "8. AI Assistance", desc: "3D avatars guide you in Arabic & English" }
  ].map((item, index) => (

    <motion.div
      key={index}
      className="bg-white w-full sm:w-[45%] lg:w-[22%] h-[170px] rounded-2xl p-6 text-center shadow-md flex flex-col justify-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="text-4xl mb-4 text-[#D4AF37] relative right-3">
        {item.icon}
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
      Meet Our Fabric Specialists
    </h2>

    <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto my-6"></div>

    <p className="text-gray-700 text-lg leading-relaxed">
      Our team of garment care experts brings decades of combined experience
      in handling luxury fabrics
    </p>
  </div></motion.div>

  <div className="bg-[#f3f1ed] py-14">

  <div className="mx-auto px-6 
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
    gap-8
    lg:w-[1090px] lg:h-[330px]">

    {/* Card 1 */}
   <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}> <div className="bg-[#e9e6e2] rounded-3xl py-9 px-8 text-center shadow-sm hover:shadow-lg transition duration-300">
      
      <div className="w-33 h-33 mx-auto mb-5 rounded-full border-4 border-[#D4AF37] overflow-hidden">
        <img
          src="\src\assets\pexels-photo-769772.webp"
          alt="Ahmed Al-Mansoori"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
        Ahmed Al-Mansoori
      </h3>

      <p className="text-[#D4AF37] text-base mb-4">
        Head of Couture Care
      </p>

      <p className="text-gray-700 text-sm">
        20+ years in luxury garment care
      </p>

    </div>

</motion.div>
    {/* Card 2 */}
    <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}>
   <div className="bg-[#e9e6e2] rounded-3xl py-9 px-8 text-center shadow-sm hover:shadow-lg transition duration-300">
      
      <div className="w-33 h-33 mx-auto mb-5 rounded-full border-4 border-[#D4AF37] overflow-hidden">
        <img
          src="\src\assets\pexels-photo-3763188.webp"
          alt="Layla Hassan"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
        Layla Hassan
      </h3>

      <p className="text-[#D4AF37] text-base mb-4">
        Fabric Technology Expert
      </p>

      <p className="text-gray-700 text-sm">
        Fabric scientist and preservation expert
      </p>

    </div>
</motion.div>

    {/* Card 3 */}
   <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}>
    <div className="bg-[#e9e6e2] rounded-3xl py-9 px-8 text-center shadow-sm hover:shadow-lg transition duration-300">
      
      <div className="w-33 h-33 mx-auto mb-5 rounded-full border-4 border-[#D4AF37] overflow-hidden">
        <img
          src="\src\assets\pexels-photo-3785077.webp"
          alt="Yousef Ibrahim"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
        Yousef Ibrahim
      </h3>

      <p className="text-[#D4AF37] text-base mb-4">
        Operations Director
      </p>

      <p className="text-gray-700 text-sm">
        Ensuring seamless service delivery
      </p>

    </div></motion.div>

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
        src="/src/assets/companylogo.png"
        alt="Akoya Logo"
        className="w-40 mb-6"
      />

      <p className="leading-relaxed text-white">
        Luxury garment care redefined. Serving Doha's discerning clients with
        unparalleled quality and service.
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
        OUR SERVICES
      </h3>

      <ul className="space-y-4">
        <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› Premium Laundry</li>
        <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› Dry Cleaning</li>
        <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› Steam Pressing</li>
        <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› Fragrance Infusion</li>
        <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› Couture Care</li>
        <li className="hover:text-[#D4AF37] cursor-pointer hover:translate-x-2 duration-500">› VIP Club</li>
      </ul>
    </div>

    {/* Column 3 - Contact */}
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

    {/* Column 4 - Newsletter */}
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

      <button onClick={() => {
    window.scrollTo(0, 0);
  }}  className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-md hover:bg-[#c9a52e] transition">
        Subscribe
      </button>
    </div>

  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

    <p>© 2025 AKOYA Luxury Laundry. All rights reserved.</p>

    <div className="flex gap-6 mt-4 md:mt-0">
      <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Policy</span>
      <span className="hover:text-[#D4AF37] cursor-pointer">Terms of Service</span>
    </div>

  </div>

</div>
</div>
    </>
  );
};

export default Aboutbar;