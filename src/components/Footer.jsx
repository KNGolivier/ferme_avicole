import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuArrowUp, LuArrowUpRight } from "react-icons/lu";
import Logo from "./ui/Logo";
import { ADDRESS, EMAIL, HOURS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SOCIALS, whatsappLink } from "../data/site";

const SOCIAL_ICONS = { facebook: FaFacebookF, instagram: FaInstagram };

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-earth-950 text-white">
      <div className="grain pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="container-site relative">
        {/* Appel à l'action */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 md:flex-row md:items-center md:py-20">
          <h2 className="max-w-[640px] font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[54px]">
            Des produits frais, <span className="italic text-yolk-400">livrés chez vous.</span>
          </h2>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-yolk shrink-0 !px-7 !py-4 text-[16px]">
            <FaWhatsapp className="text-[20px]" /> Commander maintenant
          </a>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-14" />
              <span className="font-display text-[22px] font-semibold">La Marcadèle</span>
            </div>
            <p className="mt-5 max-w-[320px] text-[14.5px] leading-7 text-white/60">
              Ferme Avicole La Marcadèle, votre partenaire de confiance pour une alimentation saine et locale.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(({ id, label, href }) => {
                const Icon = SOCIAL_ICONS[id];
                return (
                  <a key={id} href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[14px] transition hover:border-yolk-400 hover:bg-yolk-400 hover:text-ink">
                    <Icon />
                  </a>
                );
              })}
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[15px] transition hover:border-yolk-400 hover:bg-yolk-400 hover:text-ink">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <nav aria-label="Liens du pied de page">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-yolk-400">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="group inline-flex items-center gap-1.5 text-[15px] text-white/70 transition hover:text-white">
                    {l.label}
                    <LuArrowUpRight className="text-[13px] opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-yolk-400">Contact</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="transition hover:text-white">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="transition hover:text-white">{EMAIL}</a>
              </li>
              <li>{ADDRESS}</li>
              <li>{HOURS}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-[13px] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Ferme Avicole La Marcadèle — Tous droits réservés</p>
          <a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">
            Retour en haut <LuArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
