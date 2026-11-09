import { FaWhatsapp } from "react-icons/fa";
import { LuTruck } from "react-icons/lu";
import eggsImg from "../assets/hero-eggs.jpg";
import chickensImg from "../assets/chickens.jpg";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { whatsappLink } from "../data/site";

const PRODUCTS = [
  {
    title: "Œufs frais",
    tag: "Ponte",
    text: "Des œufs frais en plateaux, contrôlés régulièrement.",
    image: eggsImg,
    zoom: "",
  },
  {
    title: "Poulets blancs",
    tag: "Volaille",
    text: "Une viande tendre et savoureuse, élevée localement.",
    image: chickensImg,
    zoom: "",
  },
  {
    title: "Poules rousses",
    tag: "Volaille",
    text: "Des poules élevées avec soin, au goût authentique.",
    image: chickensImg,
    // Recadrage sur la poule tachetée en bas à gauche de la photo
    zoom: "scale-[2.1] origin-[4%_88%]",
  },
  {
    title: "Coquelets",
    tag: "Volaille",
    text: "De jeunes volailles parfaites pour vos repas en famille.",
    image: chickensImg,
    // Recadrage sur le groupe en haut à droite
    zoom: "scale-[1.9] origin-[95%_45%]",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Nos produits"
            title="Des produits frais et de qualité"
            text="Commandez en un message : nous vous confirmons la disponibilité et nous livrons gratuitement."
          />
          <Reveal className="flex shrink-0 items-center gap-3 rounded-full bg-yolk-100 px-5 py-3 text-[14px] font-semibold text-earth-800">
            <LuTruck className="text-[18px]" />
            Livraison offerte à Libreville, Akanda et Owendo
          </Reveal>
        </div>

        <div className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 md:mt-14 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              delay={i * 90}
              className="group flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:w-[46%] lg:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <div className="h-full w-full transition duration-700 group-hover:scale-110">
                  <img src={p.image} alt={p.title} loading="lazy" className={`h-full w-full object-cover ${p.zoom}`} />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider text-brand-700 backdrop-blur">
                  {p.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[22px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-6 text-ink/60">{p.text}</p>
                <a
                  href={whatsappLink(`Bonjour La Marcadèle, je souhaite commander : ${p.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-50 px-5 py-3 text-[14px] font-bold text-brand-700 transition hover:bg-brand-600 hover:text-white"
                >
                  <FaWhatsapp className="text-[16px]" />
                  Commander
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-2 text-center text-[13px] text-ink/45 lg:hidden">← Faites glisser pour voir plus →</p>
      </div>
    </section>
  );
}
