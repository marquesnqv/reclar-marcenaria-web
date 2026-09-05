import ProjectGallery from "@/components/project-gallery";
import { portfolioProjects } from "@/content/site";

export const metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">Projetos</p>
        <div className="page-hero-heading">
          <div>
            <h1>Ambientes planejados para viver bem.</h1>
            <p>
              Conheça alguns dos projetos da Reclar: móveis sob medida com acabamento
              preciso para cozinhas, closets, dormitórios e áreas integradas.
            </p>
          </div>
          <div className="project-summary" aria-label="Resumo dos projetos">
            <strong>{portfolioProjects.length.toString().padStart(2, "0")}</strong>
            <span>projetos<br />realizados</span>
          </div>
        </div>
      </section>

      <ProjectGallery projects={portfolioProjects} />
    </main>
  );
}
