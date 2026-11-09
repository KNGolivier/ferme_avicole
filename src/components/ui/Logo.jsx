import logo from "../../assets/logo.png";

/** Le logo d'origine a de grandes marges blanches : on le recadre dans un cercle. */
export default function Logo({ className = "h-12 w-12" }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-ink/10 ${className}`}>
      <img
        src={logo}
        alt=""
        className="absolute inset-0 h-full w-full translate-y-[7%] scale-[1.42] object-contain"
      />
    </span>
  );
}
