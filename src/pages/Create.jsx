import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { User, Mail, Lock, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Create = () => {
  const { t, i18n } = useTranslation("translation10");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    console.log(`Field changed -> ${name}: ${newValue}`);

    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordsMatch = form.password === form.confirmPassword && form.password !== "";

    console.log("── CREATE ACCOUNT SUBMIT ──────────────────────");
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    console.log("Phone (WhatsApp):", form.phone);
    console.log("Passwords match:", passwordsMatch);
    console.log("Agreed to terms:", form.agree);
    console.log("Full form state:", form);
    console.log("────────────────────────────────────────────────");

    if (!passwordsMatch) {
      console.warn("Password and Confirm Password do not match!");
    }
    if (!form.agree) {
      console.warn("User has not agreed to terms and conditions.");
    }
  };

  const changeLanguage = (lng) => {
    console.log("Language changed to:", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="pt-[80px] min-h-screen bg-[#e9e6e1] flex items-center justify-center">
      <div className="w-[480px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Top Header */}
        <div className="bg-[#1D1F23] text-center py-8 px-6 relative">
          <h1 className="text-[#D4AF37] text-2xl tracking-widest">
            {t("header.brand")}
          </h1>

          <div className="h-[2px] w-full my-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>

          <p className="text-gray-300 text-sm">
            {t("header.subtitle")}
          </p>

          {/* Language switcher */}
          <div className="absolute top-3 right-3 flex gap-1">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 text-xs rounded-md cursor-pointer ${
                i18n.language === "en" ? "bg-[#D4AF37] text-black" : "bg-transparent text-gray-400 border border-gray-600"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("ur")}
              className={`px-2 py-1 text-xs rounded-md cursor-pointer ${
                i18n.language === "ur" ? "bg-[#D4AF37] text-black" : "bg-transparent text-gray-400 border border-gray-600"
              }`}
            >
              اردو
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-10 py-8 space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              {t("fields.fullName")}
            </label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder={t("fields.fullNamePlaceholder")}
                value={form.name}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              {t("fields.email")}
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder={t("fields.emailPlaceholder")}
                value={form.email}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              {t("fields.password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              {t("fields.confirmPassword")}
            </label>
            <div className="relative">
              <Check className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              {t("fields.whatsapp")}
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                name="phone"
                placeholder={t("fields.whatsappPlaceholder")}
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {t("fields.whatsappHint")}
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="accent-[#D4AF37]"
            />
            <span>
              {t("terms.agreePrefix")}{" "}
              <span className="text-[#D4AF37] cursor-pointer hover:underline">
                {t("terms.agreeLink")}
              </span>
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#c9a633] to-[#D4AF37] text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            {t("actions.createAccount")}
          </button>

          {/* Login */}
          <div className="text-center text-sm text-gray-600 mt-3">
            {t("actions.alreadyHaveAccount")}{" "}
            <Link
              to="/login"
              className="text-[#D4AF37] font-semibold hover:underline"
            >
              {t("actions.signIn")}
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Create;