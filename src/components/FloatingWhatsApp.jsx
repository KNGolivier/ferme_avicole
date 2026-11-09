import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white md:p-4 shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition duration-300 hover:-translate-y-1 md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:3s]" aria-hidden="true" />
      <FaWhatsapp className="relative text-[22px] md:text-[26px]" />
    </a>
  );
}
