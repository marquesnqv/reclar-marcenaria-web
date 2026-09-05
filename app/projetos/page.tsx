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
          Esta pagina foi preparada para receber fotos reais da Reclar: cozinhas,
          closets, paineis, escritorios e ambientes comerciais.
        </p>
      </section>

      <section className="page-main project-grid">
        {projectCards.map((project) => (
          <article className="project-card" key={project.title}>
            <span className="meta">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
