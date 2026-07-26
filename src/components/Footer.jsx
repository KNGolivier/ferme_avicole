import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#3B2415] text-white">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-[1.15fr_0.9fr_1fr_1fr] gap-8 xl:gap-0 py-8 md:py-10">
          {/* Col 1 */}
          <div className="xl:pr-10 xl:border-r xl:border-white/20">
            <img
              src={logo}
              alt="Logo La Marcadèle"
              className="w-[72px] md:w-[82px] h-auto object-contain"
            />

            <p className="mt-4 text-white/80 leading-7 text-[14px] max-w-[250px]">
              Ferme Avicole La Marcadèle, votre partenaire de confiance pour une
              alimentation saine et locale.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FaFacebookF className="text-[13px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FaInstagram className="text-[13px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FaWhatsapp className="text-[13px]" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="xl:px-8 xl:border-r xl:border-white/20">
            <h4 className="text-[16px] font-bold mb-4 text-[#F2C45B]">
              Navigation
            </h4>

            <div className="space-y-1.5 text-white/80 text-[13px] leading-6">
              <a href="#home" className="block hover:text-white transition">
                Accueil
              </a>
              <a href="#about" className="block hover:text-white transition">
                À propos
              </a>
              <a href="#activities" className="block hover:text-white transition">
                Nos activités
              </a>
              <a href="#products" className="block hover:text-white transition">
                Nos produits
              </a>
              <a href="#gallery" className="block hover:text-white transition">
                Galerie
              </a>
              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="xl:px-8 xl:border-r xl:border-white/20">
            <h4 className="text-[16px] font-bold mb-4 text-[#F2C45B]">
              Nos activités
            </h4>

            <div className="space-y-2 text-white/80 text-[13px]">
              <div className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-[11px] text-white/80 shrink-0" />
                <p>Unité de ponte (œufs frais)</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-[11px] text-white/80 shrink-0" />
                <p>Élevage de volaille (poulets, coquelets)</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-[11px] text-white/80 shrink-0" />
                <p>Commercialisation</p>
              </div>
              <div className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-[11px] text-white/80 shrink-0" />
                <p>Livraison gratuite</p>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="xl:pl-8">
            <h4 className="text-[16px] font-bold mb-4 text-[#F2C45B]">
              Contact
            </h4>

            <div className="space-y-3 text-white/80 text-[13px]">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[12px] shrink-0" />
                <p>077 75 14 00</p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[12px] shrink-0" />
                <p>Akanda, Gabon</p>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[12px] shrink-0" />
                <p>contact@lamarcadele.ga</p>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="mt-1 text-[12px] shrink-0" />
                <p>Lun - Sam : 7h00 - 18h00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-3 text-center text-white/60 text-[12px]">
          © 2026 Ferme Avicole La Marcadèle — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}