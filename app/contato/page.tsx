import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">Contato</p>
        <h1>Fale com a Reclar.</h1>
        <p>
          Atendimento em São Bernardo do Campo para projetos residenciais e comerciais.
        </p>
      </section>

      <section className="page-main">
        <div className="contact-grid">
          <article className="contact-card">
            <h3>
              <Phone size={22} /> Telefone
            </h3>
            <p>{siteConfig.phone}</p>
          </article>
          <article className="contact-card">
            <h3>
              <MessageCircle size={22} /> WhatsApp
            </h3>
            <p>Envie fotos e medidas pelo WhatsApp para iniciar o atendimento.</p>
          </article>
          <article className="contact-card">
            <h3>
              <MapPin size={22} /> Endereço
            </h3>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.serviceArea}</p>
            <p>{siteConfig.hours}</p>
          </article>
        </div>

        <Link className="map-panel" href={mapUrl} target="_blank" rel="noreferrer">
          Abrir endereço no Google Maps
        </Link>
      </section>
    </main>
  );
}
