import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Reclar Marcenaria LTDA</p>
        <h2>Móveis sob medida com acabamento limpo e acompanhamento direto.</h2>
      </div>

      <div className="footer-grid">
        <div>
          <strong>Contato</strong>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <div>
          <strong>Endereço</strong>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.hours}</p>
        </div>
        <div className="footer-actions">
          <Link href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </Link>
          <Link href="#" aria-label="Instagram da Reclar">
            <Instagram size={18} />
            Instagram
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026, Reclar Marcenaria.</span>
        <span>Site preparado para Vercel, Supabase e Stripe.</span>
      </div>
    </footer>
  );
}
