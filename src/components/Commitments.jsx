import { LuDroplets, LuHeartHandshake, LuBadgeCheck, LuTruck } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ITEMS = [
  {
    icon: LuDroplets,
    title: "Hygiène rigoureuse",
    text: "Nos bâtiments et nos méthodes respectent des normes d’hygiène strictes, à chaque étape.",
  },
  {
    icon: LuHeartHandshake,
    title: "Bien-être animal",
    text: "Des volailles élevées dans des conditions optimales, pour une qualité qui se goûte.",
  },
  {
    icon: LuBadgeCheck,
    title: "Qualité contrôlée",
    text: "Nos œufs et nos volailles sont contrôlés régulièrement avant d’arriver chez vous.",
  },
  {
    icon: LuTruck,
    title: "Livraison gratuite",
    text: "Nous livrons gratuitement à Libreville, Akanda et Owendo, directement à votre porte.",
  },
];

export default function Commitments() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-24 text-white md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grain absolute inset-0 opacity-60" />
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-brand-600/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-yolk-500/15 blur-3xl" />
      </div>

      <div className="container-site relative">
        <SectionHeading
          tone="dark"
          eyebrow="Nos engagements"
          title={
            <>
              De la ferme à votre table, <span className="italic text-yolk-400">sans compromis</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-yolk-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yolk-500 text-[24px] text-ink transition duration-500 group-hover:rotate-[-8deg]">
                <Icon />
              </span>
              <h3 className="mt-6 font-display text-[22px] font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-white/65">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
