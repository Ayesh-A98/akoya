import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const isVisionPage = location.pathname === "/vision";
  const isLoginPage = location.pathname === "/login";
  const isCreatePage = location.pathname === "/create";

  const { t, i18n } = useTranslation();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language direction / lang attribute sync
  useEffect(() => {
    document.documentElement.dir =
      i18n.language.startsWith("ur") ? "rtl" : "ltr";

    document.documentElement.lang =
      i18n.language.startsWith("ur") ? "ur" : "en";
  }, [i18n.language]);

  // Early return now happens AFTER all hooks have run
  if (isLoginPage || isCreatePage) return null;

  const toggleLanguage = () => {
    const lang = i18n.language.startsWith("ur") ? "en" : "ur";
    i18n.changeLanguage(lang);

    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  return (
    <nav
      className={`fixed top-0 w-full h-[80px] z-50 transition-all duration-500 ${
        isVisionPage
          ? "bg-[#1D2433]"
          : scrolled
          ? "backdrop-blur-md bg-black/40 shadow-lg"
          : "bg-trnsparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-full px-6">

        {/* Logo */}
        <img
          className="h-[40px]"
          src="/companylogo.png"
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-[15px] text-white items-center">
          <Link to="/"><li className="hover:scale-110 transition">{t("navbar.home")}</li></Link>
          <Link to="/services"><li className="hover:scale-110 transition">{t("navbar.services")}</li></Link>
          <Link to="/about"><li className="hover:scale-110 transition">{t("navbar.about")}</li></Link>
          <Link to="/vision"><li className="hover:scale-110 transition">{t("navbar.vision")}</li></Link>
          <Link to="/contact"><li className="hover:scale-110 transition">{t("navbar.contact")}</li></Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4 items-center">

          <button
            className="border border-white text-white rounded-full h-[40px] w-[90px]"
            onClick={toggleLanguage}
          >
            {i18n.language.startsWith("ur") ? "English" : "اردو"}
          </button>

          <Link to="/login">
            <button className="border border-[#D4AF37] text-white rounded-full h-[40px] w-[130px]">
              {t("navbar.login")}
            </button>
          </Link>

          <Link to="/book">
            <button className="bg-[#D4AF37] text-black rounded-full h-[40px] w-[130px] relative hover:scale-110 transition">
              {t("navbar.book")}
            </button>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md text-white flex flex-col items-center gap-6 py-8">

          <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
          <Link to="/services" onClick={() => setOpen(false)}>SERVICES</Link>
          <Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link>
          <Link to="/vision" onClick={() => setOpen(false)}>VISION & MISSION</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link>

          <button
            className="border border-white text-white rounded-full h-[40px] w-[90px]"
            onClick={toggleLanguage}
          >
            {i18n.language.startsWith("ur") ? "English" : "اردو"}
          </button>

          <Link to="/login">
            <button className="border border-[#D4AF37] rounded-full px-6 py-2">
              Client Login
            </button>
          </Link>

          <Link to="/book">
            <button className="bg-[#D4AF37] text-black rounded-full px-6 py-2">
              Book Now
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;