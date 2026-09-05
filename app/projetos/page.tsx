import Image from "next/image";
import { projectCards } from "@/content/site";

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
        {projectCards.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 900px) 50vw, 50vw"
                className="project-card-image"
              />
            ) : null}
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
