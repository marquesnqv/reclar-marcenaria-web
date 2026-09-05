import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import HeroCarousel from "@/components/hero-carousel";
import QuotePanel from "@/components/quote-panel";
import {
  buildWhatsappUrl,
  defaultQuoteMessage,
  portfolioProjects,
  processSteps,
  projectCards,
  services,
  siteConfig,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="section-kicker">Marcenaria sob medida</p>
          <h1>Móveis pensados para o seu espaço.</h1>
          <p>
            A Reclar Marcenaria cria móveis sob medida para casas e empresas, unindo
            desenho inteligente, acabamento preciso e durabilidade para o uso diário.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href={buildWhatsappUrl(defaultQuoteMessage)} target="_blank">
              <MessageCircle size={18} />
              Solicitar orçamento
            </Link>
            <Link className="secondary-button" href="/projetos">
              Ver projetos
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Galeria de projetos residenciais da Reclar">
          <HeroCarousel images={portfolioProjects} />
          <div className="visual-label">
            Projetos sob medida em São Bernardo do Campo, das 8h às 17h.
          </div>
        </div>
      </section>

      <section className="content-band split-band">
        <div>
          <p className="section-kicker">Serviços</p>
          <p className="section-intro">
            Do primeiro contato à instalação, transformamos necessidades reais em
            ambientes funcionais, acolhedores e bem resolvidos.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band split-band">
        <div>
          <p className="section-kicker">Como funciona</p>
          <p className="section-intro">
            Um processo direto para entender medidas, acabamento e prioridade antes
            de iniciar a produção.
          </p>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="content-band">
        <div className="split-band">
          <div>
            <p className="section-kicker">Projetos</p>
            <p className="section-intro">
              Veja detalhes de projetos residenciais e comerciais executados pela
              nossa equipe, com soluções pensadas para cada ambiente.
            </p>
          </div>
          <div className="card-grid">
            {projectCards.slice(0, 3).map((project) => (
              <article className="service-card image-service-card" key={project.title}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={720}
                    height={480}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="service-card-image"
                  />
                ) : null}
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuotePanel />

      <section className="content-band split-band">
        <div>
          <p className="section-kicker">Contato</p>
          <p className="section-intro">{siteConfig.address}</p>
          <p className="section-intro">{siteConfig.serviceArea}</p>
        </div>
        <div className="contact-card">
          <h3>
            <MapPin size={22} /> Atendimento
          </h3>
          <p>{siteConfig.hours}</p>
          <p>{siteConfig.phone}</p>
        </div>
      </section>
    </main>
  );
}
