import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Reclar Marcenaria inicio">
        <span className="brand-mark">R</span>
        <span>
          <strong>{siteConfig.shortName}</strong>
          <small>Marcenaria</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegacao principal">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        className="header-cta"
        href={`https://wa.me/${siteConfig.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </Link>
    </header>
  );
}
