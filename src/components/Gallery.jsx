import { useState } from "react";
import { LuPlay, LuQuote } from "react-icons/lu";
import chickensImg from "../assets/chickens.jpg";
import eggsImg from "../assets/hero-eggs.jpg";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import VideoModal from "./ui/VideoModal";

export default function Gallery() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Galerie"
          title="La vie à la ferme"
          text="Un aperçu de notre quotidien à Akanda, là où tout commence."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:auto-rows-[240px] md:grid-cols-4 md:gap-5">
          <Reveal className="group relative col-span-2 h-80 overflow-hidden rounded-[28px] md:row-span-2 md:h-auto">
            <img src={chickensImg} alt="Nos poulets dans leur bâtiment d’élevage" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-[13px] font-bold text-ink backdrop-blur">
              Notre élevage
            </span>
          </Reveal>

          <Reveal delay={80} className="group relative h-48 overflow-hidden rounded-[28px] md:h-auto">
            <img src={eggsImg} alt="Œufs frais de la ferme" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </Reveal>

          <Reveal delay={160} className="relative h-48 overflow-hidden rounded-[28px] md:h-auto">
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="group relative flex h-full w-full flex-col items-start justify-end overflow-hidden bg-brand-700 p-5 text-left text-white"
              aria-label="Regarder la vidéo de la ferme"
            >
              <img src={chickensImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-right opacity-40 transition duration-700 group-hover:scale-105" />
              <span className="relative mb-auto flex h-14 w-14 items-center justify-center rounded-full bg-yolk-500 text-ink transition group-hover:scale-110">
                <LuPlay className="ml-0.5 fill-current text-xl" />
              </span>
              <span className="relative font-display text-[20px] font-semibold leading-tight">Visite en vidéo</span>
            </button>
          </Reveal>

          <Reveal delay={240} className="col-span-2 flex flex-col justify-between gap-5 rounded-[28px] bg-yolk-500 p-7 text-ink md:p-8">
            <LuQuote className="text-[32px] opacity-70" />
            <p className="font-display text-[22px] font-medium leading-snug md:text-[26px]">
              Participer activement au développement agricole du Gabon, un œuf à la fois.
            </p>
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-ink/60">La Marcadèle · depuis 2017</p>
          </Reveal>
        </div>
      </div>

      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  );
}
