import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhone, LuMapPin, LuMail, LuClock, LuSend, LuChevronDown } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { ADDRESS, DELIVERY_ZONES, EMAIL, HOURS, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "../data/site";

const INFOS = [
  { icon: LuPhone, label: "Téléphone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: LuMail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: LuMapPin, label: "Adresse", value: ADDRESS },
  { icon: LuClock, label: "Horaires", value: HOURS },
];

const PRODUCT_OPTIONS = ["Œufs frais", "Poulets blancs", "Poules rousses", "Coquelets", "Autre / plusieurs produits"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", product: PRODUCT_OPTIONS[0], zone: DELIVERY_ZONES[0], message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Bonjour La Marcadèle,",
      `Je m’appelle ${form.name.trim()} et je souhaite commander : ${form.product}.`,
      `Livraison à : ${form.zone}.`,
      form.phone.trim() && `Mon numéro : ${form.phone.trim()}.`,
      form.message.trim() && `\n${form.message.trim()}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative bg-sand py-24 md:py-32">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Contact"
          title="Passez votre commande"
          text="Remplissez le formulaire : votre commande s’ouvre directement dans WhatsApp. Ou appelez-nous, nous répondons du lundi au samedi."
        />

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-5 lg:gap-8">
          {/* Coordonnées */}
          <Reveal className="flex flex-col gap-6 lg:col-span-2">
            <div className="relative overflow-hidden rounded-[32px] bg-brand-700 p-8 text-white">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yolk-500/25 blur-2xl" aria-hidden="true" />
              <p className="relative text-[13px] font-bold uppercase tracking-[0.2em] text-yolk-300">Besoin d’informations&nbsp;?</p>
              <p className="relative mt-3 font-display text-[28px] font-semibold leading-tight">Appelez-nous dès maintenant</p>
              <a href={`tel:${PHONE_TEL}`} className="relative mt-5 block font-display text-[40px] font-semibold tracking-[-0.02em] text-yolk-400 transition hover:text-yolk-300">
                {PHONE_DISPLAY}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn relative mt-6 bg-[#25D366] text-white hover:-translate-y-0.5 hover:bg-[#1fbe5b]">
                <FaWhatsapp className="text-[18px]" /> Écrire sur WhatsApp
              </a>
            </div>

            <ul className="grid gap-3 rounded-[32px] bg-white p-4 shadow-soft">
              {INFOS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-[18px] text-brand-600">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold uppercase tracking-wider text-ink/45">{label}</span>
                      <span className="block truncate text-[15px] font-semibold text-ink">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-cream">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={120} className="rounded-[32px] bg-white p-6 shadow-soft sm:p-8 md:p-10 lg:col-span-3">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[14px] font-semibold text-ink/80">Nom complet</span>
                <input required value={form.name} onChange={update("name")} className="field" placeholder="Votre nom" autoComplete="name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[14px] font-semibold text-ink/80">Téléphone</span>
                <input value={form.phone} onChange={update("phone")} className="field" placeholder="0XX XX XX XX" type="tel" autoComplete="tel" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[14px] font-semibold text-ink/80">Produit</span>
                <span className="relative block">
                  <select value={form.product} onChange={update("product")} className="field cursor-pointer appearance-none pr-11">
                    {PRODUCT_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <LuChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50" aria-hidden="true" />
                </span>
              </label>
              <fieldset>
                <legend className="mb-2 block text-[14px] font-semibold text-ink/80">Zone de livraison</legend>
                <div className="flex flex-wrap gap-2">
                  {DELIVERY_ZONES.map((z) => (
                    <label
                      key={z}
                      className={`cursor-pointer rounded-full border px-4 py-3 text-[14px] font-semibold transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-yolk-500 ${
                        form.zone === z ? "border-brand-600 bg-brand-600 text-white" : "border-ink/10 bg-white text-ink/70 hover:border-brand-400"
                      }`}
                    >
                      <input type="radio" name="zone" value={z} checked={form.zone === z} onChange={update("zone")} className="sr-only" />
                      {z}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[14px] font-semibold text-ink/80">Message (quantité, date souhaitée…)</span>
                <textarea value={form.message} onChange={update("message")} rows={6} className="field resize-none" placeholder="Ex : 2 plateaux d’œufs pour samedi matin" />
              </label>
              <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] text-ink/50">Votre commande s’ouvrira dans WhatsApp, prête à envoyer.</p>
                <button type="submit" className="btn-primary group w-full shrink-0 whitespace-nowrap sm:w-auto">
                  Envoyer la commande
                  <LuSend className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Carte */}
        <Reveal className="mt-6 overflow-hidden rounded-[32px] shadow-soft lg:mt-8">
          <iframe
            title="Localisation de la ferme à Akanda"
            src="https://www.google.com/maps?q=Akanda,Gabon&z=12&output=embed"
            className="h-[320px] w-full border-0 grayscale-[30%] md:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
