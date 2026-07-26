import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import chickensBg from "../assets/chickens.jpg";

export default function ContactBanner() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={chickensBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-[#1E7A34]/70" />

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center min-h-[120px] md:min-h-[135px]">
          {/* Left block */}
          <div className="flex items-center gap-4 md:gap-5 py-6 md:py-7 lg:pr-10">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/45 flex items-center justify-center shrink-0">
              <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
            </div>

            <div>
              <p className="text-[#F3C85A] text-[11px] md:text-[12px] font-semibold leading-none mb-1">
                Située à Akanda
              </p>
              <h3 className="text-white text-[20px] md:text-[26px] leading-[1.18] font-extrabold max-w-[470px]">
                Livraison gratuite sur Libreville, Akanda et Owendo
              </h3>
            </div>
          </div>

          {/* Right block */}
          <div className="flex items-center gap-4 md:gap-5 py-6 md:py-7 lg:pl-10 lg:border-l lg:border-white/30">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/45 flex items-center justify-center shrink-0">
              <FaPhoneAlt className="text-white text-lg md:text-xl" />
            </div>

            <div>
              <p className="text-white/80 text-[11px] md:text-[12px] leading-none mb-1">
                Besoin d’informations ?
              </p>
              <h3 className="text-white text-[20px] md:text-[26px] leading-[1.15] font-extrabold">
                Appelez-nous dès maintenant
              </h3>
              <p className="mt-2 text-[#F6C54D] text-[26px] md:text-[34px] font-extrabold leading-none">
                077 75 14 00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}