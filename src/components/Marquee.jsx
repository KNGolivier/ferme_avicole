import { FaEgg } from "react-icons/fa";

const WORDS = [
  "Œufs frais",
  "Poulets locaux",
  "Livraison gratuite",
  "Élevage responsable",
  "Produit au Gabon",
  "Hygiène rigoureuse",
];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];

  return (
    <div className="overflow-x-clip py-4" aria-hidden="true">
      <div className="relative -mx-4 -rotate-1 overflow-hidden bg-brand-700 py-5 shadow-lift">
        <div className="flex w-max animate-marquee">
          {items.map((word, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 font-display text-[22px] font-medium italic text-white md:text-[28px]">
              {word}
              <FaEgg className="text-[18px] text-yolk-400" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
