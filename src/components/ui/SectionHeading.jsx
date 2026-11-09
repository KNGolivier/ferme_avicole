import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, text, align = "center", tone = "light", className = "" }) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-[720px] ${className}`}>
      <p className={`eyebrow ${dark ? "!text-yolk-400" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[42px] md:text-[50px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-[16px] leading-8 md:text-[17px] ${dark ? "text-white/70" : "text-ink/65"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
