import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Client = () => {
  const { t, i18n } = useTranslation("translation8");
  const isRTL = i18n.language === "ur";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError(t("errors.fillAllFields"));
      return;
    }

    setError("");

    // ✅ only logs in / navigates when validation passes
    localStorage.setItem("login", true);
    navigate("/");
    navigate(0);
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="pt-[80px] min-h-screen bg-[#e9e6e1] flex items-center justify-center">

      <div className="w-[450px] relative -top-6 bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-[#1D1F23] text-center py-6 px-6">
          <h1 className="text-[#D4AF37] text-2xl tracking-widest">
            {t("header.brand")}
          </h1>
          <div className="h-[2px] w-full my-3 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
          <p className="text-gray-300 text-sm">
            {t("header.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-8 py-8">

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

            <div className="flex justify-between items-center mb-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-gray-600">{t("form.rememberMe")}</span>
              </div>
              <button type="button" className="text-[#D4AF37] font-bold hover:underline">
                {t("form.forgotPassword")}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-[#c9a633] transition duration-300"
            >
              {t("form.signInButton")}
            </button>

            <div className="flex items-center my-6 text-sm">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="px-3 text-gray-500">{t("form.dividerText")}</span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-center">
              <Link to="/create">
                <button type="button" className="text-[#D4AF37] text-sm font-semibold hover:underline">
                  {t("form.createAccount")}
                </button>
              </Link>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Client;