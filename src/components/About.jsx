import React, { useState } from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import aboutImg from "../assets/chickens.jpg";
import aboutVideo from "../assets/farm.mp4";

export default function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-[28px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <img
                  src={aboutImg}
                  alt="Ferme avicole"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover"
                />
              </div>

              {/* Bouton Play */}
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-[#1E7A34] shadow-[0_12px_30px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-110 transition duration-300"
              >
                <FaPlay className="ml-1 text-lg md:text-xl" />
              </button>
            </div>

            {/* Texte */}
            <div className="max-w-[580px]">
              <p className="text-[#1E7A34] uppercase tracking-[0.18em] text-[13px] font-bold mb-4">
                À propos de nous
              </p>

              <h2 className="text-[#222] text-[32px] sm:text-[38px] md:text-[44px] leading-[1.12] font-extrabold">
                Une ferme engagée pour un avenir durable
              </h2>

              <p className="mt-6 text-[#555] text-[16px] leading-8">
                Créée en 2017, la ferme avicole La Marcadèle est née d’une vision
                : participer activement au développement agricole du Gabon en
                fournissant des produits avicoles de qualité supérieure.
              </p>

              <p className="mt-4 text-[#555] text-[16px] leading-8">
                Nous élevons nos volailles dans le respect des normes d’hygiène
                et de bien-être animal afin de garantir à nos clients des
                produits sains, frais et savoureux.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1E7A34] hover:bg-[#17642b] text-white px-6 py-4 font-semibold transition"
              >
                En savoir plus
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal vidéo */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition"
            >
              &times;
            </button>

            {/* Vidéo */}
            <video
              src={aboutVideo}
              controls
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
            >
              Votre navigateur ne supporte pas la lecture des vidéos.
            </video>
          </div>
        </div>
      )}
    </>
  );
}