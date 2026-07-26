import React from "react";
import { FaLeaf, FaPhoneAlt, FaEgg, FaTruck, FaDrumstickBite } from "react-icons/fa";
import heroMain from "../assets/hero-eggs.jpg";
import chickens from "../assets/chickens.jpg";
import heroBg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-4 md:pt-6 lg:pt-8 pb-12 lg:pb-16"
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* LEFT */}
          <div className="max-w-[580px]">
            <h1 className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[62px] lg:text-[68px] font-extrabold tracking-[-0.02em] text-[#4C2D12]">
              Ferme Avicole
              <br />
              <span className="text-[#1E7A34]">La Marcadèle</span>
            </h1>

            <p className="mt-5 text-[16px] md:text-[17px] leading-7 text-[#4f4f4f] max-w-[520px]">
              Depuis 2017, nous contribuons à la souveraineté alimentaire du
              Gabon avec des produits frais, sains et de qualité.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E7A34] hover:bg-[#17642b] text-white px-6 py-4 font-semibold transition shadow-sm"
              >
                <FaLeaf className="text-sm" />
                Découvrir nos produits
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1E7A34] text-[#1E7A34] px-6 py-4 font-semibold hover:bg-green-50 transition"
              >
                <FaPhoneAlt className="text-sm" />
                Nous contacter
              </a>
            </div>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1E7A34] text-white flex items-center justify-center shrink-0">
                  <FaEgg className="text-sm" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#222] leading-5">
                    Produits frais
                  </h4>
                  <p className="text-[13px] text-[#666] leading-5">et locaux</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-[#7A4A18] text-white flex items-center justify-center shrink-0">
                  <FaDrumstickBite className="text-sm" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#222] leading-5">
                    Élevage responsable
                  </h4>
                  <p className="text-[13px] text-[#666] leading-5">
                    et contrôlé
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F3B81B] text-white flex items-center justify-center shrink-0">
                  <FaTruck className="text-sm" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#222] leading-5">
                    Livraison gratuite
                  </h4>
                  <p className="text-[13px] text-[#666] leading-5">
                    Libreville, Akanda, Owendo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative min-h-[460px] lg:min-h-[560px] flex items-center justify-center">
            {/* forme de fond */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[92%] h-[92%] max-w-[600px] rounded-[45%] bg-[#F5F1EA]"></div>
            </div>

            {/* image principale */}
            <div className="relative z-10 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[430px] md:h-[430px] rounded-[42%] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              <img
                src={heroMain}
                alt="Œufs frais"
                className="w-full h-full object-cover"
              />
            </div>

            {/* image flottante haut droite */}
            <div className="absolute z-20 top-2 right-0 sm:right-6 md:right-4 lg:right-0 w-[170px] sm:w-[220px] md:w-[250px] bg-white p-2 shadow-[0_14px_35px_rgba(0,0,0,0.16)] rotate-[8deg]">
              <img
                src={chickens}
                alt="Poules"
                className="w-full h-[110px] sm:h-[140px] md:h-[160px] object-cover"
              />
            </div>

            {/* image flottante bas droite */}
            <div className="absolute z-20 bottom-4 right-4 sm:right-14 md:right-10 lg:right-6 w-[160px] sm:w-[210px] md:w-[235px] bg-white p-2 shadow-[0_14px_35px_rgba(0,0,0,0.16)] rotate-[-6deg]">
              <img
                src={chickens}
                alt="Volailles"
                className="w-full h-[105px] sm:h-[130px] md:h-[145px] object-cover"
              />
            </div>

            {/* décor bas */}
            <img
              src={heroBg}
              alt=""
              className="absolute bottom-0 right-0 w-[140px] sm:w-[180px] md:w-[220px] opacity-95"
            />

            {/* petit accent jaune */}
            <div className="hidden md:block absolute left-[8%] top-[28%] z-20">
              <div className="relative w-12 h-12">
                <span className="absolute w-8 h-[4px] rounded-full bg-[#F2B81B] rotate-[25deg] top-4 left-2"></span>
                <span className="absolute w-8 h-[4px] rounded-full bg-[#F2B81B] rotate-[-25deg] top-6 left-2"></span>
                <span className="absolute w-[4px] h-8 rounded-full bg-[#F2B81B] rotate-[15deg] top-2 left-5"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}