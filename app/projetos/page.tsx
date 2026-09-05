import Image from "next/image";
import { portfolioProjects } from "@/content/site";

export const metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">Projetos</p>
        <h1>Galeria para trabalhos recentes.</h1>
        <p>
          Esta página foi preparada para receber fotos reais da Reclar: cozinhas,
          closets, painéis, escritórios e ambientes comerciais.
        </p>
      </section>

      <section className="page-main project-grid">
        {portfolioProjects.map((project) => (
          <article className="project-card" key={project.src}>
            <Image
              src={project.src}
              alt={project.alt}
              fill
              sizes="(max-width: 619px) 100vw, 50vw"
              className="project-card-image"
            />
            <div className="project-card-copy">
              <span className="meta">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
