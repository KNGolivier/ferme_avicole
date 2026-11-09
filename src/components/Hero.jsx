import { LuArrowRight, LuTruck, LuShieldCheck, LuLeaf, LuStar } from "react-icons/lu";
import { FaWhatsapp, FaEgg } from "react-icons/fa";
import chickens from "../assets/chickens.jpg";
import eggs from "../assets/hero-eggs.jpg";
import { DELIVERY_ZONES, whatsappLink } from "../data/site";

const HIGHLIGHTS = [
  { icon: LuLeaf, label: "Produits frais et locaux" },
  { icon: LuShieldCheck, label: "Élevage contrôlé" },
  { icon: LuTruck, label: "Livraison gratuite" },
];

function RotatingBadge() {
  return (
    <div className="relative h-[118px] w-[118px] md:h-[132px] md:w-[132px]">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-ink text-[10.5px] font-bold uppercase" style={{ letterSpacing: "0.22em" }}>
          <textPath href="#badge-circle">Élevé au Gabon • Depuis 2017 •</textPath>
        </text>
      </svg>
      <div className="absolute inset-[30px] flex items-center justify-center rounded-full bg-yolk-500 text-ink shadow-lg md:inset-[34px]">
        <FaEgg className="text-[24px]" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 md:pt-32 lg:pb-24 lg:pt-40">
      {/* Décor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grain absolute inset-0" />
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-yolk-200/60 blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-100/70 blur-3xl" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Texte */}
        <div className="lg:col-span-6">
          <div className="inline-flex animate-pop-in items-center gap-2 rounded-full border border-ink/10 bg-white/70 py-1.5 pl-1.5 pr-4 text-[13px] font-semibold text-ink/75 shadow-soft backdrop-blur">
            <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              Akanda
            </span>
            Ferme Avicole La Marcadèle
          </div>

          <h1
            className="mt-7 animate-pop-in font-display text-[46px] font-semibold leading-[0.98] tracking-[-0.035em] text-ink sm:text-[60px] md:text-[72px] xl:text-[80px]"
            style={{ animationDelay: "80ms" }}
          >
            Le goût du{" "}
            <span className="relative inline-block italic text-brand-600">
              frais
              <svg aria-hidden="true" viewBox="0 0 200 20" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-3 w-full text-yolk-500 md:h-4">
                <path d="M2 14 C 50 4, 120 4, 198 12" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            ,<br className="hidden sm:block" /> élevé au Gabon.
          </h1>

          <p
            className="mt-7 max-w-[520px] animate-pop-in text-[17px] leading-8 text-ink/65 md:text-[18px]"
            style={{ animationDelay: "160ms" }}
          >
            Depuis 2017, nous contribuons à la souveraineté alimentaire du Gabon avec des œufs et des volailles frais,
            sains et de qualité.
          </p>

          <div className="mt-9 flex animate-pop-in flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary group">
              <FaWhatsapp className="text-[18px]" />
              Commander sur WhatsApp
            </a>
            <a href="#products" className="btn-ghost group">
              Voir nos produits
              <LuArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="mt-10 flex animate-pop-in flex-wrap gap-x-6 gap-y-3" style={{ animationDelay: "320ms" }}>
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-[14px] font-semibold text-ink/75">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="text-[15px]" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visuel */}
        <div className="relative mx-auto w-full max-w-[560px] animate-pop-in lg:col-span-6 lg:max-w-none" style={{ animationDelay: "200ms" }}>
          <div className="relative ml-auto aspect-[6/5] w-full overflow-hidden rounded-[40px] shadow-lift lg:w-[94%]">
            <img
              src={chickens}
              alt="Poulets blancs élevés à la ferme La Marcadèle"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>

          {/* Badge rotatif */}
          <div className="absolute -left-2 -top-10 rounded-full bg-cream p-2 shadow-soft sm:-left-6 lg:-left-2">
            <RotatingBadge />
          </div>

          {/* Carte œufs */}
          <div className="absolute -bottom-8 left-0 flex animate-float items-center gap-3 rounded-3xl bg-white p-3 pr-5 shadow-lift sm:-left-4">
            <img src={eggs} alt="" className="h-14 w-14 rounded-2xl object-cover md:h-16 md:w-16" />
            <div>
              <p className="text-[15px] font-bold text-ink">Œufs frais</p>
              <p className="flex items-center gap-1 text-[12.5px] text-ink/55">
                <LuStar className="fill-yolk-500 text-yolk-500" /> Contrôlés régulièrement
              </p>
            </div>
          </div>

          {/* Carte livraison */}
          <div className="absolute -right-2 top-1/2 hidden animate-float-delayed rounded-3xl bg-brand-700 p-4 text-white shadow-lift sm:block md:-right-6">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-yolk-300">
              <LuTruck className="text-[16px]" /> Livraison offerte
            </div>
            <div className="mt-2 flex flex-col gap-1">
              {DELIVERY_ZONES.map((zone) => (
                <span key={zone} className="text-[14px] font-semibold">
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
