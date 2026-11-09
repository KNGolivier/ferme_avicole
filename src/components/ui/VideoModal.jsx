import { useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";
import farmVideo from "../../assets/farm.mp4";

export default function VideoModal({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vidéo de présentation de la ferme"
      className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl animate-pop-in" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Fermer la vidéo"
          className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
        >
          <LuX />
        </button>
        <video src={farmVideo} controls autoPlay playsInline className="w-full rounded-3xl bg-black shadow-2xl">
          Votre navigateur ne supporte pas la lecture des vidéos.
        </video>
      </div>
    </div>
  );
}
