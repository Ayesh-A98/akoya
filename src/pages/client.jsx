import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Client = () => {
  // "translation8" is the namespace this page's strings live in (see i18n.js)
  const { t, i18n } = useTranslation("translation8");
  const isRTL = i18n.language === "ur";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(t("errors.fillAllFields"));
      return;
    }

    setError("");
    // alert(`Welcome, ${email}!`);
  };

  const navigate = useNavigate()

  const handleLogin = ()=>{

    localStorage.setItem("login",true)

    
    navigate("/")
    
    navigate(0)}
  return (
    // Remove navbar height space properly
    <div dir={isRTL ? "rtl" : "ltr"} className="pt-[80px] min-h-screen bg-[#e9e6e1] flex items-center justify-center">
      
      {/* Login Card */}
      <div className="w-[450px] relative -top-6 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Top Black Section */}
        <div className="bg-[#1D1F23] text-center py-6 px-6">
          <h1 className="text-[#D4AF37] text-2xl tracking-widest">
            {t("header.brand")}
          </h1>
          <div className="h-[2px] w-full my-3 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
          <p className="text-gray-300 text-sm">
            {t("header.subtitle")}
          </p>
        </div>

        {/* Form Section */}
         <form onSubmit={handleSubmit} className="">
        <div className="px-8 py-8">
          
          {/* Email */}
          <label className="block text-gray-700 mb-2 text-sm">
            {t("form.emailLabel")}
          </label>
          <input
            type="email"
            placeholder={t("form.emailPlaceholder")}
             value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 rounded-xl px-4 py-3 mb-5 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          {/* Password */}
          <label className="block text-gray-700 mb-2 text-sm">
            {t("form.passwordLabel")}
          </label>
          <input
            type="password"
            placeholder={t("form.passwordPlaceholder")}
             value={password}
              onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 rounded-xl px-4 py-3 mb-5 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-600">{t("form.rememberMe")}</span>
            </div>
            <button className="text-[#D4AF37] font-bold hover:underline">
              {t("form.forgotPassword")}
            </button>
             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </div>

          {/* Sign In Button */}
          <button 
           onClick={handleLogin}
            type="submit"
           className="w-full bg-[#D4AF37] text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-[#c9a633] transition duration-300">
            {t("form.signInButton")}
          </button>

          {/* Divider */}
          <div className="flex items-center my-6 text-sm">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="px-3 text-gray-500">{t("form.dividerText")}</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Create Account */}
          <div className="text-center">
           <Link to="/create"> <button className="text-[#D4AF37] text-sm font-semibold hover:underline">
              {t("form.createAccount")}
            </button></Link>
          </div>

        </div></form>
      </div>
    </div>
  );
};

export default Client;