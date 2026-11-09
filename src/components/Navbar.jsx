import { useEffect, useState } from "react";
import { LuMenu, LuX, LuPhone, LuArrowUpRight } from "react-icons/lu";
import Logo from "./ui/Logo";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > 12);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Surligne le lien de la section actuellement à l'écran
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          solid ? "border-b border-ink/5 bg-cream/85 shadow-[0_8px_30px_-12px_rgba(28,26,23,0.15)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className={`container-site flex items-center justify-between transition-all duration-500 ${solid ? "py-3" : "py-5"}`}>
          <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[-8deg] md:h-12 md:w-12" />
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-[-0.01em] text-ink md:text-[21px]">
                La Marcadèle
              </span>
              <span className="mt-1 block text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brand-600">
                Ferme avicole
              </span>
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 rounded-full border border-ink/5 bg-white/70 p-1.5 shadow-soft backdrop-blur lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-colors duration-300 ${
                    isActive ? "bg-brand-600 text-white" : "text-ink/70 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a href={`tel:${PHONE_TEL}`} className="btn-primary hidden !py-3 lg:inline-flex">
            <LuPhone className="text-[16px]" />
            {PHONE_DISPLAY}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-ink shadow-soft ring-1 ring-ink/5 lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[68px] animate-fade-in overflow-y-auto bg-cream lg:hidden">
          <nav aria-label="Navigation mobile" className="container-site flex flex-col py-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={`flex animate-pop-in items-center justify-between border-b border-ink/10 py-4 font-display text-[28px] font-semibold ${
                  active === link.id ? "text-brand-600" : "text-ink"
                }`}
              >
                {link.label}
                <LuArrowUpRight className="text-xl opacity-40" />
              </a>
            ))}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary">
                <LuPhone /> {PHONE_DISPLAY}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost">
                Commander sur WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
