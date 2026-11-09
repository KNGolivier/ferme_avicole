import { useState } from "react";
import { LuPlay, LuArrowRight, LuCheck } from "react-icons/lu";
import aboutImg from "../assets/chickens.jpg";
import Reveal from "./ui/Reveal";
import VideoModal from "./ui/VideoModal";

const STATS = [
  { value: "2017", label: "Année de création" },
  { value: "3", label: "Communes livrées gratuitement" },
  { value: "6j/7", label: "À votre service" },
  { value: "100%", label: "Production locale" },
];

const POINTS = ["Normes d’hygiène strictes", "Bien-être animal respecté", "Produits sains et savoureux"];

export default function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="about" className="relative overflow-x-clip py-24 md:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visuel + vidéo */}
        <Reveal className="relative">
          <div className="absolute -inset-4 -z-10 rotate-[-3deg] rounded-[44px] bg-sand md:-inset-6" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[36px] shadow-lift"
            aria-label="Regarder la vidéo de présentation de la ferme"
          >
            <img
              src={aboutImg}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/35" />
            <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2.4s]" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-brand-600 shadow-xl transition duration-300 group-hover:scale-110">
                <LuPlay className="ml-1 fill-current text-2xl md:text-3xl" />
              </span>
            </span>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-bold text-ink backdrop-blur">
              Visite de la ferme en vidéo
            </span>
          </button>
        </Reveal>

        {/* Texte */}
        <div>
          <Reveal>
            <p className="eyebrow">À propos de nous</p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] md:text-[50px]">
              Une ferme engagée pour un avenir <span className="italic text-brand-600">durable</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-[16px] leading-8 text-ink/65 md:text-[17px]">
              Créée en 2017, la ferme avicole La Marcadèle est née d’une vision : participer activement au développement
              agricole du Gabon en fournissant des produits avicoles de qualité supérieure.
            </p>
            <p className="mt-4 text-[16px] leading-8 text-ink/65 md:text-[17px]">
              Nous élevons nos volailles dans le respect des normes d’hygiène et de bien-être animal afin de garantir à nos
              clients des produits sains, frais et savoureux.
            </p>

            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] font-semibold text-ink/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white">
                    <LuCheck className="text-[13px]" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a href="#activities" className="btn-primary group mt-9">
              Découvrir nos activités
              <LuArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="container-site mt-20 md:mt-28">
        <Reveal className="grid grid-cols-2 overflow-hidden rounded-[32px] border border-ink/10 bg-white shadow-soft lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 md:p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r" : ""
              } border-ink/10`}
            >
              <p className="font-display text-[40px] font-semibold leading-none tracking-[-0.03em] text-brand-600 md:text-[54px]">
                {s.value}
              </p>
              <p className="mt-3 text-[14px] font-medium text-ink/60">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  );
}
