import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import eggsImg from "../assets/hero-eggs.jpg";
import chickensImg from "../assets/chickens.jpg";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ACTIVITIES = [
  {
    n: "01",
    image: eggsImg,
    alt: "Plateau d’œufs frais",
    title: "Unité de ponte et commercialisation d’œufs frais",
    text: "Nous produisons des œufs frais de qualité, contrôlés régulièrement afin d’offrir à nos clients un produit sain, local et savoureux.",
    points: ["Œufs frais en plateaux", "Contrôles qualité réguliers", "Vente aux particuliers et professionnels"],
    accent: "bg-yolk-500",
  },
  {
    n: "02",
    image: chickensImg,
    alt: "Volailles de la ferme",
    title: "Unité d’élevage et commercialisation de volaille",
    text: "Nous élevons des volailles dans des conditions optimales pour garantir une viande tendre, savoureuse et conforme aux exigences de qualité.",
    points: ["Poulets et coquelets", "Conditions d’élevage optimales", "Livraison gratuite à domicile"],
    accent: "bg-brand-500",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative bg-sand py-24 md:py-32">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Nos activités"
          title="Nos domaines d’expertise"
          text="Deux unités complémentaires, une même exigence : vous apporter le meilleur de l’élevage local."
        />

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          {ACTIVITIES.map((a, i) => (
            <Reveal
              key={a.n}
              as="article"
              delay={i * 120}
              className="group flex flex-col overflow-hidden rounded-[32px] bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-60 overflow-hidden md:h-72">
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 font-display text-[15px] font-semibold text-ink backdrop-blur">
                  {a.n}
                </span>
                <span className={`absolute bottom-0 left-0 h-1.5 w-full ${a.accent}`} />
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="font-display text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[28px]">
                  {a.title}
                </h3>
                <p className="mt-4 text-[15.5px] leading-7 text-ink/65">{a.text}</p>

                <ul className="mt-6 space-y-2.5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[14.5px] font-medium text-ink/80">
                      <LuCheck className="shrink-0 text-brand-600" />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#products"
                  className="mt-8 inline-flex items-center gap-2 self-start border-b-2 border-yolk-500 pb-1 text-[15px] font-bold text-ink transition hover:text-brand-600"
                >
                  Voir les produits
                  <LuArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
