import React, { useState } from "react";
import { User, Mail, Lock, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Create = () => {
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
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="pt-[80px] min-h-screen bg-[#e9e6e1] flex items-center justify-center">
      <div className="w-[480px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Top Header */}
        <div className="bg-[#1D1F23] text-center py-8 px-6">
          <h1 className="text-[#D4AF37] text-2xl tracking-widest">
            AKOYA LUXURY LAUNDRY
          </h1>

          <div className="h-[2px] w-full my-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>

          <p className="text-gray-300 text-sm">
            Create your premium account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-10 py-8 space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm">
              Password
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
              Confirm Password
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
              WhatsApp Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
              <input
                type="text"
                name="phone"
                placeholder="+1234567890"
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-11 border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Enter your full WhatsApp number with country code (e.g., +1234567890)
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
              I agree to the{" "}
              <span className="text-[#D4AF37] cursor-pointer hover:underline">
                terms and conditions
              </span>
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#c9a633] to-[#D4AF37] text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            Create Account
          </button>

          {/* Login */}
          <div className="text-center text-sm text-gray-600 mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#D4AF37] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Create;