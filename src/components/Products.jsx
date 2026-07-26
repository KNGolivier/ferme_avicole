import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import eggsImg from "../assets/hero-eggs.jpg";
import chickensImg from "../assets/chickens.jpg";

export default function Products() {
  const products = [
    { id: 1, image: eggsImg, title: "Œufs frais" },
    { id: 2, image: chickensImg, title: "Poulets blancs" },
    { id: 3, image: chickensImg, title: "Poules rousses" },
    { id: 4, image: chickensImg, title: "Élevage intérieur" },
  ];

  return (
    <section id="products" className="py-14 md:py-16 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-8 md:mb-10">
          <p className="text-[#1E7A34] uppercase tracking-[0.18em] text-[12px] md:text-[13px] font-bold mb-2">
            Nos produits
          </p>

          <h2 className="text-[#1F1F1F] text-[30px] sm:text-[36px] md:text-[42px] leading-[1.15] font-extrabold">
            Des produits frais et de qualité
          </h2>
        </div>

        {/* Slider visual */}
        <div className="flex items-center justify-center gap-4 lg:gap-5">
          {/* Left arrow */}
          <button className="hidden md:flex w-11 h-11 rounded-full bg-[#1E7A34] hover:bg-[#17642b] text-white items-center justify-center shrink-0 transition">
            <FaArrowLeft className="text-[12px]" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full max-w-[1040px]">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-[14px] overflow-hidden bg-white"
              >
                <div className="h-[160px] md:h-[170px] lg:h-[165px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button className="hidden md:flex w-11 h-11 rounded-full bg-[#1E7A34] hover:bg-[#17642b] text-white items-center justify-center shrink-0 transition">
            <FaArrowRight className="text-[12px]" />
          </button>
        </div>
      </div>
    </section>
  );
}