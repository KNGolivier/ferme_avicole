export const PHONE_DISPLAY = "077 75 14 00";
export const PHONE_TEL = "+24177751400";
export const WHATSAPP_NUMBER = "24177751400";
export const EMAIL = "contact@lamarcadele.ga";
export const ADDRESS = "Akanda, Gabon";
export const HOURS = "Lun – Sam : 7h00 – 18h00";
export const DELIVERY_ZONES = ["Libreville", "Akanda", "Owendo"];

export const NAV_LINKS = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "activities", label: "Nos activités" },
  { id: "products", label: "Nos produits" },
  { id: "gallery", label: "Galerie" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = [
  { id: "facebook", label: "Facebook", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
];

export function whatsappLink(message = "Bonjour La Marcadèle, je souhaite passer une commande.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
