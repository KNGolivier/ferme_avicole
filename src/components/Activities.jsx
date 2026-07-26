import React from "react";
import eggsImg from "../assets/hero-eggs.jpg";
import chickensImg from "../assets/chickens.jpg";

export default function Activities() {
  return (
    <section id="activities" className="py-16 md:py-20 bg-[#F6F1E9]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <p className="text-[#1E7A34] uppercase tracking-[0.18em] text-[13px] font-bold mb-4">
            Nos activités
          </p>
          <h2 className="text-[#222] text-[32px] sm:text-[38px] md:text-[44px] leading-[1.12] font-extrabold">
            Nos domaines d’expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[28px] p-6 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shrink-0">
              <img
                src={eggsImg}
                alt="Œufs frais"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-[#222] text-[24px] md:text-[28px] leading-[1.25] font-extrabold">
                Unité de ponte et commercialisation d’œufs frais
              </h3>

              <p className="mt-4 text-[#555] leading-8 text-[15px] md:text-[16px]">
                Nous produisons des œufs frais de qualité, contrôlés
                régulièrement afin d’offrir à nos clients un produit sain,
                local et savoureux.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[28px] p-6 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shrink-0">
              <img
                src={chickensImg}
                alt="Volaille"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-[#222] text-[24px] md:text-[28px] leading-[1.25] font-extrabold">
                Unité d’élevage et commercialisation de volaille
              </h3>

              <p className="mt-4 text-[#555] leading-8 text-[15px] md:text-[16px]">
                Nous élevons des volailles dans des conditions optimales pour
                garantir une viande tendre, savoureuse et conforme aux exigences
                de qualité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}