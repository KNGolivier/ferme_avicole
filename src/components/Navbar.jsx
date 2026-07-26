import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <img
              src={logo}
              alt="Logo FAM"
              className="w-[95px] md:w-[115px] lg:w-[125px] h-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <a
              href="#home"
              className="relative text-[#1E7A34] font-semibold text-[15px] pb-2"
            >
              Accueil
              <span className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-[#1E7A34]"></span>
            </a>

            <a
              href="#about"
              className="text-[#2f2f2f] hover:text-[#1E7A34] font-medium text-[15px] transition"
            >
              À propos
            </a>
            <a
              href="#activities"
              className="text-[#2f2f2f] hover:text-[#1E7A34] font-medium text-[15px] transition"
            >
              Nos activités
            </a>
            <a
              href="#products"
              className="text-[#2f2f2f] hover:text-[#1E7A34] font-medium text-[15px] transition"
            >
              Nos produits
            </a>
            <a
              href="#gallery"
              className="text-[#2f2f2f] hover:text-[#1E7A34] font-medium text-[15px] transition"
            >
              Galerie
            </a>
            <a
              href="#contact"
              className="text-[#2f2f2f] hover:text-[#1E7A34] font-medium text-[15px] transition"
            >
              Contact
            </a>
          </nav>

          {/* Desktop phone button */}
          <a
            href="tel:+241077751400"
            className="hidden lg:flex items-center gap-3 bg-[#1E7A34] hover:bg-[#17642b] text-white rounded-full px-5 py-3 font-semibold shadow-sm transition"
          >
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <FaPhoneAlt className="text-[13px]" />
            </span>
            <span className="text-[15px] xl:text-[16px]">077 75 14 00</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1E7A34] text-2xl"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-md">
          <div className="max-w-[1240px] mx-auto px-4 py-5 flex flex-col gap-4">
            <a href="#home" className="text-[#1E7A34] font-semibold">
              Accueil
            </a>
            <a href="#about" className="text-gray-700 font-medium">
              À propos
            </a>
            <a href="#activities" className="text-gray-700 font-medium">
              Nos activités
            </a>
            <a href="#products" className="text-gray-700 font-medium">
              Nos produits
            </a>
            <a href="#gallery" className="text-gray-700 font-medium">
              Galerie
            </a>
            <a href="#contact" className="text-gray-700 font-medium">
              Contact
            </a>

            <a
              href="tel:+241077751400"
              className="mt-2 flex items-center justify-center gap-3 bg-[#1E7A34] text-white rounded-full px-5 py-3 font-semibold"
            >
              <FaPhoneAlt className="text-sm" />
              077 75 14 00
            </a>
          </div>
        </div>
      )}
    </header>
  );
}